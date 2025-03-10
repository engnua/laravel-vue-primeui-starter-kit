<script setup lang="ts">
import AuthLayout from '@/layouts/AuthLayout.vue';
import { Head, useForm } from '@inertiajs/vue3';
import { Password } from "primevue";

interface Props {
    token: string;
    email: string;
}

const props = defineProps<Props>();

const form = useForm({
    token: props.token,
    email: props.email,
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post(route('password.store'), {
        onFinish: () => {
            form.reset('password', 'password_confirmation');
        },
    });
};
</script>

<template>
    <AuthLayout title="Reset password" description="Please enter your new password below">
        <Head title="Reset password" />

        <form @submit.prevent="submit">
            <div class="grid gap-6">
                <div class="grid gap-2">
                    <label for="email">Email</label>
                    <InputText id="email" type="email" name="email" autocomplete="email" v-model="form.email" class="mt-1 block w-full" readonly :disabled="form.processing" />
                    <Message v-if="form.errors.email" severity="error" size="small" variant="simple">{{ form.errors.email }}</Message>
                </div>

                <div class="grid gap-2">
                    <label for="password">Password</label>
                    <Password
                        inputId="password"
                        type="password"
                        name="password"
                        autocomplete="new-password"
                        v-model="form.password"
                        class="mt-1 block w-full"
                        autofocus
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
                    <label for="password_confirmation">Confirm Password</label>
                    <Password
                        inputId="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        autocomplete="new-password"
                        v-model="form.password_confirmation"
                        class="mt-1 block w-full"
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

                <Button type="submit" label="Reset password" class="mt-4 w-full" :loading="form.processing" :disabled="form.processing" />
            </div>
        </form>
    </AuthLayout>
</template>
