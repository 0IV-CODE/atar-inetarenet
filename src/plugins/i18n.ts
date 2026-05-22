import { createI18n } from 'vue-i18n'
import { en, es, fr } from 'vuetify/locale'

const messages = {
  en: {
    $vuetify: { ...en },

    app: {
       home: 'Home',
      contact: 'Contact',
      openSource: 'Open Source',

      menu: 'Menu',
      language: 'Language',
      darkMode: 'Dark Mode',
      lightMode: 'Light Mode',
    },

    home: {
      brand: 'IV Code',
      title: 'Full-Stack Developer',
      subtitle:
        'I build fast, practical systems for inventory, manufacturing workflows, internal tools, dashboards, and mobile-first applications.',
      contactMe: 'Contact Me',
      openSource: 'Open Source',

      results: 'Results',
      resultsTitle: 'Practical systems that improve daily operations.',
      resultsText:
        'I build fast internal tools, clean data workflows, and mobile-friendly applications that help teams work with less friction.',
      builtFor: 'Built for real workflows',
      builtForText:
        'Inventory control, employee systems, production workflows, dashboards, quoting tools, and reliable data structures.',

      process: 'Process',
      processTitle: 'A clear build process for different project types.',
      processText:
        'Pick a project type, choose a path, then move through the node flow inside the card.',

      flow: {
        website: 'Website',
        system: 'Web System',
        mobile: 'Mobile App',
        windows: 'Windows App',
      },

      stats: {
        years: 'Years IT / Dev Experience',
        records: 'Records Managed',
        features: 'Features Delivered',
        mobile: 'Mobile-Focused UI',
      },

      paths: {
        simpleWebsite: 'Simple Website',
        complexWebsite: 'Complex Website',
        internalSystem: 'Internal System',
        externalSystem: 'External System',
        offlineMobile: 'Offline Mobile',
        onlineMobile: 'Online Mobile',
        localWindows: 'Local Desktop',
        networkWindows: 'Network Desktop',
      },

      nodes: {
        website: {
          simple: {
            generalInfo: {
              title: 'General Info',
              subtitle: 'Goal, pages, audience',
              detail:
                'Collect the main goal, target visitor, pages needed, brand direction, and primary CTA.',
            },
            layout: {
              title: 'Layout',
              subtitle: 'Home, contact, services',
              detail:
                'Create a simple page structure with a clear hero, service blocks, proof, and contact path.',
            },
            build: {
              title: 'Build',
              subtitle: 'Responsive Vue site',
              detail:
                'Build a fast responsive website using Vue, Vuetify, clean sections, and lightweight visuals.',
            },
            launch: {
              title: 'Launch',
              subtitle: 'SEO, speed, deploy',
              detail:
                'Optimize title tags, meta text, images, mobile speed, and deploy the production site.',
            },
          },

          complex: {
            generalInfo: {
              title: 'General Info',
              subtitle: 'Content, users, goals',
              detail:
                'Define business goals, user types, content depth, CMS needs, SEO targets, and conversion paths.',
            },
            architecture: {
              title: 'Architecture',
              subtitle: 'Routes, content, data',
              detail:
                'Map route structure, reusable sections, dynamic pages, content models, and navigation logic.',
            },
            interactiveUi: {
              title: 'Interactive UI',
              subtitle: 'Filters, forms, motion',
              detail:
                'Build interactive sections, contact flows, filtering, animations, and conversion-focused UI.',
            },
            production: {
              title: 'Production',
              subtitle: 'Analytics, SEO, deploy',
              detail:
                'Add analytics, technical SEO, performance checks, deployment, and post-launch refinement.',
            },
          },
        },

        system: {
          internal: {
            generalInfo: {
              title: 'General Info',
              subtitle: 'Team, pain points, data',
              detail:
                'Document the team workflow, current problems, manual steps, data sources, and user roles.',
            },
            database: {
              title: 'Database',
              subtitle: 'Tables and rules',
              detail:
                'Design tables, relationships, validation rules, permissions, audit needs, and core records.',
            },
            tools: {
              title: 'Tools',
              subtitle: 'CRUD, search, reports',
              detail:
                'Build internal tools for create, edit, search, filters, dashboards, exports, and daily workflow.',
            },
            improve: {
              title: 'Improve',
              subtitle: 'Test and optimize',
              detail:
                'Test with real users, reduce friction, improve speed, and refine based on production feedback.',
            },
          },

          external: {
            generalInfo: {
              title: 'General Info',
              subtitle: 'Users, access, risks',
              detail:
                'Define public users, account types, permissions, exposed data, security needs, and support flow.',
            },
            auth: {
              title: 'Auth',
              subtitle: 'Login and access',
              detail:
                'Plan authentication, role-based access, protected routes, validation, and safe data boundaries.',
            },
            portal: {
              title: 'Portal',
              subtitle: 'Client-facing UI',
              detail:
                'Build clean portal views for user actions, records, status tracking, forms, and communication.',
            },
            deploy: {
              title: 'Deploy',
              subtitle: 'Secure production',
              detail:
                'Deploy with production security, error handling, monitoring, backups, and update process.',
            },
          },
        },

        mobile: {
          offline: {
            generalInfo: {
              title: 'General Info',
              subtitle: 'Field use and limits',
              detail:
                'Identify field workflow, low-signal problems, storage needs, device limits, and offline priorities.',
            },
            localData: {
              title: 'Local Data',
              subtitle: 'Offline-first storage',
              detail:
                'Design local tables, sync-ready records, conflict rules, cached assets, and backup options.',
            },
            mobileUi: {
              title: 'Mobile UI',
              subtitle: 'Fast touch screens',
              detail:
                'Build simple mobile screens with large touch targets, low battery usage, and quick navigation.',
            },
            package: {
              title: 'Package',
              subtitle: 'Android/iOS build',
              detail:
                'Package with Capacitor, test on devices, check permissions, storage, and production builds.',
            },
          },

          online: {
            generalInfo: {
              title: 'General Info',
              subtitle: 'Live data and users',
              detail:
                'Define users, live data needs, API usage, login flow, speed goals, and mobile network limits.',
            },
            api: {
              title: 'API',
              subtitle: 'Backend connection',
              detail:
                'Connect to APIs, structure requests, handle loading states, validation, errors, and permissions.',
            },
            experience: {
              title: 'Experience',
              subtitle: 'Realtime or synced UI',
              detail:
                'Build mobile screens around fresh data, caching, refresh states, notifications, and clean feedback.',
            },
            release: {
              title: 'Release',
              subtitle: 'Deploy and monitor',
              detail:
                'Test online behavior, deploy app builds, monitor errors, and refine after real usage.',
            },
          },
        },

        windows: {
          local: {
            generalInfo: {
              title: 'General Info',
              subtitle: 'Workflow and users',
              detail:
                'Define desktop workflow, target users, required tools, and offline requirements.',
            },
            data: {
              title: 'Data',
              subtitle: 'Files and storage',
              detail:
                'Plan local database usage, file imports, exports, caching, and backups.',
            },
            desktopUi: {
              title: 'Desktop UI',
              subtitle: 'Fast workflow',
              detail:
                'Build keyboard-friendly layouts, tables, search systems, and productivity tools.',
            },
            installer: {
              title: 'Installer',
              subtitle: 'Windows package',
              detail:
                'Create installers using Electron, updates, permissions, and deployment process.',
            },
          },

          network: {
            generalInfo: {
              title: 'General Info',
              subtitle: 'Users and access',
              detail:
                'Define shared usage, permissions, security model, and network requirements.',
            },
            server: {
              title: 'Server',
              subtitle: 'Sync and APIs',
              detail:
                'Build API communication, shared storage, authentication, and sync.',
            },
            desktopClient: {
              title: 'Desktop Client',
              subtitle: 'Connected software',
              detail:
                'Create client software using Electron optimized for large workflows and realtime data.',
            },
            deploy: {
              title: 'Deploy',
              subtitle: 'Install and maintain',
              detail:
                'Deploy updates, monitoring, backups, and maintenance flow.',
            },
          },
        },
      },
    },

    contact: {
      title: 'Quick Email',
      subtitle:
        'Answer a few quick questions so I can understand your project or question faster. You can skip this anytime and email me directly.',

      buttons: {
        reset: 'Reset Bot',
        ignore: 'Ignore Bot',
        email: 'Email Me',
        copy: 'Copy Email',
        send: 'Send',
        submit: 'Submit Request',
      },

      labels: {
        chooseService: 'Choose a service first',
        enterEmail: 'Enter your email',
      },

      messages: {
        welcome: 'Choose what service you need so I can ask the right quote questions.',
        requestReady: 'Request ready. Submit it when you are ready.',
        invalidEmail: 'That email is invalid. Please enter a valid email.',
        askEmail: 'What email should I use to contact you?',
        openingEmail: 'Opening your email app with the request prefilled.',
        emailCopied: 'Email copied.',
        ignoreFlow: 'No bot flow. You can contact me directly here:',
        emailAppFailed: 'Email app did not open correctly. Send this manually to',
        explain: 'Enter "explain" for more details.',
        noAnswer: '[No answer]',
        clientEmail: '[client email]',
        emailBodyGreeting: 'Hello Isaac',
        emailBodyService: 'Service',
        emailBodyClientEmail: 'Client Email',
        emailBodyQuestions: 'Questions',
        emailBodyThanks: 'Thank you.',
        quoteRequest: 'Quote Request',
        project: 'Project',
      },

      services: {
        Website: 'Website',
        'Web System': 'Web System',
        'Mobile App': 'Mobile App',
        'Windows App': 'Windows App',
        'IT Services': 'IT Services',
        Custom: 'Custom',
        Other: 'Other',
      },

      serviceList: [
        'Website',
        'Web System',
        'Mobile App',
        'Windows App',
        'IT Services',
        'Custom',
        'Other',
      ],

      questions: {
        Website: [
          'What type of website do you need?',
          'How many pages do you need?',
          'Do you already have content, logo, images, or branding?',
          'What is the main goal: leads, sales, booking, portfolio, or information?',
          'Do you need forms, booking, payments, blog, or admin editing?',
          'Do you already have a domain and hosting?',
          'What is your estimated budget?',
          'What is your ideal launch date?',
        ],
        'Web System': [
          'What business problem or workflow should this system fix?',
          'Who will use it: admins, employees, customers, or all three?',
          'What main features are needed first?',
          'Do you need logins, roles, reports, file uploads, or dashboards?',
          'Does it need to connect to Excel, APIs, databases, or existing tools?',
          'How much data or how many users do you expect?',
          'What is your estimated budget?',
          'What is your ideal timeline?',
        ],
        'Mobile App': [
          'Should the app work offline, online, or both?',
          'Who will use the app?',
          'What are the main actions users need to complete?',
          'Should this be Android only, iOS only, or both?',
          'Do you need accounts, sync, notifications, maps, camera, or files?',
          'Will the app need an admin panel or web dashboard?',
          'What is your estimated budget?',
          'What is your ideal release date?',
        ],
        'Windows App': [
          'What task should the Windows app automate or simplify?',
          'Does it need to connect to Excel, files, databases, machines, or APIs?',
          'Who will use it and how often?',
          'Do you need installer support, local storage, or admin controls?',
          'Does it need to run offline?',
          'What Windows versions or devices should it support?',
          'What is your estimated budget?',
          'What is your ideal timeline?',
        ],
        'IT Services': [
          'What issue, setup, or support do you need?',
          'Is this for personal, business, or team use?',
          'What devices, accounts, or systems are involved?',
          'Is this urgent or flexible?',
          'Is this a one-time fix or ongoing support?',
          'Do you need remote help, in-person help, or documentation?',
          'What is your estimated budget?',
          'When do you need this handled?',
        ],
        Custom: [
          'Describe your custom idea.',
          'What problem should it solve?',
          'Who would use it?',
          'What would a successful result look like?',
          'What features matter most for version one?',
          'Do you have examples, sketches, files, or existing tools?',
          'What is your estimated budget?',
          'What is your ideal timeline?',
        ],
        Other: [
          'What are you trying to build, fix, or improve?',
          'What details do you already know?',
          'What kind of help are you looking for?',
          'What is your ideal timeline?',
          'Who is this for?',
          'What result do you want at the end?',
          'What is your estimated budget?',
          'Is there anything important I should know first?',
        ],
      },

      presets: {
        Website: [
          ['Business site', 'Landing page', 'Portfolio', 'E-commerce', 'Other'],
          ['1', '2', '3', '4', '5+'],
          ['Yes', 'No', 'Some', 'N/A'],
          ['Leads', 'Sales', 'Booking', 'Portfolio', 'Information'],
          ['Yes', 'No', 'Maybe', 'N/A'],
          ['Yes', 'No', 'Need help'],
          ['$500-$1k', '$1k-$3k', '$3k-$7k', '$7k-$15k', '$15k+'],
          ['ASAP', '2-4 weeks', '1-2 months', 'Flexible'],
        ],
        'Web System': [
          ['Inventory', 'CRM', 'Dashboard', 'Workflow', 'Other'],
          ['Admins', 'Employees', 'Customers', 'All'],
          ['CRUD', 'Reports', 'Dashboard', 'Automation', 'Other'],
          ['Yes', 'No', 'Maybe', 'N/A'],
          ['Yes', 'No', 'Maybe', 'N/A'],
          ['1-5', '6-20', '21-100', '100+'],
          ['$2k-$5k', '$5k-$10k', '$10k-$20k', '$20k-$50k', '$50k+'],
          ['ASAP', '1 month', '2-3 months', 'Flexible'],
        ],
        'Mobile App': [
          ['Offline', 'Online', 'Both', 'Not sure'],
          ['Customers', 'Employees', 'Admins', 'Public'],
          ['Track data', 'Submit forms', 'Map tools', 'Scan/Upload', 'Other'],
          ['Android', 'iOS', 'Both', 'Not sure'],
          ['Yes', 'No', 'Maybe', 'N/A'],
          ['Yes', 'No', 'Maybe'],
          ['$5k-$10k', '$10k-$20k', '$20k-$40k', '$40k+'],
          ['ASAP', '1-2 months', '3-6 months', 'Flexible'],
        ],
        'Windows App': [
          ['Automation', 'Data entry', 'Reports', 'Machine/files', 'Other'],
          ['Yes', 'No', 'Maybe', 'N/A'],
          ['1 user', '2-5 users', '6-20 users', '20+'],
          ['Yes', 'No', 'Maybe', 'N/A'],
          ['Yes', 'No', 'Maybe'],
          ['Windows 10', 'Windows 11', 'Both', 'Not sure'],
          ['$2k-$5k', '$5k-$10k', '$10k-$20k', '$20k+'],
          ['ASAP', '1 month', '2-3 months', 'Flexible'],
        ],
        'IT Services': [
          ['Setup', 'Troubleshooting', 'Security', 'Support', 'Other'],
          ['Personal', 'Business', 'Team'],
          ['Computer', 'Network', 'Accounts', 'Software', 'Other'],
          ['Urgent', 'This week', 'Flexible'],
          ['One-time', 'Ongoing', 'Not sure'],
          ['Remote', 'In-person', 'Documentation', 'Not sure'],
          ['$100-$500', '$500-$2k', '$2k-$5k', '$5k+'],
          ['Today', 'This week', 'This month', 'Flexible'],
        ],
        Custom: [
          [],
          [],
          ['Customers', 'Employees', 'Admins', 'Personal', 'Other'],
          [],
          ['Core feature', 'Automation', 'Dashboard', 'Mobile', 'Other'],
          ['Yes', 'No', 'Some', 'N/A'],
          ['$500-$1k', '$1k-$3k', '$3k-$5k', '$5k+'],
          ['ASAP', '1 month', '2-3 months', 'Flexible'],
        ],
        Other: [
          [],
          [],
          ['Build', 'Fix', 'Improve', 'Consult'],
          ['ASAP', '1 month', '2-3 months', 'Flexible'],
          ['Personal', 'Business', 'Team', 'Public'],
          [],
          ['$500-$1k', '$1k-$3k', '$3k-$5k', '$5k+'],
          ['Yes', 'No', 'N/A'],
        ],
      },

      explanations: {
        Website: [
          'This helps define whether the website is simple, marketing-focused, sales-focused, or more advanced.',
          'Page count helps estimate design time, content structure, and cost.',
          'Existing content lowers the project time. Missing content may require extra planning or copywriting.',
          'The goal affects the layout, call-to-action, and features.',
          'These features can change the build size and complexity.',
          'Domain and hosting status affects launch setup.',
          'A rough budget helps match the right scope instead of overbuilding.',
          'Timeline helps decide whether this should be a fast MVP or a fuller build.',
        ],
        'Web System': [
          'This identifies the real business problem before choosing features.',
          'User types affect permissions, dashboards, and workflow.',
          'Core features help define the first useful version.',
          'These are common system features that affect cost and structure.',
          'Integrations can add complexity, testing, and setup time.',
          'User and data size affect performance planning.',
          'Budget helps define a realistic first phase.',
          'Timeline helps separate must-have features from later features.',
        ],
        'Mobile App': [
          'Offline support changes the app structure and data storage.',
          'User type affects navigation, permissions, and design.',
          'Main actions define the core app flow.',
          'Platform choice affects build and testing scope.',
          'Device features can add complexity.',
          'Admin panels are often needed to manage app content or users.',
          'Budget helps estimate what version one can include.',
          'Release date helps decide the MVP scope.',
        ],
        'Windows App': [
          'This defines the main reason for the desktop app.',
          'Integrations affect complexity and testing.',
          'User count affects installation, updates, and permissions.',
          'These details affect setup and support needs.',
          'Offline support affects local data storage.',
          'Windows version matters for compatibility.',
          'Budget helps keep the first version realistic.',
          'Timeline helps plan the right build size.',
        ],
        'IT Services': [
          'This helps identify whether the work is repair, setup, cleanup, or planning.',
          'Use case affects the level of documentation and setup.',
          'Device and system details help diagnose faster.',
          'Urgency affects scheduling and priority.',
          'One-time vs ongoing changes the support approach.',
          'Support method affects how the work should be handled.',
          'Budget helps define what can be handled first.',
          'Timing helps decide urgency.',
        ],
        Custom: [
          'A short idea summary gives the project direction.',
          'The problem defines why the project should exist.',
          'The users shape the design and features.',
          'Success criteria help avoid vague scope.',
          'Version one should focus on the most valuable features first.',
          'Examples and files help clarify the idea faster.',
          'Budget helps define a realistic starting version.',
          'Timeline helps decide the project pace.',
        ],
        Other: [
          'This gives the starting point.',
          'Known details reduce guessing.',
          'This clarifies whether you need building, fixing, improving, or consulting.',
          'Timeline helps estimate urgency.',
          'Audience affects design and complexity.',
          'The final result helps define scope.',
          'Budget helps keep recommendations realistic.',
          'Extra context can prevent incorrect assumptions.',
        ],
      },
    },

    openSource: {
      stack: 'STACK',

      projects: [
        {
          name: 'EvanGrid',
          status: 'ACTIVE',
          type: 'Offline-First Mission Mapping',
          desc: 'A mobile-first missionary mapping platform focused on offline usability. Create zones, houses, routes, notes, and territory planning tools with optional online map support. Designed for field work where connectivity is limited.',
          stack: ['Vue 3', 'Capacitor', 'Vuetify', 'Pinia', 'MapLibre', 'Offline Storage'],
          tags: ['Offline First', 'Android', 'iOS', 'Mission Tools', 'Mapping'],
        },
      ],

      terminal: {
        scanning: 'scanning open source directory...',
        indexed: 'repositories indexed',
        awaiting: 'awaiting future deployments',
        ready: 'system ready',
      },
    },
  },

  es: {
    $vuetify: { ...es },

    app: {
      home: 'Inicio',
      contact: 'Contacto',
      openSource: 'Código Abierto',

      menu: 'Menú',
      language: 'Idioma',
      darkMode: 'Modo Oscuro',
      lightMode: 'Modo Claro',
    },

    home: {
      brand: 'IV Code',
      title: 'Desarrollador Full-Stack',
      subtitle:
        'Desarrollo sistemas rápidos y prácticos para inventario, manufactura, herramientas internas, paneles y aplicaciones móviles.',
      contactMe: 'Contáctame',
      openSource: 'Código Abierto',

      results: 'Resultados',
      resultsTitle: 'Sistemas prácticos que mejoran operaciones diarias.',
      resultsText:
        'Desarrollo herramientas internas rápidas, flujos de datos limpios y aplicaciones móviles que ayudan a los equipos a trabajar con menos fricción.',
      builtFor: 'Creado para flujos reales',
      builtForText:
        'Control de inventario, sistemas de empleados, flujos de producción, paneles, herramientas de cotización y estructuras de datos confiables.',

      process: 'Proceso',
      processTitle: 'Un proceso claro para diferentes tipos de proyectos.',
      processText:
        'Elige un tipo de proyecto, selecciona una ruta y avanza por el flujo de nodos dentro de la tarjeta.',

      flow: {
        website: 'Sitio Web',
        system: 'Sistema Web',
        mobile: 'App Móvil',
        windows: 'App Windows',
      },

      stats: {
        years: 'Años de experiencia IT / Dev',
        records: 'Registros gestionados',
        features: 'Funciones entregadas',
        mobile: 'UI enfocada en móvil',
      },

      paths: {
        simpleWebsite: 'Sitio Web Simple',
        complexWebsite: 'Sitio Web Complejo',
        internalSystem: 'Sistema Interno',
        externalSystem: 'Sistema Externo',
        offlineMobile: 'Móvil Offline',
        onlineMobile: 'Móvil Online',
        localWindows: 'Escritorio Local',
        networkWindows: 'Escritorio en Red',
      },

      nodes: {
        website: {
          simple: {
            generalInfo: {
              title: 'Información General',
              subtitle: 'Objetivo, páginas, audiencia',
              detail:
                'Reunir el objetivo principal, visitante ideal, páginas necesarias, dirección de marca y CTA principal.',
            },
            layout: {
              title: 'Diseño',
              subtitle: 'Inicio, contacto, servicios',
              detail:
                'Crear una estructura simple con hero claro, bloques de servicios, prueba social y ruta de contacto.',
            },
            build: {
              title: 'Construcción',
              subtitle: 'Sitio Vue responsivo',
              detail:
                'Construir un sitio rápido y responsivo usando Vue, Vuetify, secciones limpias y visuales ligeros.',
            },
            launch: {
              title: 'Lanzamiento',
              subtitle: 'SEO, velocidad, despliegue',
              detail:
                'Optimizar títulos, meta texto, imágenes, velocidad móvil y desplegar el sitio en producción.',
            },
          },

          complex: {
            generalInfo: {
              title: 'Información General',
              subtitle: 'Contenido, usuarios, objetivos',
              detail:
                'Definir objetivos del negocio, tipos de usuario, profundidad del contenido, CMS, SEO y rutas de conversión.',
            },
            architecture: {
              title: 'Arquitectura',
              subtitle: 'Rutas, contenido, datos',
              detail:
                'Mapear rutas, secciones reutilizables, páginas dinámicas, modelos de contenido y lógica de navegación.',
            },
            interactiveUi: {
              title: 'UI Interactiva',
              subtitle: 'Filtros, formularios, animación',
              detail:
                'Construir secciones interactivas, flujos de contacto, filtros, animaciones y UI enfocada en conversión.',
            },
            production: {
              title: 'Producción',
              subtitle: 'Analíticas, SEO, despliegue',
              detail:
                'Agregar analíticas, SEO técnico, revisión de rendimiento, despliegue y mejoras después del lanzamiento.',
            },
          },
        },

        system: {
          internal: {
            generalInfo: {
              title: 'Información General',
              subtitle: 'Equipo, problemas, datos',
              detail:
                'Documentar el flujo del equipo, problemas actuales, pasos manuales, fuentes de datos y roles.',
            },
            database: {
              title: 'Base de Datos',
              subtitle: 'Tablas y reglas',
              detail:
                'Diseñar tablas, relaciones, validaciones, permisos, auditoría y registros principales.',
            },
            tools: {
              title: 'Herramientas',
              subtitle: 'CRUD, búsqueda, reportes',
              detail:
                'Construir herramientas internas para crear, editar, buscar, filtrar, exportar y manejar flujos diarios.',
            },
            improve: {
              title: 'Mejorar',
              subtitle: 'Probar y optimizar',
              detail:
                'Probar con usuarios reales, reducir fricción, mejorar velocidad y ajustar según feedback de producción.',
            },
          },

          external: {
            generalInfo: {
              title: 'Información General',
              subtitle: 'Usuarios, acceso, riesgos',
              detail:
                'Definir usuarios públicos, tipos de cuenta, permisos, datos expuestos, seguridad y soporte.',
            },
            auth: {
              title: 'Autenticación',
              subtitle: 'Login y acceso',
              detail:
                'Planear autenticación, acceso por roles, rutas protegidas, validación y límites seguros de datos.',
            },
            portal: {
              title: 'Portal',
              subtitle: 'UI para clientes',
              detail:
                'Construir vistas limpias para acciones de usuario, registros, estados, formularios y comunicación.',
            },
            deploy: {
              title: 'Despliegue',
              subtitle: 'Producción segura',
              detail:
                'Desplegar con seguridad, manejo de errores, monitoreo, respaldos y proceso de actualizaciones.',
            },
          },
        },

        mobile: {
          offline: {
            generalInfo: {
              title: 'Información General',
              subtitle: 'Uso en campo y límites',
              detail:
                'Identificar flujo en campo, problemas sin señal, almacenamiento, límites del dispositivo y prioridades offline.',
            },
            localData: {
              title: 'Datos Locales',
              subtitle: 'Almacenamiento offline-first',
              detail:
                'Diseñar tablas locales, registros listos para sync, reglas de conflicto, assets en caché y respaldos.',
            },
            mobileUi: {
              title: 'UI Móvil',
              subtitle: 'Pantallas táctiles rápidas',
              detail:
                'Construir pantallas simples con botones grandes, bajo consumo de batería y navegación rápida.',
            },
            package: {
              title: 'Empaquetar',
              subtitle: 'Build Android/iOS',
              detail:
                'Empaquetar con Capacitor, probar en dispositivos, revisar permisos, almacenamiento y builds finales.',
            },
          },

          online: {
            generalInfo: {
              title: 'Información General',
              subtitle: 'Datos en vivo y usuarios',
              detail:
                'Definir usuarios, datos en vivo, uso de API, login, metas de velocidad y límites de red móvil.',
            },
            api: {
              title: 'API',
              subtitle: 'Conexión backend',
              detail:
                'Conectar APIs, estructurar requests, manejar carga, validaciones, errores y permisos.',
            },
            experience: {
              title: 'Experiencia',
              subtitle: 'UI realtime o sincronizada',
              detail:
                'Construir pantallas móviles con datos frescos, caché, refresh, notificaciones y feedback claro.',
            },
            release: {
              title: 'Publicación',
              subtitle: 'Desplegar y monitorear',
              detail:
                'Probar comportamiento online, desplegar builds, monitorear errores y mejorar según uso real.',
            },
          },
        },

        windows: {
          local: {
            generalInfo: {
              title: 'Información General',
              subtitle: 'Flujo y usuarios',
              detail:
                'Definir flujo de escritorio, usuarios objetivo, herramientas necesarias y requisitos offline.',
            },
            data: {
              title: 'Datos',
              subtitle: 'Archivos y almacenamiento',
              detail:
                'Planear base de datos local, importaciones, exportaciones, caché y respaldos.',
            },
            desktopUi: {
              title: 'UI Escritorio',
              subtitle: 'Flujo rápido',
              detail:
                'Construir layouts con teclado, tablas, búsquedas y herramientas de productividad.',
            },
            installer: {
              title: 'Instalador',
              subtitle: 'Paquete Windows',
              detail:
                'Crear instaladores usando Electron, actualizaciones, permisos y proceso de despliegue.',
            },
          },

          network: {
            generalInfo: {
              title: 'Información General',
              subtitle: 'Usuarios y acceso',
              detail:
                'Definir uso compartido, permisos, modelo de seguridad y requisitos de red.',
            },
            server: {
              title: 'Servidor',
              subtitle: 'Sync y APIs',
              detail:
                'Construir comunicación API, almacenamiento compartido, autenticación y sincronización.',
            },
            desktopClient: {
              title: 'Cliente Escritorio',
              subtitle: 'Software conectado',
              detail:
                'Crear software cliente con Electron optimizado para flujos grandes y datos en tiempo real.',
            },
            deploy: {
              title: 'Despliegue',
              subtitle: 'Instalar y mantener',
              detail:
                'Desplegar actualizaciones, monitoreo, respaldos y flujo de mantenimiento.',
            },
          },
        },
      },
    },

    contact: {
      title: 'Correo Rápido',
      subtitle:
        'Responde algunas preguntas rápidas para entender tu proyecto o consulta más rápido. Puedes omitir esto y enviarme un correo directamente.',

      buttons: {
        reset: 'Reiniciar Bot',
        ignore: 'Ignorar Bot',
        email: 'Enviarme Correo',
        copy: 'Copiar Correo',
        send: 'Enviar',
        submit: 'Enviar Solicitud',
      },

      labels: {
        chooseService: 'Primero elige un servicio',
        enterEmail: 'Ingresa tu correo',
      },

      messages: {
        welcome: 'Elige qué servicio necesitas para hacer las preguntas correctas.',
        requestReady: 'Solicitud lista. Envíala cuando estés listo.',
        invalidEmail: 'Ese correo no es válido. Ingresa un correo válido.',
        askEmail: '¿Qué correo debo usar para contactarte?',
        openingEmail: 'Abriendo tu aplicación de correo con la solicitud lista.',
        emailCopied: 'Correo copiado.',
        ignoreFlow: 'Sin bot. Puedes contactarme directamente aquí:',
        emailAppFailed: 'La aplicación de correo no abrió correctamente. Envía esto manualmente a',
        explain: 'Escribe "explain" para más detalles.',
        noAnswer: '[Sin respuesta]',
        clientEmail: '[correo del cliente]',
        emailBodyGreeting: 'Hola Isaac',
        emailBodyService: 'Servicio',
        emailBodyClientEmail: 'Correo del Cliente',
        emailBodyQuestions: 'Preguntas',
        emailBodyThanks: 'Gracias.',
        quoteRequest: 'Solicitud de Cotización',
        project: 'Proyecto',
      },

      services: {
        Website: 'Sitio Web',
        'Web System': 'Sistema Web',
        'Mobile App': 'Aplicación Móvil',
        'Windows App': 'Aplicación Windows',
        'IT Services': 'Servicios TI',
        Custom: 'Personalizado',
        Other: 'Otro',
      },

      serviceList: [
        'Website',
        'Web System',
        'Mobile App',
        'Windows App',
        'IT Services',
        'Custom',
        'Other',
      ],

      questions: {
        Website: [
          '¿Qué tipo de sitio web necesitas?',
          '¿Cuántas páginas necesitas?',
          '¿Ya tienes contenido, logo, imágenes o marca?',
          '¿Cuál es el objetivo principal: clientes potenciales, ventas, reservas, portafolio o información?',
          '¿Necesitas formularios, reservas, pagos, blog o edición administrativa?',
          '¿Ya tienes dominio y hosting?',
          '¿Cuál es tu presupuesto estimado?',
          '¿Cuál es tu fecha ideal de lanzamiento?',
        ],
        'Web System': [
          '¿Qué problema de negocio o flujo de trabajo debe solucionar este sistema?',
          '¿Quién lo usará: administradores, empleados, clientes o los tres?',
          '¿Qué funciones principales se necesitan primero?',
          '¿Necesitas inicios de sesión, roles, reportes, carga de archivos o dashboards?',
          '¿Debe conectarse con Excel, APIs, bases de datos o herramientas existentes?',
          '¿Cuántos datos o cuántos usuarios esperas?',
          '¿Cuál es tu presupuesto estimado?',
          '¿Cuál es tu calendario ideal?',
        ],
        'Mobile App': [
          '¿La app debe funcionar sin internet, con internet o ambas?',
          '¿Quién usará la app?',
          '¿Cuáles son las acciones principales que los usuarios deben completar?',
          '¿Debe ser solo Android, solo iOS o ambas?',
          '¿Necesitas cuentas, sincronización, notificaciones, mapas, cámara o archivos?',
          '¿La app necesitará un panel administrativo o dashboard web?',
          '¿Cuál es tu presupuesto estimado?',
          '¿Cuál es tu fecha ideal de lanzamiento?',
        ],
        'Windows App': [
          '¿Qué tarea debe automatizar o simplificar la aplicación Windows?',
          '¿Necesita conectarse con Excel, archivos, bases de datos, máquinas o APIs?',
          '¿Quién la usará y con qué frecuencia?',
          '¿Necesitas soporte de instalador, almacenamiento local o controles administrativos?',
          '¿Debe funcionar sin internet?',
          '¿Qué versiones de Windows o dispositivos debe soportar?',
          '¿Cuál es tu presupuesto estimado?',
          '¿Cuál es tu calendario ideal?',
        ],
        'IT Services': [
          '¿Qué problema, configuración o soporte necesitas?',
          '¿Es para uso personal, negocio o equipo?',
          '¿Qué dispositivos, cuentas o sistemas están involucrados?',
          '¿Es urgente o flexible?',
          '¿Es una solución única o soporte continuo?',
          '¿Necesitas ayuda remota, presencial o documentación?',
          '¿Cuál es tu presupuesto estimado?',
          '¿Cuándo necesitas que se resuelva?',
        ],
        Custom: [
          'Describe tu idea personalizada.',
          '¿Qué problema debe resolver?',
          '¿Quién la usaría?',
          '¿Cómo se vería un resultado exitoso?',
          '¿Qué funciones importan más para la primera versión?',
          '¿Tienes ejemplos, bocetos, archivos o herramientas existentes?',
          '¿Cuál es tu presupuesto estimado?',
          '¿Cuál es tu calendario ideal?',
        ],
        Other: [
          '¿Qué estás tratando de construir, arreglar o mejorar?',
          '¿Qué detalles ya conoces?',
          '¿Qué tipo de ayuda estás buscando?',
          '¿Cuál es tu calendario ideal?',
          '¿Para quién es esto?',
          '¿Qué resultado quieres al final?',
          '¿Cuál es tu presupuesto estimado?',
          '¿Hay algo importante que deba saber primero?',
        ],
      },

      presets: {
        Website: [
          ['Sitio de negocio', 'Landing page', 'Portafolio', 'E-commerce', 'Otro'],
          ['1', '2', '3', '4', '5+'],
          ['Sí', 'No', 'Algo', 'N/A'],
          ['Clientes potenciales', 'Ventas', 'Reservas', 'Portafolio', 'Información'],
          ['Sí', 'No', 'Tal vez', 'N/A'],
          ['Sí', 'No', 'Necesito ayuda'],
          ['$500-$1k', '$1k-$3k', '$3k-$7k', '$7k-$15k', '$15k+'],
          ['Lo antes posible', '2-4 semanas', '1-2 meses', 'Flexible'],
        ],
        'Web System': [
          ['Inventario', 'CRM', 'Dashboard', 'Flujo de trabajo', 'Otro'],
          ['Administradores', 'Empleados', 'Clientes', 'Todos'],
          ['CRUD', 'Reportes', 'Dashboard', 'Automatización', 'Otro'],
          ['Sí', 'No', 'Tal vez', 'N/A'],
          ['Sí', 'No', 'Tal vez', 'N/A'],
          ['1-5', '6-20', '21-100', '100+'],
          ['$2k-$5k', '$5k-$10k', '$10k-$20k', '$20k-$50k', '$50k+'],
          ['Lo antes posible', '1 mes', '2-3 meses', 'Flexible'],
        ],
        'Mobile App': [
          ['Sin internet', 'Con internet', 'Ambas', 'No estoy seguro'],
          ['Clientes', 'Empleados', 'Administradores', 'Público'],
          ['Registrar datos', 'Enviar formularios', 'Herramientas de mapa', 'Escanear/Subir', 'Otro'],
          ['Android', 'iOS', 'Ambas', 'No estoy seguro'],
          ['Sí', 'No', 'Tal vez', 'N/A'],
          ['Sí', 'No', 'Tal vez'],
          ['$5k-$10k', '$10k-$20k', '$20k-$40k', '$40k+'],
          ['Lo antes posible', '1-2 meses', '3-6 meses', 'Flexible'],
        ],
        'Windows App': [
          ['Automatización', 'Entrada de datos', 'Reportes', 'Máquinas/archivos', 'Otro'],
          ['Sí', 'No', 'Tal vez', 'N/A'],
          ['1 usuario', '2-5 usuarios', '6-20 usuarios', '20+'],
          ['Sí', 'No', 'Tal vez', 'N/A'],
          ['Sí', 'No', 'Tal vez'],
          ['Windows 10', 'Windows 11', 'Ambos', 'No estoy seguro'],
          ['$2k-$5k', '$5k-$10k', '$10k-$20k', '$20k+'],
          ['Lo antes posible', '1 mes', '2-3 meses', 'Flexible'],
        ],
        'IT Services': [
          ['Configuración', 'Solución de problemas', 'Seguridad', 'Soporte', 'Otro'],
          ['Personal', 'Negocio', 'Equipo'],
          ['Computadora', 'Red', 'Cuentas', 'Software', 'Otro'],
          ['Urgente', 'Esta semana', 'Flexible'],
          ['Una vez', 'Continuo', 'No estoy seguro'],
          ['Remoto', 'Presencial', 'Documentación', 'No estoy seguro'],
          ['$100-$500', '$500-$2k', '$2k-$5k', '$5k+'],
          ['Hoy', 'Esta semana', 'Este mes', 'Flexible'],
        ],
        Custom: [
          [],
          [],
          ['Clientes', 'Empleados', 'Administradores', 'Personal', 'Otro'],
          [],
          ['Función principal', 'Automatización', 'Dashboard', 'Móvil', 'Otro'],
          ['Sí', 'No', 'Algo', 'N/A'],
          ['$500-$1k', '$1k-$3k', '$3k-$5k', '$5k+'],
          ['Lo antes posible', '1 mes', '2-3 meses', 'Flexible'],
        ],
        Other: [
          [],
          [],
          ['Construir', 'Arreglar', 'Mejorar', 'Consultar'],
          ['Lo antes posible', '1 mes', '2-3 meses', 'Flexible'],
          ['Personal', 'Negocio', 'Equipo', 'Público'],
          [],
          ['$500-$1k', '$1k-$3k', '$3k-$5k', '$5k+'],
          ['Sí', 'No', 'N/A'],
        ],
      },

      explanations: {
        Website: [
          'Esto ayuda a definir si el sitio web es simple, enfocado en marketing, ventas o algo más avanzado.',
          'La cantidad de páginas ayuda a estimar el tiempo de diseño, la estructura del contenido y el costo.',
          'El contenido existente reduce el tiempo del proyecto. Si falta contenido, puede requerir más planificación o redacción.',
          'El objetivo afecta el diseño, el llamado a la acción y las funciones.',
          'Estas funciones pueden cambiar el tamaño y la complejidad del proyecto.',
          'El estado del dominio y hosting afecta la configuración del lanzamiento.',
          'Un presupuesto aproximado ayuda a ajustar el alcance correcto sin construir de más.',
          'El calendario ayuda a decidir si debe ser un MVP rápido o una versión más completa.',
        ],
        'Web System': [
          'Esto identifica el problema real del negocio antes de elegir funciones.',
          'Los tipos de usuario afectan permisos, dashboards y flujo de trabajo.',
          'Las funciones principales ayudan a definir la primera versión útil.',
          'Estas son funciones comunes de sistemas que afectan el costo y la estructura.',
          'Las integraciones pueden agregar complejidad, pruebas y configuración.',
          'La cantidad de usuarios y datos afecta la planificación del rendimiento.',
          'El presupuesto ayuda a definir una primera fase realista.',
          'El calendario ayuda a separar las funciones necesarias de las funciones futuras.',
        ],
        'Mobile App': [
          'El soporte sin internet cambia la estructura de la app y el almacenamiento de datos.',
          'El tipo de usuario afecta la navegación, permisos y diseño.',
          'Las acciones principales definen el flujo central de la app.',
          'La plataforma afecta el alcance de desarrollo y pruebas.',
          'Las funciones del dispositivo pueden agregar complejidad.',
          'Los paneles administrativos suelen ser necesarios para manejar contenido o usuarios.',
          'El presupuesto ayuda a estimar qué puede incluir la primera versión.',
          'La fecha de lanzamiento ayuda a definir el alcance del MVP.',
        ],
        'Windows App': [
          'Esto define la razón principal de la aplicación de escritorio.',
          'Las integraciones afectan la complejidad y las pruebas.',
          'La cantidad de usuarios afecta instalación, actualizaciones y permisos.',
          'Estos detalles afectan las necesidades de configuración y soporte.',
          'El soporte sin internet afecta el almacenamiento local de datos.',
          'La versión de Windows importa para la compatibilidad.',
          'El presupuesto ayuda a mantener realista la primera versión.',
          'El calendario ayuda a planear el tamaño correcto del proyecto.',
        ],
        'IT Services': [
          'Esto ayuda a identificar si el trabajo es reparación, configuración, limpieza o planificación.',
          'El caso de uso afecta el nivel de documentación y configuración.',
          'Los detalles del dispositivo y sistema ayudan a diagnosticar más rápido.',
          'La urgencia afecta la programación y prioridad.',
          'Una solución única o soporte continuo cambia el enfoque del servicio.',
          'El método de soporte afecta cómo debe manejarse el trabajo.',
          'El presupuesto ayuda a definir qué se puede atender primero.',
          'El tiempo ayuda a decidir la urgencia.',
        ],
        Custom: [
          'Un resumen corto de la idea da dirección al proyecto.',
          'El problema define por qué debe existir el proyecto.',
          'Los usuarios moldean el diseño y las funciones.',
          'Los criterios de éxito ayudan a evitar un alcance vago.',
          'La primera versión debe enfocarse en las funciones más valiosas.',
          'Los ejemplos y archivos ayudan a aclarar la idea más rápido.',
          'El presupuesto ayuda a definir una versión inicial realista.',
          'El calendario ayuda a decidir el ritmo del proyecto.',
        ],
        Other: [
          'Esto da el punto de inicio.',
          'Los detalles conocidos reducen suposiciones.',
          'Esto aclara si necesitas construir, arreglar, mejorar o consultar.',
          'El calendario ayuda a estimar la urgencia.',
          'La audiencia afecta el diseño y la complejidad.',
          'El resultado final ayuda a definir el alcance.',
          'El presupuesto ayuda a mantener recomendaciones realistas.',
          'El contexto adicional puede evitar suposiciones incorrectas.',
        ],
      },
    },

    openSource: {
      stack: 'STACK',

      projects: [
        {
          name: 'EvanGrid',
          status: 'ACTIVO',
          type: 'Mapeo Misionero Offline-First',
          desc: 'Una plataforma móvil de mapeo misionero enfocada en el uso sin conexión. Permite crear zonas, casas, rutas, notas y herramientas de planificación territorial con soporte opcional para mapas en línea. Diseñada para trabajo de campo donde la conexión es limitada.',
          stack: ['Vue 3', 'Capacitor', 'Vuetify', 'Pinia', 'MapLibre', 'Almacenamiento Offline'],
          tags: ['Offline First', 'Android', 'iOS', 'Herramientas Misioneras', 'Mapeo'],
        },
      ],

      terminal: {
        scanning: 'escaneando directorio open source...',
        indexed: 'repositorios indexados',
        awaiting: 'esperando futuros despliegues',
        ready: 'sistema listo',
      },
    },
  },

  fr: {
    $vuetify: { ...fr },

    app: {
      home: 'Accueil',
      contact: 'Contact',
      openSource: 'Open Source',

      menu: 'Menu',
      language: 'Langue',
      darkMode: 'Mode Sombre',
      lightMode: 'Mode Clair',
    },

    home: {
      brand: 'IV Code',
      title: 'Développeur Full-Stack',
      subtitle:
        'Je crée des systèmes rapides et pratiques pour les inventaires, la fabrication, les outils internes, les tableaux de bord et les applications mobiles.',
      contactMe: 'Me Contacter',
      openSource: 'Open Source',

      results: 'Résultats',
      resultsTitle: 'Des systèmes pratiques qui améliorent les opérations.',
      resultsText:
        'Je crée des outils internes rapides, des flux de données propres et des applications mobiles qui réduisent la friction.',
      builtFor: 'Conçu pour de vrais flux',
      builtForText:
        'Contrôle des stocks, systèmes employés, flux de production, tableaux de bord, outils de devis et structures de données fiables.',

      process: 'Processus',
      processTitle: 'Un processus clair pour différents types de projets.',
      processText:
        'Choisissez un type de projet, sélectionnez une voie, puis avancez dans le flux de nœuds.',

      flow: {
        website: 'Site Web',
        system: 'Système Web',
        mobile: 'App Mobile',
        windows: 'App Windows',
      },

      stats: {
        years: 'Années IT / Dev',
        records: 'Dossiers gérés',
        features: 'Fonctionnalités livrées',
        mobile: 'UI orientée mobile',
      },

      paths: {
        simpleWebsite: 'Site Web Simple',
        complexWebsite: 'Site Web Complexe',
        internalSystem: 'Système Interne',
        externalSystem: 'Système Externe',
        offlineMobile: 'Mobile Hors Ligne',
        onlineMobile: 'Mobile En Ligne',
        localWindows: 'Bureau Local',
        networkWindows: 'Bureau Réseau',
      },

      nodes: {
        website: {
          simple: {
            generalInfo: {
              title: 'Infos Générales',
              subtitle: 'Objectif, pages, audience',
              detail:
                'Collecter l’objectif principal, le visiteur cible, les pages nécessaires, la direction de marque et le CTA principal.',
            },
            layout: {
              title: 'Mise en Page',
              subtitle: 'Accueil, contact, services',
              detail:
                'Créer une structure simple avec un hero clair, des blocs de services, des preuves et un chemin de contact.',
            },
            build: {
              title: 'Création',
              subtitle: 'Site Vue responsive',
              detail:
                'Créer un site rapide et responsive avec Vue, Vuetify, des sections propres et des visuels légers.',
            },
            launch: {
              title: 'Lancement',
              subtitle: 'SEO, vitesse, déploiement',
              detail:
                'Optimiser les titres, métas, images, vitesse mobile et déployer le site en production.',
            },
          },

          complex: {
            generalInfo: {
              title: 'Infos Générales',
              subtitle: 'Contenu, utilisateurs, objectifs',
              detail:
                'Définir les objectifs, types d’utilisateurs, profondeur du contenu, besoins CMS, SEO et chemins de conversion.',
            },
            architecture: {
              title: 'Architecture',
              subtitle: 'Routes, contenu, données',
              detail:
                'Cartographier les routes, sections réutilisables, pages dynamiques, modèles de contenu et navigation.',
            },
            interactiveUi: {
              title: 'UI Interactive',
              subtitle: 'Filtres, formulaires, animation',
              detail:
                'Créer des sections interactives, flux de contact, filtres, animations et UI orientée conversion.',
            },
            production: {
              title: 'Production',
              subtitle: 'Analytics, SEO, déploiement',
              detail:
                'Ajouter analytics, SEO technique, contrôles de performance, déploiement et améliorations post-lancement.',
            },
          },
        },

        system: {
          internal: {
            generalInfo: {
              title: 'Infos Générales',
              subtitle: 'Équipe, problèmes, données',
              detail:
                'Documenter le flux de travail, les problèmes actuels, étapes manuelles, sources de données et rôles.',
            },
            database: {
              title: 'Base de Données',
              subtitle: 'Tables et règles',
              detail:
                'Concevoir tables, relations, validations, permissions, audit et enregistrements principaux.',
            },
            tools: {
              title: 'Outils',
              subtitle: 'CRUD, recherche, rapports',
              detail:
                'Créer des outils internes pour créer, modifier, rechercher, filtrer, exporter et gérer le travail quotidien.',
            },
            improve: {
              title: 'Améliorer',
              subtitle: 'Tester et optimiser',
              detail:
                'Tester avec de vrais utilisateurs, réduire la friction, améliorer la vitesse et ajuster selon les retours.',
            },
          },

          external: {
            generalInfo: {
              title: 'Infos Générales',
              subtitle: 'Utilisateurs, accès, risques',
              detail:
                'Définir les utilisateurs publics, types de comptes, permissions, données exposées, sécurité et support.',
            },
            auth: {
              title: 'Authentification',
              subtitle: 'Connexion et accès',
              detail:
                'Planifier authentification, accès par rôle, routes protégées, validation et limites de données sûres.',
            },
            portal: {
              title: 'Portail',
              subtitle: 'UI côté client',
              detail:
                'Créer des vues propres pour actions utilisateur, enregistrements, statuts, formulaires et communication.',
            },
            deploy: {
              title: 'Déploiement',
              subtitle: 'Production sécurisée',
              detail:
                'Déployer avec sécurité, gestion d’erreurs, monitoring, sauvegardes et processus de mise à jour.',
            },
          },
        },

        mobile: {
          offline: {
            generalInfo: {
              title: 'Infos Générales',
              subtitle: 'Terrain et limites',
              detail:
                'Identifier les flux terrain, problèmes de signal, stockage, limites des appareils et priorités hors ligne.',
            },
            localData: {
              title: 'Données Locales',
              subtitle: 'Stockage offline-first',
              detail:
                'Concevoir tables locales, enregistrements prêts à sync, règles de conflit, assets en cache et sauvegardes.',
            },
            mobileUi: {
              title: 'UI Mobile',
              subtitle: 'Écrans tactiles rapides',
              detail:
                'Créer des écrans simples avec grandes zones tactiles, faible batterie et navigation rapide.',
            },
            package: {
              title: 'Package',
              subtitle: 'Build Android/iOS',
              detail:
                'Packager avec Capacitor, tester sur appareils, vérifier permissions, stockage et builds production.',
            },
          },

          online: {
            generalInfo: {
              title: 'Infos Générales',
              subtitle: 'Données live et utilisateurs',
              detail:
                'Définir utilisateurs, données live, API, connexion, objectifs de vitesse et limites réseau mobile.',
            },
            api: {
              title: 'API',
              subtitle: 'Connexion backend',
              detail:
                'Connecter APIs, structurer requêtes, gérer chargement, validation, erreurs et permissions.',
            },
            experience: {
              title: 'Expérience',
              subtitle: 'UI temps réel ou synchronisée',
              detail:
                'Créer des écrans mobiles avec données fraîches, cache, refresh, notifications et feedback clair.',
            },
            release: {
              title: 'Publication',
              subtitle: 'Déployer et surveiller',
              detail:
                'Tester le comportement en ligne, déployer les builds, surveiller les erreurs et améliorer selon usage réel.',
            },
          },
        },

        windows: {
          local: {
            generalInfo: {
              title: 'Infos Générales',
              subtitle: 'Flux et utilisateurs',
              detail:
                'Définir le flux bureau, utilisateurs cibles, outils nécessaires et exigences hors ligne.',
            },
            data: {
              title: 'Données',
              subtitle: 'Fichiers et stockage',
              detail:
                'Planifier base locale, importations, exportations, cache et sauvegardes.',
            },
            desktopUi: {
              title: 'UI Bureau',
              subtitle: 'Flux rapide',
              detail:
                'Créer des layouts clavier, tables, systèmes de recherche et outils de productivité.',
            },
            installer: {
              title: 'Installateur',
              subtitle: 'Package Windows',
              detail:
                'Créer des installateurs avec Electron, mises à jour, permissions et processus de déploiement.',
            },
          },

          network: {
            generalInfo: {
              title: 'Infos Générales',
              subtitle: 'Utilisateurs et accès',
              detail:
                'Définir usage partagé, permissions, modèle de sécurité et exigences réseau.',
            },
            server: {
              title: 'Serveur',
              subtitle: 'Sync et APIs',
              detail:
                'Créer communication API, stockage partagé, authentification et synchronisation.',
            },
            desktopClient: {
              title: 'Client Bureau',
              subtitle: 'Logiciel connecté',
              detail:
                'Créer un client Electron optimisé pour grands flux et données temps réel.',
            },
            deploy: {
              title: 'Déploiement',
              subtitle: 'Installer et maintenir',
              detail:
                'Déployer mises à jour, monitoring, sauvegardes et flux de maintenance.',
            },
          },
        },
      },
    },

    contact: {
      title: 'Email Rapide',
      subtitle:
        'Répondez à quelques questions rapides afin que je puisse comprendre votre projet ou votre demande plus rapidement. Vous pouvez ignorer ceci à tout moment et m’envoyer un email directement.',

      buttons: {
        reset: 'Réinitialiser le Bot',
        ignore: 'Ignorer le Bot',
        email: 'M’envoyer un Email',
        copy: 'Copier l’Email',
        send: 'Envoyer',
        submit: 'Envoyer la Demande',
      },

      labels: {
        chooseService: 'Choisissez un service',
        enterEmail: 'Entrez votre email',
      },

      messages: {
        welcome:
          'Choisissez le service dont vous avez besoin afin que je puisse poser les bonnes questions.',
        requestReady:
          'Demande prête. Envoyez-la lorsque vous êtes prêt.',
        invalidEmail:
          'Cet email est invalide. Veuillez entrer un email valide.',
        askEmail:
          'Quel email dois-je utiliser pour vous contacter ?',
        openingEmail:
          'Ouverture de votre application email avec la demande préremplie.',
        emailCopied:
          'Email copié.',
        ignoreFlow:
          'Sans assistant. Vous pouvez me contacter directement ici :',
        emailAppFailed:
          'L’application email ne s’est pas ouverte correctement. Envoyez ceci manuellement à',
        explain:
          'Tapez "explain" pour plus de détails.',
        noAnswer:
          '[Pas de réponse]',
        clientEmail:
          '[email du client]',
        emailBodyGreeting:
          'Bonjour Isaac',
        emailBodyService:
          'Service',
        emailBodyClientEmail:
          'Email du Client',
        emailBodyQuestions:
          'Questions',
        emailBodyThanks:
          'Merci.',
        quoteRequest:
          'Demande de Devis',
        project:
          'Projet',
      },

      services: {
        Website: 'Site Web',
        'Web System': 'Système Web',
        'Mobile App': 'Application Mobile',
        'Windows App': 'Application Windows',
        'IT Services': 'Services IT',
        Custom: 'Personnalisé',
        Other: 'Autre',
      },

      serviceList: [
        'Website',
        'Web System',
        'Mobile App',
        'Windows App',
        'IT Services',
        'Custom',
        'Other',
      ],

      questions: {
        Website: [
          'Quel type de site web souhaitez-vous ?',
          'Combien de pages avez-vous besoin ?',
          'Avez-vous déjà le contenu, le logo, les images ou l’identité visuelle ?',
          'Quel est l’objectif principal : prospects, ventes, réservations, portfolio ou informations ?',
          'Avez-vous besoin de formulaires, réservations, paiements, blog ou édition administrateur ?',
          'Avez-vous déjà un domaine et un hébergement ?',
          'Quel est votre budget estimé ?',
          'Quelle est votre date idéale de lancement ?',
        ],

        'Web System': [
          'Quel problème métier ou flux de travail ce système doit-il résoudre ?',
          'Qui l’utilisera : administrateurs, employés, clients ou les trois ?',
          'Quelles fonctionnalités principales sont nécessaires en premier ?',
          'Avez-vous besoin de connexions, rôles, rapports, téléversements de fichiers ou tableaux de bord ?',
          'Doit-il se connecter à Excel, APIs, bases de données ou outils existants ?',
          'Combien de données ou d’utilisateurs prévoyez-vous ?',
          'Quel est votre budget estimé ?',
          'Quel est votre calendrier idéal ?',
        ],

        'Mobile App': [
          'L’application doit-elle fonctionner hors ligne, en ligne ou les deux ?',
          'Qui utilisera l’application ?',
          'Quelles sont les actions principales que les utilisateurs doivent effectuer ?',
          'Doit-elle être Android uniquement, iOS uniquement ou les deux ?',
          'Avez-vous besoin de comptes, synchronisation, notifications, cartes, caméra ou fichiers ?',
          'L’application aura-t-elle besoin d’un panneau administrateur ou d’un tableau de bord web ?',
          'Quel est votre budget estimé ?',
          'Quelle est votre date idéale de publication ?',
        ],

        'Windows App': [
          'Quelle tâche l’application Windows doit-elle automatiser ou simplifier ?',
          'Doit-elle se connecter à Excel, fichiers, bases de données, machines ou APIs ?',
          'Qui l’utilisera et à quelle fréquence ?',
          'Avez-vous besoin d’un installateur, stockage local ou contrôles administrateur ?',
          'Doit-elle fonctionner hors ligne ?',
          'Quelles versions de Windows ou appareils doivent être pris en charge ?',
          'Quel est votre budget estimé ?',
          'Quel est votre calendrier idéal ?',
        ],

        'IT Services': [
          'Quel problème, installation ou support avez-vous besoin ?',
          'Est-ce pour un usage personnel, entreprise ou équipe ?',
          'Quels appareils, comptes ou systèmes sont impliqués ?',
          'Est-ce urgent ou flexible ?',
          'Est-ce une intervention unique ou un support continu ?',
          'Avez-vous besoin d’aide à distance, sur place ou de documentation ?',
          'Quel est votre budget estimé ?',
          'Quand avez-vous besoin que cela soit traité ?',
        ],

        Custom: [
          'Décrivez votre idée personnalisée.',
          'Quel problème doit-elle résoudre ?',
          'Qui l’utiliserait ?',
          'À quoi ressemblerait un résultat réussi ?',
          'Quelles fonctionnalités sont les plus importantes pour la première version ?',
          'Avez-vous des exemples, croquis, fichiers ou outils existants ?',
          'Quel est votre budget estimé ?',
          'Quel est votre calendrier idéal ?',
        ],

        Other: [
          'Que cherchez-vous à créer, réparer ou améliorer ?',
          'Quels détails connaissez-vous déjà ?',
          'Quel type d’aide recherchez-vous ?',
          'Quel est votre calendrier idéal ?',
          'À qui cela est-il destiné ?',
          'Quel résultat souhaitez-vous obtenir à la fin ?',
          'Quel est votre budget estimé ?',
          'Y a-t-il quelque chose d’important que je devrais savoir en premier ?',
        ],
      },

      presets: {
        Website: [
          ['Site entreprise', 'Landing Page', 'Portfolio', 'E-commerce', 'Autre'],
          ['1', '2', '3', '4', '5+'],
          ['Oui', 'Non', 'Partiellement', 'N/A'],
          ['Prospects', 'Ventes', 'Réservations', 'Portfolio', 'Informations'],
          ['Oui', 'Non', 'Peut-être', 'N/A'],
          ['Oui', 'Non', 'Besoin d’aide'],
          ['$500-$1k', '$1k-$3k', '$3k-$7k', '$7k-$15k', '$15k+'],
          ['Dès que possible', '2-4 semaines', '1-2 mois', 'Flexible'],
        ],

        'Web System': [
          ['Inventaire', 'CRM', 'Tableau de bord', 'Flux de travail', 'Autre'],
          ['Administrateurs', 'Employés', 'Clients', 'Tous'],
          ['CRUD', 'Rapports', 'Dashboard', 'Automatisation', 'Autre'],
          ['Oui', 'Non', 'Peut-être', 'N/A'],
          ['Oui', 'Non', 'Peut-être', 'N/A'],
          ['1-5', '6-20', '21-100', '100+'],
          ['$2k-$5k', '$5k-$10k', '$10k-$20k', '$20k-$50k', '$50k+'],
          ['Dès que possible', '1 mois', '2-3 mois', 'Flexible'],
        ],

        'Mobile App': [
          ['Hors ligne', 'En ligne', 'Les deux', 'Pas sûr'],
          ['Clients', 'Employés', 'Administrateurs', 'Public'],
          ['Suivi données', 'Envoyer formulaires', 'Cartes', 'Scanner/Téléverser', 'Autre'],
          ['Android', 'iOS', 'Les deux', 'Pas sûr'],
          ['Oui', 'Non', 'Peut-être', 'N/A'],
          ['Oui', 'Non', 'Peut-être'],
          ['$5k-$10k', '$10k-$20k', '$20k-$40k', '$40k+'],
          ['Dès que possible', '1-2 mois', '3-6 mois', 'Flexible'],
        ],

        'Windows App': [
          ['Automatisation', 'Saisie données', 'Rapports', 'Machines/Fichiers', 'Autre'],
          ['Oui', 'Non', 'Peut-être', 'N/A'],
          ['1 utilisateur', '2-5 utilisateurs', '6-20 utilisateurs', '20+'],
          ['Oui', 'Non', 'Peut-être', 'N/A'],
          ['Oui', 'Non', 'Peut-être'],
          ['Windows 10', 'Windows 11', 'Les deux', 'Pas sûr'],
          ['$2k-$5k', '$5k-$10k', '$10k-$20k', '$20k+'],
          ['Dès que possible', '1 mois', '2-3 mois', 'Flexible'],
        ],

        'IT Services': [
          ['Installation', 'Dépannage', 'Sécurité', 'Support', 'Autre'],
          ['Personnel', 'Entreprise', 'Équipe'],
          ['Ordinateur', 'Réseau', 'Comptes', 'Logiciel', 'Autre'],
          ['Urgent', 'Cette semaine', 'Flexible'],
          ['Unique', 'Continu', 'Pas sûr'],
          ['À distance', 'Sur place', 'Documentation', 'Pas sûr'],
          ['$100-$500', '$500-$2k', '$2k-$5k', '$5k+'],
          ['Aujourd’hui', 'Cette semaine', 'Ce mois-ci', 'Flexible'],
        ],

        Custom: [
          [],
          [],
          ['Clients', 'Employés', 'Administrateurs', 'Personnel', 'Autre'],
          [],
          ['Fonction principale', 'Automatisation', 'Dashboard', 'Mobile', 'Autre'],
          ['Oui', 'Non', 'Partiellement', 'N/A'],
          ['$500-$1k', '$1k-$3k', '$3k-$5k', '$5k+'],
          ['Dès que possible', '1 mois', '2-3 mois', 'Flexible'],
        ],

        Other: [
          [],
          [],
          ['Créer', 'Réparer', 'Améliorer', 'Conseil'],
          ['Dès que possible', '1 mois', '2-3 mois', 'Flexible'],
          ['Personnel', 'Entreprise', 'Équipe', 'Public'],
          [],
          ['$500-$1k', '$1k-$3k', '$3k-$5k', '$5k+'],
          ['Oui', 'Non', 'N/A'],
        ],
      },

      explanations: {
        Website: [
          'Cela aide à définir si le site web est simple, orienté marketing, orienté ventes ou plus avancé.',
          'Le nombre de pages aide à estimer le temps de conception, la structure du contenu et le coût.',
          'Le contenu existant réduit le temps du projet. Un contenu manquant peut nécessiter plus de planification ou de rédaction.',
          'L’objectif influence la mise en page, les appels à l’action et les fonctionnalités.',
          'Ces fonctionnalités peuvent modifier la taille et la complexité du projet.',
          'Le statut du domaine et de l’hébergement influence la configuration du lancement.',
          'Un budget approximatif aide à définir la bonne portée sans surdévelopper.',
          'Le calendrier aide à décider entre un MVP rapide ou une version plus complète.',
        ],

        'Web System': [
          'Cela permet d’identifier le vrai problème métier avant de choisir les fonctionnalités.',
          'Les types d’utilisateurs influencent les permissions, tableaux de bord et flux de travail.',
          'Les fonctionnalités principales aident à définir la première version utile.',
          'Ce sont des fonctionnalités système courantes qui influencent le coût et la structure.',
          'Les intégrations peuvent ajouter de la complexité, des tests et du temps de configuration.',
          'Le nombre d’utilisateurs et le volume de données influencent la planification des performances.',
          'Le budget aide à définir une première phase réaliste.',
          'Le calendrier aide à séparer les fonctionnalités indispensables des futures fonctionnalités.',
        ],

        'Mobile App': [
          'Le support hors ligne change la structure de l’application et le stockage des données.',
          'Le type d’utilisateur influence la navigation, les permissions et la conception.',
          'Les actions principales définissent le flux principal de l’application.',
          'Le choix de plateforme influence le développement et les tests.',
          'Les fonctionnalités de l’appareil peuvent ajouter de la complexité.',
          'Les panneaux administrateur sont souvent nécessaires pour gérer le contenu ou les utilisateurs.',
          'Le budget aide à estimer ce que la première version peut inclure.',
          'La date de sortie aide à définir la portée du MVP.',
        ],

        'Windows App': [
          'Cela définit la raison principale de l’application de bureau.',
          'Les intégrations influencent la complexité et les tests.',
          'Le nombre d’utilisateurs influence les installations, mises à jour et permissions.',
          'Ces détails influencent les besoins de configuration et de support.',
          'Le support hors ligne influence le stockage local des données.',
          'La version de Windows est importante pour la compatibilité.',
          'Le budget aide à garder la première version réaliste.',
          'Le calendrier aide à planifier la bonne taille du projet.',
        ],

        'IT Services': [
          'Cela aide à identifier si le travail concerne une réparation, installation, nettoyage ou planification.',
          'Le cas d’usage influence le niveau de documentation et de configuration.',
          'Les détails des appareils et systèmes permettent un diagnostic plus rapide.',
          'L’urgence influence la planification et la priorité.',
          'Une intervention unique ou un support continu modifie l’approche du service.',
          'La méthode de support influence la manière de gérer le travail.',
          'Le budget aide à définir ce qui peut être traité en priorité.',
          'Le temps aide à déterminer le niveau d’urgence.',
        ],

        Custom: [
          'Un résumé rapide donne une direction au projet.',
          'Le problème définit pourquoi le projet doit exister.',
          'Les utilisateurs influencent la conception et les fonctionnalités.',
          'Les critères de réussite aident à éviter un périmètre flou.',
          'La première version doit se concentrer sur les fonctionnalités les plus importantes.',
          'Les exemples et fichiers aident à clarifier l’idée plus rapidement.',
          'Le budget aide à définir une version de départ réaliste.',
          'Le calendrier aide à définir le rythme du projet.',
        ],

        Other: [
          'Cela fournit le point de départ.',
          'Les détails connus réduisent les suppositions.',
          'Cela précise si vous avez besoin de construire, réparer, améliorer ou consulter.',
          'Le calendrier aide à estimer l’urgence.',
          'Le public influence la conception et la complexité.',
          'Le résultat final aide à définir le périmètre.',
          'Le budget aide à garder les recommandations réalistes.',
          'Un contexte supplémentaire peut éviter des hypothèses incorrectes.',
        ],
      },
    },

    openSource: {
      stack: 'STACK',

      projects: [
        {
          name: 'EvanGrid',
          status: 'ACTIF',
          type: 'Cartographie Missionnaire Offline-First',
          desc: 'Une plateforme mobile de cartographie missionnaire axée sur l’utilisation hors ligne. Elle permet de créer des zones, maisons, itinéraires, notes et outils de planification territoriale avec un support optionnel des cartes en ligne. Conçue pour le terrain lorsque la connexion est limitée.',
          stack: ['Vue 3', 'Capacitor', 'Vuetify', 'Pinia', 'MapLibre', 'Stockage Hors Ligne'],
          tags: ['Offline First', 'Android', 'iOS', 'Outils Missionnaires', 'Cartographie'],
        },
      ],

      terminal: {
        scanning: 'analyse du répertoire open source...',
        indexed: 'dépôts indexés',
        awaiting: 'en attente de futurs déploiements',
        ready: 'système prêt',
      },
    },
  },
}

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
})
