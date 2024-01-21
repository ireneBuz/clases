// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig(() => {
  const isProduction = process.env.NODE_ENV === 'production';

  return {
    devtools: { enabled: !isProduction },
    css: [
      '~/assets/css/main.css',
      '~/assets/css/fonts.css',
      '~/assets/css/blog.css'
    ],
    app: {
      pageTransition: { name: 'page', mode: 'out-in' },
      head: {
        meta: [
          {
            id: 'theme-color-meta',
            name: 'theme-color',
            content: '#000000'
          },
          {
            name: 'robots',
            content: 'index, follow'
          },
          {
            name: 'description',
            content: 'Clases de piano en Madrid. Clases de teoría musical y de piano en Madrid, presenciales y online. ¡Aprende música con nosotros!. Escuela de piano Irene Buceta'
          },
          {
            name: 'keywords',
            content: 'clases de música, escuela de piano, clases de teoría musical, clases de piano, Madrid, clases presenciales, clases online, Irene Buceta Escuela de música'
          }
        ],
        link: [
          {
            rel: 'canonical',
            href: 'https://clasespianomadrid.com/'
          }
        ],
        script: [
          { src: 'https://code.iconify.design/1/1.0.4/iconify.min.js', defer: true },
            isProduction && {
              innerHTML: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){ dataLayer.push(arguments); }
                gtag('js', new Date());
                gtag('config', 'G-W78CG5BNY4');
              `,
              type: 'text/javascript',
              defer: true
            },
            isProduction && { src: 'https://www.googletagmanager.com/gtag/js?id=G-W78CG5BNY4', defer: true }
        ].filter(Boolean),
        title: 'Clases de Piano y Teoría Musical en Madrid - Irene Buceta Escuela de Piano',
        htmlAttrs: {
          lang: 'es-ES'
        },
      }
    }
  };
});