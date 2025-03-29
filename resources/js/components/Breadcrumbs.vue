<script setup lang="ts">
import { ref } from "vue";
import { Link } from '@inertiajs/vue3';
import { Breadcrumb } from 'primevue';
import { PrimeIcons } from '@primevue/core/api';

interface BreadcrumbItem {
    title: string;
    route?: string;
    icon?: string;
    url?: string;
    target?: string;
}

defineProps<{
    breadcrumbs: BreadcrumbItem[];
}>();

const home = ref({
    icon: PrimeIcons.HOME,
    route: route('dashboard'),
})
</script>

<template>
    <Breadcrumb v-if="breadcrumbs.length" :home="home" :model="breadcrumbs">
        <template #item="{ item, props }">
            <Link v-if="item.route" :href="item.route" custom>
                <span :class="[item.icon, 'text-color']" />
                <span class="text-primary font-semibold ml-2 hidden md:inline-block">{{ item.title }}</span>
            </Link>
            <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                <span :class="[item.icon, 'text-color']" />
                <span class="text-surface-700 dark:text-surface-0">{{ item.title }}</span>
            </a>
        </template>
    </Breadcrumb>
</template>
