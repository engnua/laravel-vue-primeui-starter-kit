<script setup lang="ts">
import AppConfigurator from '@/layouts/AppConfigurator.vue';
import AppearanceSelector from '@/components/AppearanceSelector.vue';
</script>

<template>
    <div class="fixed flex gap-4 top-8 right-8">
        <AppearanceSelector />
        <div class="relative">
            <Button
                icon="pi pi-palette"
                v-styleclass="{ selector: '@next', enterFromClass: 'hidden', enterActiveClass: 'animate-scalein', leaveToClass: 'hidden', leaveActiveClass: 'animate-fadeout', hideOnOutsideClick: true }"
                type="button"
                rounded
            />
            <AppConfigurator />
        </div>
    </div>
</template>
