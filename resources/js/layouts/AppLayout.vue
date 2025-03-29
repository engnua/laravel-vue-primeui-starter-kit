<script setup lang="ts">
import { useAppearance } from '@/composables/useAppearance';
import { computed, ref, watch } from 'vue';
import AppFooter from './AppFooter.vue';
import AppSidebar from './AppSidebar.vue';
import AppTopbar from './AppTopbar.vue';
import AppSubTopbar from './AppSubTopbar.vue';
import { AppTopSubBarItem, BreadcrumbItemType } from '@/types';

interface Props {
    breadcrumbs?: BreadcrumbItemType[];
    actions?: AppTopSubBarItem[];
}

withDefaults(defineProps<Props>(), {
    breadcrumbs: () => [],
    actions: () => [
        {
            title: 'Packagist',
            icon: 'pi pi-github',
            url: 'https://packagist.org/packages/engnua/laravel-vue-primeui-starter-kit',
            target: '_blank',
        }
    ]
});

const { layoutConfig, layoutState, isSidebarActive } = useAppearance();

const outsideClickListener = ref<EventListener | null>(null);

watch(isSidebarActive, (newVal) => {
    if (newVal) {
        bindOutsideClickListener();
    } else {
        unbindOutsideClickListener();
    }
});

const containerClass = computed(() => {
    return {
        'layout-overlay': layoutConfig.menuMode === 'overlay',
        'layout-static': layoutConfig.menuMode === 'static',
        'layout-static-inactive': layoutState.staticMenuDesktopInactive && layoutConfig.menuMode === 'static',
        'layout-overlay-active': layoutState.overlayMenuActive,
        'layout-mobile-active': layoutState.staticMenuMobileActive
    };
});

function bindOutsideClickListener() {
    if (!outsideClickListener.value) {
        outsideClickListener.value = (event) => {
            if (isOutsideClicked(event)) {
                layoutState.overlayMenuActive = false;
                layoutState.staticMenuMobileActive = false;
                layoutState.menuHoverActive = false;
            }
        };
        document.addEventListener('click', outsideClickListener.value);
    }
}

function unbindOutsideClickListener() {
    if (outsideClickListener.value) {
        document.removeEventListener('click', outsideClickListener.value);
        outsideClickListener.value = null;
    }
}

function isOutsideClicked(event: Event) {
    const sidebarEl = document.querySelector('.layout-sidebar');
    const topbarEl = document.querySelector('.layout-menu-button');

    return !(sidebarEl?.isSameNode(event.target as Node) || sidebarEl?.contains(event.target as Node) || topbarEl?.isSameNode(event.target as Node) || topbarEl?.contains(event.target as Node));
}
</script>

<template>
    <div class="layout-wrapper" :class="containerClass">
        <AppTopbar :class="{ 'border-b dark:border-surface-700': breadcrumbs.length || actions.length }" />
        <AppSubTopbar v-if="breadcrumbs.length || actions.length" :breadcrumbs="breadcrumbs" :actions="actions"/>
        <AppSidebar :class="{
            'layout-sidebar-margin-default': !breadcrumbs.length || !actions.length,
            'layout-sidebar-margin-topsubbar': breadcrumbs.length || actions.length,
        }" />
        <div class="layout-main-container" :class="{
            'layout-main-container-padding-default': !breadcrumbs.length || !actions.length,
            'layout-main-container-padding-topsubbar': breadcrumbs.length || actions.length,
        }">
            <div class="layout-main">
                <slot />
            </div>
            <AppFooter />
        </div>
        <div class="layout-mask animate-fadein"></div>
    </div>
    <Toast />
</template>
