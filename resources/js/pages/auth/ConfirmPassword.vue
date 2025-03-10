<script setup lang="ts">
import AuthLayout from '@/layouts/AuthLayout.vue';
import { Head, useForm } from '@inertiajs/vue3';
import { Password } from "primevue";

const form = useForm({
    password: '',
});

const submit = () => {
    form.post(route('password.confirm'), {
        onFinish: () => {
            form.reset();
        },
    });
};
</script>

<template>
    <AuthLayout title="Confirm your password" description="This is a secure area of the application. Please confirm your password before continuing.">
        <Head title="Confirm password" />

        <form @submit.prevent="submit">
            <div class="space-y-6">
                <div class="grid gap-2">
                    <label for="password">Password</label>
                    <Password
                        inputId="password"
                        type="password"
                        class="mt-1 block w-full"
                        v-model="form.password"
                        required
                        autocomplete="current-password"
                        autofocus
                        :invalid="!!form.errors.password"
                        :style="{ width: '100%' }"
                        :inputStyle="{ width: '100%' }"
                        placeholder="Password"
                        :feedback="false"
                        toggleMask
                        :disabled="form.processing"
                    />

                    <Message v-if="form.errors.password" severity="error" size="small" variant="simple">{{ form.errors.password }}</Message>
                </div>

                <div class="flex items-center">
                    <Button type="submit" label="Confirm Password" class="w-full" :loading="form.processing" :disabled="form.processing" />
                </div>
            </div>
        </form>
    </AuthLayout>
</template>
