<script lang="ts">
import { gsap } from 'gsap'
import { useHead } from '@unhead/vue'

type ServiceType =
  | 'Website'
  | 'Web System'
  | 'Mobile App'
  | 'Windows App'
  | 'IT Services'
  | 'Custom'
  | 'Other'

type ChatMessage = {
  from: 'bot' | 'user'
  text: string
  questionIndex?: number
}

export default {
  name: 'ContactView',

  setup() {
      useHead({
        title: 'Contact | IV Code',
        meta: [
          {
            name: 'description',
            content:
              'Contact IV Code for full-stack development, manufacturing systems, internal business tools, automation, and software consulting.',
          },
          {
            name: 'keywords',
            content:
              'contact developer, software developer, full stack developer, business systems, manufacturing software, automation tools',
          },

          // Open Graph
          {
            property: 'og:title',
            content: 'Contact | IV Code',
          },
          {
            property: 'og:description',
            content:
              'Get in touch regarding software projects, internal systems, web applications, and development services.',
          },

          // Twitter
          {
            name: 'twitter:title',
            content: 'Contact | IV Code',
          },
          {
            name: 'twitter:description',
            content:
              'Reach out to IV Code for development projects and consulting.',
          },
        ],
      })
    },

  data() {
    return {
      selectedService: '' as ServiceType | '',
      currentInput: '',
      email: '',
      emailError: '',
      answers: Array(8).fill('') as string[],

      currentQuestionIndex: 0,
      typedText: '',
      typingTimer: null as ReturnType<typeof setInterval> | null,

      submitAttempts: 0,
      submitBlocked: false,
      botIgnored: false,

      myEmail: 'isaac@iv-code.io',

      chatMessages: [] as ChatMessage[],
      messageRefs: [] as HTMLElement[],
    }
  },

  computed: {
    services(): ServiceType[] {
      return this.$tm('contact.serviceList') as ServiceType[]
    },

    activeQuestions(): string[] {
      if (!this.selectedService) return []

      return this.$tm(`contact.questions.${this.selectedService}`) as string[]
    },

    activePresets(): string[] {
      if (!this.selectedService || this.isAskingEmail) return []

      const presets = this.$tm(`contact.presets.${this.selectedService}`) as string[][]

      return presets[this.currentQuestionIndex] || []
    },

    activeExplanations(): string[] {
      if (!this.selectedService) return []

      return this.$tm(`contact.explanations.${this.selectedService}`) as string[]
    },

    currentQuestion(): string {
      return this.activeQuestions[this.currentQuestionIndex] || ''
    },

    isAskingEmail(): boolean {
      return Boolean(this.selectedService && this.currentQuestionIndex >= this.activeQuestions.length)
    },

    inputLabel(): string {
      if (!this.selectedService) return this.$t('contact.labels.chooseService')
      if (this.isAskingEmail) return this.$t('contact.labels.enterEmail')

      return this.currentQuestion
    },

    emailSubject(): string {
      const quoteRequest = this.$t('contact.messages.quoteRequest')
      const project = this.$t('contact.messages.project')

      return `${quoteRequest} - ${this.selectedService || project}`
    },

    emailBody(): string {
      return `${this.$t('contact.messages.emailBodyGreeting')},

${this.$t('contact.messages.emailBodyService')}:
${this.selectedService ? this.serviceLabel(this.selectedService) : ''}

${this.$t('contact.messages.emailBodyClientEmail')}:
${this.email || this.$t('contact.messages.clientEmail')}

${this.$t('contact.messages.emailBodyQuestions')}:

${this.activeQuestions
  .map((question, index) => {
    return `${index + 1}. ${question}

${this.answers[index] || this.$t('contact.messages.noAnswer')}`
  })
  .join('\n\n')}

${this.$t('contact.messages.emailBodyThanks')}`
    },

    mailtoLink(): string {
      return `mailto:${this.myEmail}?subject=${encodeURIComponent(
        this.emailSubject,
      )}&body=${encodeURIComponent(this.emailBody)}`
    },
  },

  mounted() {
    this.resetBot()
  },

  methods: {
    serviceLabel(service: ServiceType): string {
      return this.$t(`contact.services.${service}`)
    },

    setMessageRef(el: unknown, index: number) {
      if (!el) return

      const element = el as HTMLElement & { $el?: HTMLElement }

      this.messageRefs[index] = element.$el || element
    },

    addChatMessage(message: ChatMessage) {
      this.chatMessages.push(message)
      this.animateLastMessage()
      this.scrollBottom()
    },

    animateLastMessage() {
      this.$nextTick(() => {
        requestAnimationFrame(() => {
          const el = this.messageRefs[this.chatMessages.length - 1]
          if (!el) return

          gsap.from(el, {
            opacity: 0,
            y: 12,
            duration: 0.35,
            ease: 'power2.out',
          })
        })
      })
    },

    isExplainInput(value: string): boolean {
      return value.trim().toLowerCase() === 'explain'
    },

    explainCurrentQuestion() {
      if (!this.selectedService || this.isAskingEmail) return

      const explanation = this.activeExplanations[this.currentQuestionIndex]

      this.addChatMessage({
        from: 'bot',
        text: explanation,
      })
    },

    sendPresetAnswer(answer: string) {
      this.currentInput = answer
      this.sendInput()
    },

    selectService(service: ServiceType) {
      this.selectedService = service
      this.currentInput = ''
      this.email = ''
      this.emailError = ''
      this.answers = Array(8).fill('')
      this.currentQuestionIndex = 0
      this.submitAttempts = 0
      this.submitBlocked = false
      this.botIgnored = false

      this.addChatMessage({
        from: 'user',
        text: this.serviceLabel(service),
      })

      this.startTypewriter(this.activeQuestions[0])
    },

    startTypewriter(text: string) {
      if (this.botIgnored) return

      this.typedText = ''

      if (this.typingTimer) clearInterval(this.typingTimer)

      let index = 0

      this.typingTimer = setInterval(() => {
        this.typedText += text[index]
        index++

        this.scrollBottom()

        if (index >= text.length) {
          if (this.typingTimer) clearInterval(this.typingTimer)

          this.addChatMessage({
            from: 'bot',
            text,
            questionIndex: this.currentQuestionIndex,
          })

          this.typedText = ''
          this.scrollBottom()
        }
      }, 24)
    },

    scrollBottom() {
      this.$nextTick(() => {
        requestAnimationFrame(() => {
          const chatContainer = this.$refs.chatContainer as HTMLDivElement | undefined
          if (!chatContainer) return

          chatContainer.scrollTop = chatContainer.scrollHeight
        })
      })
    },

    isValidEmail(email: string): boolean {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
      return emailRegex.test(email)
    },

    sendInput() {
      const value = this.currentInput.trim()

      if (!value || !this.selectedService || this.botIgnored) return

      if (this.isExplainInput(value)) {
        this.currentInput = ''
        this.explainCurrentQuestion()
        return
      }

      if (this.isAskingEmail) {
        if (!this.isValidEmail(value)) {
          this.emailError = this.$t('contact.messages.invalidEmail')

          this.addChatMessage({
            from: 'bot',
            text: this.emailError,
          })

          return
        }

        this.emailError = ''
        this.email = value

        this.addChatMessage({
          from: 'user',
          text: value,
        })

        this.addChatMessage({
          from: 'bot',
          text: this.$t('contact.messages.requestReady'),
        })

        this.currentInput = ''
        return
      }

      this.answers[this.currentQuestionIndex] = value

      this.addChatMessage({
        from: 'user',
        text: value,
      })

      this.currentInput = ''

      if (this.currentQuestionIndex < this.activeQuestions.length - 1) {
        this.currentQuestionIndex++
        this.startTypewriter(this.currentQuestion)
      } else {
        this.currentQuestionIndex++
        this.startTypewriter(this.$t('contact.messages.askEmail'))
      }
    },

    submitRequest() {
      if (!this.email || !this.selectedService || this.submitBlocked) return

      this.submitAttempts++

      if (this.submitAttempts >= 4) {
        this.submitBlocked = true

        this.addChatMessage({
          from: 'bot',
          text: `${this.$t('contact.messages.emailAppFailed')} ${this.myEmail}:\n\n${this.emailBody}`,
        })

        return
      }

      window.location.href = this.mailtoLink

      this.addChatMessage({
        from: 'bot',
        text: this.$t('contact.messages.openingEmail'),
      })
    },

    resetBot() {
      if (this.typingTimer) clearInterval(this.typingTimer)

      this.selectedService = ''
      this.currentInput = ''
      this.email = ''
      this.emailError = ''
      this.answers = Array(8).fill('')
      this.currentQuestionIndex = 0
      this.typedText = ''
      this.submitAttempts = 0
      this.submitBlocked = false
      this.botIgnored = false
      this.messageRefs = []

      this.chatMessages = [
        {
          from: 'bot',
          text: this.$t('contact.messages.welcome'),
        },
      ]

      this.scrollBottom()
    },

    ignoreBot() {
      if (this.typingTimer) clearInterval(this.typingTimer)

      this.botIgnored = true
      this.typedText = ''
      this.messageRefs = []

      this.chatMessages = [
        {
          from: 'bot',
          text: `${this.$t('contact.messages.ignoreFlow')}

Email:
${this.myEmail}`,
        },
      ]

      this.scrollBottom()
    },

    copyEmail() {
      navigator.clipboard?.writeText(this.myEmail)

      this.addChatMessage({
        from: 'bot',
        text: this.$t('contact.messages.emailCopied'),
      })
    },

    openDirectEmail() {
      window.location.href = `mailto:${this.myEmail}`
    },
  },

  beforeUnmount() {
    if (this.typingTimer) clearInterval(this.typingTimer)
  },
}
</script>

<template>
  <v-row justify="center" class="bg-transparent">
    <v-col cols="12" md="8" lg="6" xl="4">
      <v-card max-width="960" class="px-4 mb-16 bg-transparent rounded-lg" elevation="0">
        <p class="text-caption font-weight-bold ma-0">
          {{ $t('contact.title') }}
        </p>

        <p class="mx-0 mt-0 mb-4 text-grey" style="font-size: 14px;">
          {{ $t('contact.subtitle') }}
        </p>

        <div class="d-flex justify-end mb-3">
          <v-btn size="small" color="orange" variant="tonal" @click="resetBot">
            {{ $t('contact.buttons.reset') }}
          </v-btn>

          <v-btn size="small" color="red" variant="text" @click="ignoreBot">
            {{ $t('contact.buttons.ignore') }}
          </v-btn>
        </div>

        <v-row v-if="!selectedService && !botIgnored" class="mb-6">
          <v-col v-for="service in services" :key="service" cols="12" sm="6" lg="4">
            <v-btn class="mb-n4" block color="ctext" variant="outlined" @click="selectService(service)">
              {{ serviceLabel(service) }}
            </v-btn>
          </v-col>
        </v-row>

        <v-card class="pa-0 bg-grey-darken-4 rounded-lg mb-2" elevation="0">
          <div ref="chatContainer" class="chat-scroll pa-1">
            <div
              v-for="(message, index) in chatMessages"
              :key="index"
              class="mb-3 d-flex"
              :class="message.from === 'user' ? 'justify-end' : 'justify-start'"
            >
              <v-card
                :ref="(el) => setMessageRef(el, index)"
                class="pa-3 rounded-lg"
                :class="message.from === 'user' ? 'bg-ctext' : 'bg-surface'"
                elevation="0"
                max-width="82%"
                @click="message.questionIndex !== undefined ? explainCurrentQuestion() : null"
              >
                <p class="ma-0 text-body-2 message-text">
                  {{ message.text }}
                </p>

                <p
                  v-if="message.questionIndex !== undefined"
                  class="ma-0 mt-2 text-grey"
                  style="font-size: 12px"
                >
                  {{ $t('contact.messages.explain') }}
                </p>
              </v-card>
            </div>

            <div v-if="typedText" class="d-flex justify-start mb-3">
              <v-card class="pa-3 rounded-lg bg-surface" elevation="0" max-width="82%">
                <p class="ma-0 text-body-2">
                  {{ typedText }}<span class="cursor">|</span>
                </p>
              </v-card>
            </div>
          </div>
        </v-card>

        <div v-if="botIgnored" class="d-flex flex-wrap ga-3">
          <v-btn color="ctext" variant="flat" @click="openDirectEmail">
            {{ $t('contact.buttons.email') }}
          </v-btn>

          <v-btn color="ctext" variant="outlined" @click="copyEmail">
            {{ $t('contact.buttons.copy') }}
          </v-btn>
        </div>

        <template v-else>
          <v-textarea
            v-model="currentInput"
            :label="inputLabel"
            :disabled="!selectedService || Boolean(email)"
            :error-messages="emailError"
            variant="outlined"
            rows="3"
            auto-grow
            class="mb-2"
            @keydown.enter.exact.prevent="sendInput"
          />

          <div v-if="activePresets.length" class="d-flex flex-wrap ga-2 mb-3">
            <v-btn
              v-for="preset in activePresets"
              :key="preset"
              size="small"
              color="ctext"
              variant="outlined"
              @click="sendPresetAnswer(preset)"
            >
              {{ preset }}
            </v-btn>
          </div>

          <div class="d-flex flex-wrap ga-3">
            <v-btn
              color="ctext"
              variant="flat"
              :disabled="!selectedService || !currentInput || Boolean(email)"
              @click="sendInput"
            >
              {{ $t('contact.buttons.send') }}
            </v-btn>

            <v-btn
              color="ctext"
              variant="outlined"
              :disabled="!email || !selectedService || submitBlocked"
              @click="submitRequest"
            >
              {{ $t('contact.buttons.submit') }}
            </v-btn>
          </div>
        </template>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>
.chat-scroll {
  height: 360px;
  overflow-y: auto;
}

.cursor {
  animation: blink 0.9s infinite;
}

.message-text {
  white-space: pre-wrap;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
