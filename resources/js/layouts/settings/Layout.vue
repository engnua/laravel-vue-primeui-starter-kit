<script setup lang="ts">
import { ref, computed } from "vue";
import Heading from '@/components/Heading.vue';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/vue3';
import { PrimeIcons } from '@primevue/core/api';

const sidebarNavItems = ref<NavItem[]>([
    {
        title: 'Profile',
        route: route('profile.edit'),
        icon: PrimeIcons.USER
    },
    {
        title: 'Password',
        route: route('password.edit'),
        icon: PrimeIcons.LOCK
    },
    {
        title: 'Appearance',
        route: route('appearance'),
        icon: PrimeIcons.PALETTE
    },
]);

/*const page = usePage();
const currentPath = page.props.ziggy?.location ? new URL(page.props.ziggy.location).pathname : '';*/
const currentFullUrl = computed(() => {
    return window.location.href;
});

</script>

<template>
    <Card>
        <template #content>
            <div class="px-4 py-6">
                <Heading title="Settings" description="Manage your profile and account settings" />

                <Tabs :value="currentFullUrl" scrollable>
                    <TabList>
                        <Tab v-for="tab in sidebarNavItems" :key="tab.title" :value="tab.route">
                            <Link v-if="tab.route" :href="tab.route" custom>
                                <span :class="tab.icon" class="mr-2" />
                                <span>{{ tab.title }}</span>
                            </Link>
                        </Tab>
                    </TabList>
                </Tabs>

                <div class="flex-1 md:max-w-2xl p-10">
                    <section class="max-w-xl space-y-12">
                        <slot />
                    </section>
                </div>
            </div>
        </template>
    </Card>
</template>
