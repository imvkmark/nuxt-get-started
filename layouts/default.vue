<template>
    <Header />
    <div class="container mx-auto p-4">
        <slot />
    </div>
</template>
<script setup lang="ts">
/* Head
 * ---------------------------------------- */
useHead({
    link: [
        { rel: 'icon', type: 'image/png', href: 'https://file.wulicode.com/static/images/logo.png' }
    ],
})
</script>