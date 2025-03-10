<script setup lang="ts">
import { ref } from "vue";
import AppLayout from '@/layouts/AppLayout.vue';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/vue3';
import PlaceholderPattern from '../components/PlaceholderPattern.vue';

const breadcrumbs = ref<BreadcrumbItem[]>([
    {
        title: 'Dashboard',
    },
]);
</script>

<template>
    <Head title="Dashboard" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="flex h-full flex-1 flex-col gap-4 rounded-xl">
            <div class="grid auto-rows-min gap-4 md:grid-cols-3">
                <Card>
                    <template #content>
                        <div class="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                            <PlaceholderPattern />
                        </div>
                    </template>
                </Card>
                <Card>
                    <template #content>
                        <div class="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                            <PlaceholderPattern />
                        </div>
                    </template>
                </Card>
                <Card>
                    <template #content>
                        <div class="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                            <PlaceholderPattern />
                        </div>
                    </template>
                </Card>
            </div>
            <Card>
                <template #content>
                    <div class="relative min-h-[100vh] flex-1 rounded-xl border border-sidebar-border/70 dark:border-sidebar-border md:max-h-min">
                        <PlaceholderPattern />
                    </div>
                </template>
            </Card>
        </div>
    </AppLayout>
</template>
