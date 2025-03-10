<script setup lang="ts">
import TextLink from '@/components/TextLink.vue';
import AuthBase from '@/layouts/AuthLayout.vue';
import { Head, useForm } from '@inertiajs/vue3';
import { Password } from "primevue";

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>
    <AuthBase title="Create an account" description="Enter your details below to create your account">
        <Head title="Register" />

        <form @submit.prevent="submit" class="flex flex-col gap-6">
            <div class="grid gap-6">
                <div class="grid gap-2">
                    <label for="name">Name</label>
                    <InputText id="name" type="text" required autofocus :tabindex="1" autocomplete="name" v-model="form.name" placeholder="Full name" :disabled="form.processing" />
                    <Message v-if="form.errors.name" severity="error" size="small" variant="simple">{{ form.errors.name }}</Message>
                </div>

                <div class="grid gap-2">
                    <label for="email">Email address</label>
                    <InputText id="email" type="email" required :tabindex="2" autocomplete="email" v-model="form.email" placeholder="email@example.com" :disabled="form.processing" />
                    <Message v-if="form.errors.email" severity="error" size="small" variant="simple">{{ form.errors.email }}</Message>
                </div>

                <div class="grid gap-2">
                    <label for="password">Password</label>
                    <Password
                        inputId="password"
                        type="password"
                        required
                        :tabindex="3"
                        autocomplete="new-password"
                        v-model="form.password"
                        :invalid="!!form.errors.password"
                        :style="{ width: '100%' }"
                        :inputStyle="{ width: '100%' }"
                        placeholder="Password"
                        toggleMask
                        :disabled="form.processing"
                    />
                    <Message v-if="form.errors.password" severity="error" size="small" variant="simple">{{ form.errors.password }}</Message>
                </div>

                <div class="grid gap-2">
                    <label for="password_confirmation">Confirm password</label>
                    <Password
                        inputId="password_confirmation"
                        type="password"
                        required
                        :tabindex="4"
                        autocomplete="new-password"
                        v-model="form.password_confirmation"
                        :invalid="!!form.errors.password_confirmation"
                        :style="{ width: '100%' }"
                        :inputStyle="{ width: '100%' }"
                        placeholder="Confirm password"
                        :feedback="false"
                        toggleMask
                        :disabled="form.processing"
                    />
                    <Message v-if="form.errors.password_confirmation" severity="error" size="small" variant="simple">{{ form.errors.password_confirmation }}</Message>
                </div>

                <Button type="submit" label="Create account" class="mt-2 w-full" tabindex="5" :loading="form.processing" :disabled="form.processing" />
            </div>

            <div class="text-center text-sm text-muted-foreground">
                Already have an account?
                <TextLink :href="route('login')" class="underline underline-offset-4" :tabindex="6">Log in</TextLink>
            </div>
        </form>
    </AuthBase>
</template>
