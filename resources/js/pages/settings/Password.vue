<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import SettingsLayout from '@/layouts/settings/Layout.vue';
import { TransitionRoot } from '@headlessui/vue';
import { Head, useForm } from '@inertiajs/vue3';
import { ref, reactive } from 'vue';
import { Password } from 'primevue';
import { useToast } from "primevue/usetoast";
const toast = useToast();

import HeadingSmall from '@/components/HeadingSmall.vue';
import { type BreadcrumbItem } from '@/types';
import { PrimeIcons } from '@primevue/core/api';

const breadcrumbItems = ref<BreadcrumbItem[]>([
    {
        title: 'Profile settings',
        icon: PrimeIcons.USER,
        route: route('profile.edit')
    },
    {
        title: 'Password settings',
        icon: PrimeIcons.LOCK
    },
]);

const passwordInput = ref<HTMLInputElement | null>(null);
const currentPasswordInput = ref<HTMLInputElement | null>(null);

const form = reactive(useForm({
    current_password: '',
    password: '',
    password_confirmation: '',
}));


const updatePassword = () => {
    form.put(route('password.update'), {
        preserveScroll: true,
        onSuccess: () => { form.reset() },
        onError: (errors: any) => {
            if (errors.password) {
                form.reset('password', 'password_confirmation');
                if (passwordInput.value instanceof HTMLInputElement) {
                    passwordInput.value?.$el.focus();
                }
            }

            if (errors.current_password) {
                form.reset('current_password');
                if (currentPasswordInput.value instanceof HTMLInputElement) {
                    currentPasswordInput.value?.$el.focus();
                }
            }

            if (errors.demo_user) {
                form.reset();
                toast.add({ severity: 'error', summary: 'Demo', detail: form.errors.demo_user, group: 'tc', life: 3000 });
            }
        },
    });
};
</script>

<template>
    <AppLayout :breadcrumbs="breadcrumbItems">
        <Head title="Password settings" />

        <SettingsLayout>
            <div class="space-y-6">
                <HeadingSmall title="Update password" description="Ensure your account is using a long, random password to stay secure" />

                <form @submit.prevent="updatePassword" class="space-y-6">
                    <div class="grid gap-2">
                        <label for="current_password">Current password</label>
                        <Password
                            inputId="current_password"
                            ref="currentPasswordInput"
                            v-model="form.current_password"
                            :invalid="!!form.errors.current_password"
                            :style="{ width: '100%' }"
                            :inputStyle="{ width: '100%' }"
                            :feedback="false"
                            toggleMask
                            :disabled="form.processing"
                            type="password"
                            class="mt-1 block w-full"
                            autocomplete="current-password"
                            placeholder="Current password"
                        />
                        <Message v-if="form.errors.current_password" severity="error" size="small" variant="simple">{{ form.errors.current_password }}</Message>
                    </div>

                    <div class="grid gap-2">
                        <label for="password">New password</label>
                        <Password
                            inputId="password"
                            ref="passwordInput"
                            v-model="form.password"
                            :invalid="!!form.errors.password"
                            :style="{ width: '100%' }"
                            :inputStyle="{ width: '100%' }"
                            :feedback="false"
                            toggleMask
                            :disabled="form.processing"
                            type="password"
                            class="mt-1 block w-full"
                            autocomplete="new-password"
                            placeholder="New password"
                        />
                        <Message v-if="form.errors.password" severity="error" size="small" variant="simple">{{ form.errors.password }}</Message>
                    </div>

                    <div class="grid gap-2">
                        <label for="password_confirmation">Confirm password</label>
                        <Password
                            inputId="password_confirmation"
                            v-model="form.password_confirmation"
                            :invalid="!!form.errors.password_confirmation"
                            :style="{ width: '100%' }"
                            :inputStyle="{ width: '100%' }"
                            :feedback="false"
                            toggleMask
                            :disabled="form.processing"
                            type="password"
                            class="mt-1 block w-full"
                            autocomplete="password-confirmation"
                            placeholder="Confirm password"
                        />
                        <Message v-if="form.errors.password_confirmation" severity="error" size="small" variant="simple">{{ form.errors.password_confirmation }}</Message>
                    </div>

                    <div class="flex items-center gap-4">
                        <Button type="submit" label="Save password" :disabled="form.processing" :loading="form.processing" />

                        <TransitionRoot
                            :show="form.recentlySuccessful"
                            enter="transition ease-in-out"
                            enter-from="opacity-0"
                            leave="transition ease-in-out"
                            leave-to="opacity-0"
                        >
                            <p class="text-sm text-neutral-600 dark:text-neutral-400">Saved</p>
                        </TransitionRoot>
                    </div>
                </form>
            </div>
        </SettingsLayout>
    </AppLayout>
</template>
