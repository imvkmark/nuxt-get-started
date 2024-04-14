// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    css: [
        '~/assets/styles/index.less',
    ],
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-bootstrap-icons'
    ]
})
