<script setup lang="ts">
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

const menu = ref([
    {
        label: 'Get Started',
        items: [
            {
                label: 'View Source',
                icon: 'pi pi-fw pi-github',
                url: 'https://github.com/engnua/laravel-vue-primeui-starter-kit',
                target: '_blank'
            }
        ]
    }
]);
</script>

<template>
    <div class="mt-3">
        <ul class="layout-menu" :class="{ 'border-t': menu.length > 0 }">
            <template v-for="(item, i) in menu" :key="item">
                <AppMenuItem v-if="!item.separator" :item="item" :index="i"></AppMenuItem>
                <li v-if="item.separator" class="menu-separator"></li>
            </template>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.layout-menu {
    display: flex;
    flex-direction: column;
    gap: 4px;

    .menu-separator {
        height: 1px;
        background-color: var(--surface-border);
        margin: 8px 0;
        width: 100%;
    }

    .menu-footer {
        margin-top: auto;
        padding-top: 8px;
    }
}
</style>
