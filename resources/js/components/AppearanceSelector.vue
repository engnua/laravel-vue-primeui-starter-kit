<script setup lang="ts">
import { ref } from "vue";
import { useAppearance } from '@/composables/useAppearance';
import { PrimeIcons } from '@primevue/core/api';

const { appearance, updateAppearance } = useAppearance();

const menu = ref();
const tabs = ref([
    {
        label: 'Light',
        icon: PrimeIcons.SUN,
        command: () => updateAppearance('light'),
        class: appearance.value === 'light' ? 'selected-item' : '',
    },
    {
        label: 'Dark',
        icon: PrimeIcons.MOON,
        command: () => updateAppearance('dark'),
        class: appearance.value === 'dark' ? 'selected-item' : '',
    },
    {
        label: 'System',
        icon: PrimeIcons.DESKTOP,
        command: () => updateAppearance('system'),
        class: appearance.value === 'system' ? 'selected-item' : '',
    }
]);

function getAppearanceIcon(appearance: string): string {
    switch (appearance) {
        case 'light':
            return PrimeIcons.SUN;
        case 'dark':
            return PrimeIcons.MOON;
        case 'system':
            return PrimeIcons.DESKTOP;
        default:
            return PrimeIcons.QUESTION;
    }
}

const toggle = (event: MouseEvent) => {
    menu.value.toggle(event);
};
</script>

<template>
    <Button type="button" :icon="getAppearanceIcon(appearance)" rounded @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" severity="secondary" />
    <Menu ref="menu" id="overlay_menu" :model="tabs" :popup="true" />
</template>
