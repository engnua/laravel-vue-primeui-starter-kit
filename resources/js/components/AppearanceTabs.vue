<script setup lang="ts">
import { computed } from "vue";
import { useAppearance } from '@/composables/useAppearance';
import { PrimeIcons } from '@primevue/core/api';

interface Props {
    class?: string;
}

const { class: containerClass = '' } = defineProps<Props>();

const { appearance, updateAppearance } = useAppearance();

const appearanceValue = computed(() => appearance.value);
const options = computed(() => [
    { icon: PrimeIcons.SUN, label: 'Light', value: 'light', selected: appearanceValue.value == 'light' },
    { icon: PrimeIcons.MOON, label: 'Dark', value: 'dark', selected: appearanceValue.value == 'dark' },
    { icon: PrimeIcons.DESKTOP, label: 'System', value: 'system', selected: appearanceValue.value == 'system' }
]);
</script>

<template>
    <div :class="['inline-flex gap-1 rounded-lg bg-neutral-100 p-1 dark:bg-neutral-800', containerClass]">
        <SelectButton v-model="appearanceValue"
                      :options="options"
                      optionLabel="label"
                      optionValue="value"
                      dataKey="value"
                      aria-labelledby="custom"
                      optionDisabled="selected"
                      @change="updateAppearance($event.value)">
            <template #option="slotProps">
                <i :class="slotProps.option.icon"></i>
                <span class="ml-1.5 text-sm">{{ slotProps.option.label }}</span>
            </template>
        </SelectButton>
    </div>
</template>
