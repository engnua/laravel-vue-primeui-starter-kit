<script setup lang="ts">
import { useForm } from '@inertiajs/vue3';
import { ref } from 'vue';
// Components
import HeadingSmall from '@/components/HeadingSmall.vue';

const passwordInput = ref<HTMLInputElement | null>(null);

const form = useForm({
    password: '',
});

const visible = ref(false);

const deleteUser = (e: Event) => {
    e.preventDefault();

    form.delete(route('profile.destroy'), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => passwordInput.value?.$el.focus(),
        onFinish: () => form.reset(),
    });
};

const closeModal = () => {
    visible.value = false;
    form.clearErrors();
    form.reset();
};
</script>

<template>
    <div class="space-y-6">
        <HeadingSmall title="Delete account" description="Delete your account and all of its resources" />
        <div class="space-y-4 rounded-lg border border-red-100 bg-red-50 p-4 dark:border-red-200/10 dark:bg-red-700/10">
            <div class="relative space-y-0.5 text-red-600 dark:text-red-100">
                <p class="font-medium">Warning</p>
                <p class="text-sm">Please proceed with caution, this cannot be undone.</p>
            </div>
            <Button label="Delete account" severity="danger" @click="visible = true" />
            <Dialog v-model:visible="visible" modal header="Are you sure you want to delete your account?" :style="{ width: '25vw' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
                <span class="text-surface-500 dark:text-surface-400 block mb-8">
                    Once your account is deleted, all of its resources and data will also be permanently deleted. Please enter your password to confirm you would like to permanently delete your account.
                </span>
                <form class="space-y-6" @submit="deleteUser">
                    <div class="grid gap-2">
                        <label for="password" class="sr-only">Password</label>
                        <Password inputId="password"
                                  type="password"
                                  name="password"
                                  ref="passwordInput"
                                  v-model="form.password"
                                  :invalid="!!form.errors.password"
                                  :style="{ width: '100%' }"
                                  :inputStyle="{ width: '100%' }"
                                  :disabled="form.processing"
                                  :feedback="false"
                                  placeholder="Password"
                                  toggleMask />
                        <Message v-if="form.errors" severity="error" size="small" variant="simple">{{ form.errors.password }}</Message>
                    </div>
                    <div class="flex justify-end gap-2">
                        <Button type="button" severity="secondary" label="Cancel" @click="closeModal" />
                        <Button type="submit" severity="danger" label="Delete account" :disabled="form.processing" :loading="form.processing" />
                    </div>
                </form>
            </Dialog>
        </div>
    </div>
</template>
