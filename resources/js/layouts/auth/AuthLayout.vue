<script setup lang="ts">
import AppLogoIcon from '@/components/AppLogoIcon.vue';
import { Link } from '@inertiajs/vue3';
import FloatingConfigurator from '@/components/FloatingConfigurator.vue';

defineProps<{
    title?: string;
    description?: string;
}>();
</script>

<template>
    <FloatingConfigurator />
    <div class="bg-surface-50 dark:bg-surface-950 flex items-center justify-center min-h-screen min-w-[100vw] overflow-hidden">
        <div class="flex flex-col items-center justify-center">
            <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">
                <div class="w-full bg-surface-0 dark:bg-surface-900 py-20 px-8 sm:px-20 p-card" style="border-radius: 53px; box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);">
                    <div class="text-center mb-8">
                        <Link :href="route('home')" class="flex flex-col items-center gap-2 font-medium">
                            <div class="mb-1 flex h-9 w-9 items-center justify-center rounded-md">
                                <AppLogoIcon class="size-9 fill-current text-[var(--foreground)] dark:text-white" />
                            </div>
                        </Link>
                        <div class="text-surface-900 dark:text-surface-0 text-3xl font-medium mb-4">{{ title}}</div>
                        <span class="text-muted-color font-medium">{{ description }}</span>
                    </div>
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>
