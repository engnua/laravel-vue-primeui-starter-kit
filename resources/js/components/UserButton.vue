<script setup lang="ts">
import { ref, computed } from "vue";
import { PrimeIcons } from '@primevue/core/api';
import { getInitials } from '@/composables/useInitials';
import { usePage, Link } from '@inertiajs/vue3';

const page = usePage();
const auth = computed(() => page.props.auth);

const dropdown = ref();
const dropdownItems = ref([
    {
        separator: true
    },
    {
        label: 'Settings',
        icon: 'pi pi-cog',
        route: route('profile.edit'),
    },
    {
        label: 'Logout',
        icon: 'pi pi-sign-out',
        route: route('logout'),
        method: 'post'
    }
]);

const toggle = (event: MouseEvent) => {
    dropdown.value.toggle(event);
};
</script>

<template>
    <Button type="button"
            :icon="PrimeIcons.USER"
            rounded
            severity="secondary"
            @click="toggle"
            aria-haspopup="true"
            aria-controls="user_menu" />
    <Menu ref="dropdown" id="user_menu" :model="dropdownItems" :popup="true">
        <template #start>
            <span v-ripple class="relative overflow-hidden w-full border-0 bg-transparent flex items-start p-2 pl-4 hover:bg-surface-100 dark:hover:bg-surface-800 rounded-none cursor-pointer transition-colors duration-200">
                <Avatar :label="getInitials(auth.user?.name)" class="mr-2" shape="circle" />
                <span class="inline-flex flex-col items-start">
                    <span class="font-bold">{{ auth.user?.name}}</span>
                    <span class="text-sm overflow-hidden truncate">{{ auth.user?.email }}</span>
                </span>
            </span>
        </template>
        <template #item="{ item, props }">
            <template v-if="item.route">
                <Link v-if="item.method" v-ripple :method="item.method" :href="item.route" v-bind="props.action">
                    <span :class="item.icon" />
                    <span>{{ item.label }}</span>
                </Link>
                <Link v-else v-ripple :href="item.route" v-bind="props.action">
                    <span :class="item.icon" />
                    <span>{{ item.label }}</span>
                </Link>
            </template>
            <a v-if="item.url" v-ripple :href="item.url" :target="item.target" class="flex items-center" v-bind="props.action">
                <span :class="item.icon" />
                <span>{{ item.label }}</span>
            </a>
        </template>
    </Menu>
</template>
