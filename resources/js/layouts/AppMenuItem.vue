<script setup lang="ts">
import { useAppearance } from '@/composables/useAppearance';
import { onBeforeMount, ref, watch } from 'vue';
import { Link, usePage } from "@inertiajs/vue3";

const { layoutState, setActiveMenuItem, toggleMenu } = useAppearance();

const props = defineProps({
    item: {
        type: Object,
        default: () => ({})
    },
    index: {
        type: Number,
        default: 0
    },
    root: {
        type: Boolean,
        default: true
    },
    parentItemKey: {
        type: String,
        default: null
    }
});

const isActiveMenu = ref(false);
const itemKey = ref<string | null>(null);

onBeforeMount(() => {
    itemKey.value = props.parentItemKey
        ? `${props.parentItemKey}-${props.index}`
        : String(props.index);

    const currentUrl = usePage().url;

    // Проверяем, есть ли совпадение URL среди дочерних элементов
    const isActiveByUrl = checkUrlInSubitems(props.item, currentUrl);

    if (isActiveByUrl) {
        setActiveMenuItem(itemKey.value);
        isActiveMenu.value = true;
    }
});

function checkUrlInSubitems(item: any, currentUrl: string): boolean {
    // Проверка текущего элемента
    if (item.href && item.href.replace(/^https?:\/\/[^/]+/, '') === currentUrl) {
        return true;
    }

    // Рекурсивная проверка дочерних элементов
    if (item.items) {
        return item.items.some((subItem: any) => checkUrlInSubitems(subItem, currentUrl));
    }

    return false;
}

watch(
    () => layoutState.activeMenuItem,
    (newVal) => {
        isActiveMenu.value = checkIsActiveMenu(newVal, itemKey.value);
    }
);

function checkIsActiveMenu(activeItem: string | null, currentItemKey: string | null): boolean {
    if (!activeItem || !currentItemKey) return false;

    // Точное совпадение
    if (activeItem === currentItemKey) return true;

    // Проверка на вложенные активные элементы
    return activeItem.startsWith(`${currentItemKey}-`) ||
           activeItem.includes(`${currentItemKey}-`);
}

function itemClick(event: MouseEvent, item: {
    disabled?: boolean,
    href?: string,
    url?: string,
    items?: any[],
    command?: (params: { originalEvent: MouseEvent, item: any }) => void
}) {
    if (item.disabled) {
        event.preventDefault();
        return;
    }

    if ((item.href || item.url) && (layoutState.staticMenuMobileActive || layoutState.overlayMenuActive)) {
        toggleMenu();
    }

    if (item.command) {
        item.command({ originalEvent: event, item: item });
    }

    const foundItemKey = item.items
        ? (isActiveMenu.value ? null : itemKey.value)
        : itemKey.value;

    setActiveMenuItem(foundItemKey);
}

function checkActiveRoute(item) {
    const currentUrl = usePage().url;

    const cleanItemHref = item.href.replace(/^https?:\/\/[^/]+/, '');

    return (currentUrl === cleanItemHref);
}
</script>

<template>
    <li :class="{ 'layout-root-menuitem': root, 'active-menuitem': isActiveMenu }">
        <div v-if="root && item.visible !== false" class="layout-menuitem-root-text">{{ item.label }}</div>
        <a v-if="(!item.href || item.items) && item.visible !== false" :href="item.url" @click="itemClick($event, item)" :class="item.class" :target="item.target" tabindex="0">
            <i :class="item.icon" class="layout-menuitem-icon"></i>
            <span class="layout-menuitem-text">{{ item.label }}</span>
            <i class="pi pi-fw pi-angle-down layout-submenu-toggler" v-if="item.items"></i>
        </a>
        <Link v-if="item.href && !item.items && item.visible !== false" @click="itemClick($event, item)" :class="[item.class, { 'active-route': checkActiveRoute(item) }]" tabindex="0" :href="item.href">
            <i :class="item.icon" class="layout-menuitem-icon"></i>
            <span class="layout-menuitem-text">{{ item.label }}</span>
            <i class="pi pi-fw pi-angle-down layout-submenu-toggler" v-if="item.items"></i>
        </Link>
        <Transition v-if="item.items && item.visible !== false" name="layout-submenu">
            <ul v-show="root ? true : isActiveMenu" class="layout-submenu">
                <AppMenuItem v-for="(child, i) in item.items" :key="child.key || i" :index="i" :item="child" :parentItemKey="itemKey ?? ''" :root="false"></AppMenuItem>
            </ul>
        </Transition>
    </li>
</template>

<style lang="scss" scoped></style>
