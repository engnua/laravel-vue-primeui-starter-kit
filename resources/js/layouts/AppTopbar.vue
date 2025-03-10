<script setup lang="ts">
import { Link } from "@inertiajs/vue3";
import AppConfigurator from './AppConfigurator.vue';
import AppLogoIcon from '@/components/AppLogoIcon.vue';
import type { BreadcrumbItemType } from '@/types';
import AppearanceSelector from '@/components/AppearanceSelector.vue';
import UserButton from '@/components/UserButton.vue';
import { useAppearance } from '@/composables/useAppearance';

const { toggleMenu } = useAppearance();

defineProps<{
    breadcrumbs?: BreadcrumbItemType[];
}>();

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
</script>

<template>
    <div class="layout-topbar">
        <div class="layout-topbar-logo-container">
            <button class="layout-menu-button layout-topbar-action" @click="toggleMenu">
                <i class="pi pi-bars"></i>
            </button>
            <Link :href="route('dashboard')" class="layout-topbar-logo">
                <div class="mb-1 flex h-9 w-9 items-center justify-center rounded-md">
                    <AppLogoIcon class="size-9 fill-current text-[var(--foreground)] dark:text-white" />
                </div>

                <span>{{ appName}}</span>
            </Link>
        </div>

        <div class="layout-topbar-actions">
            <div class="layout-config-menu">
                <div class="relative">
                    <button
                        v-styleclass="{ selector: '@next', enterFromClass: 'hidden', enterActiveClass: 'animate-scalein', leaveToClass: 'hidden', leaveActiveClass: 'animate-fadeout', hideOnOutsideClick: true }"
                        type="button"
                        class="layout-topbar-action layout-topbar-action-highlight"
                    >
                        <i class="pi pi-palette"></i>
                    </button>
                    <AppConfigurator />
                </div>
                <AppearanceSelector />
                <div class="relative">
                    <UserButton />
                </div>
            </div>
        </div>
    </div>
</template>
