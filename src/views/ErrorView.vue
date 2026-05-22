<script lang="ts">
export default {
  name: 'ErrorView',

  props: {
    code: {
      type: String,
      default: '404',
    },
  },

  computed: {
    errorTitle() {
      const titles: Record<string, string> = {
        '400': 'Bad Request',
        '401': 'Unauthorized',
        '403': 'Forbidden',
        '404': 'Page Not Found',
        '500': 'Server Error',
        '503': 'Service Unavailable',
      }

      return titles[this.code] || 'Unexpected Error'
    },

    errorMessage() {
      const messages: Record<string, string> = {
        '400': 'The request could not be understood.',
        '401': 'You need permission to view this page.',
        '403': 'Access to this page is restricted.',
        '404': 'The page you are looking for does not exist.',
        '500': 'Something went wrong on our side.',
        '503': 'This service is temporarily unavailable.',
      }

      return messages[this.code] || 'An unexpected error occurred.'
    },
  },
}
</script>

<template>
  <v-container
    class="fill-height d-flex flex-column align-center justify-center text-center"
  >
    <h1 class="text-h2 font-weight-bold">
      {{ code }}
    </h1>

    <h2 class="text-h5 mt-2">
      {{ errorTitle }}
    </h2>

    <p class="text-medium-emphasis mt-3">
      {{ errorMessage }}
    </p>

    <v-btn
      class="mt-6"
      color="primary"
      to="/"
    >
      Go Home
    </v-btn>
  </v-container>
</template>
