<script setup lang="ts">
import { ref, computed } from 'vue';
import type { AppTopSubBarItem, BreadcrumbItemType } from '@/types';
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import { Link } from "@inertiajs/vue3";

interface Props {
    breadcrumbs?: BreadcrumbItemType[];
    actions?: AppTopSubBarItem[];
}

const props = withDefaults(defineProps<Props>(), {
    breadcrumbs: () => [],
    actions: () => [],
});

const mobileMenuRef = ref()

const mobileMenuItems = computed(() =>
    props.actions.map(action => ({
        label: action.title,
        icon: action.icon,
        route: action.route,
        url: action.url,
        target: action.target,
        command: action.command
    }))
)

console.log(props.actions)

const toggleMobileMenu = (event) => {
    mobileMenuRef.value.toggle(event)
}

</script>

<template>
    <div class="layout-sub-topbar">
        <div class="layout-sub-topbar-content" :class="{
            'justify-end': breadcrumbs.length === 0,
            'justify-between': breadcrumbs.length > 0
        }">
            <div class="layout-sub-topbar-breadcrumbs">
                <Breadcrumbs :breadcrumbs="breadcrumbs" />
                <div v-if="breadcrumbs.length === 0" class="p-[1.58rem]"></div>
            </div>
            <div v-if="actions?.length" class="layout-sub-topbar-actions hidden lg:flex space-x-2">
                <template v-for="(action, index) in actions" :key="index">
                    <Button
                        v-if="action.route"
                        :key="`btn-route-${index}`"
                        asChild
                        v-slot="slotProps"
                        class="inline-block"
                        severity="secondary"
                    >
                        <Link :href="action.route" :class="slotProps.class">
                            <span v-if="action.icon" :class="action.icon" />
                            {{ action.title }}
                        </Link>
                    </Button>
                    <Button
                        v-else-if="action.url"
                        :key="`btn-url-${index}`"
                        as="a"
                        :label="action.title"
                        :icon="action.icon"
                        :href="action.url"
                        :target="action.target || '_self'"
                        severity="secondary"
                    />
                    <Button
                        v-else
                        :key="`btn-command-${index}`"
                        :label="action.title"
                        :icon="action.icon"
                        @click="action.command"
                        severity="secondary"
                    />
                </template>
            </div>
            <div class="lg:hidden">
                <Button
                    severity="secondary"
                    icon="pi pi-ellipsis-v"
                    @click="toggleMobileMenu"
                    text
                />
                <Menu
                    ref="mobileMenuRef"
                    :model="mobileMenuItems"
                    popup
                >
                    <template #item="{ item, props }">
                        <Link v-if="item.route" :href="item.route" v-bind="props.action">
                            <span v-if="item.icon" :class="item.icon" />
                            <span>{{ item.label }}</span>
                        </Link>
                        <a v-else :href="item.url" class="flex items-center" :target="item.target" v-bind="props.action">
                            <span v-if="item.icon" :class="item.icon" />
                            <span>{{ item.label }}</span>
                        </a>
                    </template>
                </Menu>
            </div>

        </div>
    </div>
</template>

