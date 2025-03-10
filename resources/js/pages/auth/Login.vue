<script setup lang="ts">
import TextLink from '@/components/TextLink.vue';
import AuthBase from '@/layouts/AuthLayout.vue';
import { Head, useForm } from '@inertiajs/vue3';

defineProps<{
    status?: string;
    canResetPassword: boolean;
}>();

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <AuthBase title="Log in to your account" description="Enter your email and password below to log in">
        <Head title="Log in" />

        <div v-if="status" class="mb-4 text-center text-sm font-medium text-green-600">
            {{ status }}
        </div>

        <form @submit.prevent="submit" class="flex flex-col gap-6">
            <div class="grid gap-6">
                <div class="grid gap-2">
                    <label for="email">Email address</label>
                    <InputText
                        id="email"
                        type="email"
                        required
                        autofocus
                        :tabindex="1"
                        autocomplete="email"
                        v-model="form.email"
                        placeholder="email@example.com"
                        :invalid="!!form.errors.email"
                        :disabled="form.processing"
                    />
                    <Message v-if="form.errors.email" severity="error" size="small" variant="simple">{{ form.errors.email }}</Message>
                </div>

                <div class="grid gap-2">
                    <div class="flex items-center justify-between">
                        <label for="password">Password</label>
                        <TextLink v-if="canResetPassword" :href="route('password.request')" class="text-sm" :tabindex="5">
                            Forgot password?
                        </TextLink>
                    </div>
                    <Password
                        inputId="password"
                        type="password"
                        required
                        :tabindex="2"
                        autocomplete="current-password"
                        v-model="form.password"
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

                <div class="flex items-center gap-2" :tabindex="3">
                    <Checkbox id="remember" name="remember" v-model="form.remember" :value="form.remember" binary :tabindex="4" />
                    <label for="remember" class="flex items-center space-x-3">Remember me</label>
                </div>

                <Button type="submit" class="mt-4 w-full" label="Log in" :tabindex="4" :loading="form.processing" loading-icon="pi pi-spinner" :disabled="form.processing" />
            </div>

            <div class="text-center text-sm text-muted-foreground">
                Don't have an account?
                <TextLink :href="route('register')" :tabindex="5">Sign up</TextLink>
            </div>
        </form>
    </AuthBase>
</template>
