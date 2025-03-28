<script setup lang="ts">
import AppMenu from '@/layouts/AppMenu.vue';
import AppMenuFooter from '@/layouts/AppMenuFooter.vue';
</script>

<template>
    <div class="layout-sidebar w-64 bg-white flex flex-col h-screen shadow-lg">
        <AppMenu class="flex-1 overflow-y-auto" />
        <AppMenuFooter class="mt-auto" />
    </div>
</template>

<style lang="scss" scoped></style>
