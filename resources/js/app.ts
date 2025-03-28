import '../css/app.scss';

import { useNProgress } from '@/composables/useNProgress';
import { createInertiaApp, router } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import type { DefineComponent } from 'vue';
import { createApp, h } from 'vue';
import { ZiggyVue } from 'ziggy-js'
import { getPreset, initializeTheme } from './composables/useAppearance';

import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';

// Extend ImportMeta interface for Vite...
declare module 'vite/client' {
    interface ImportMetaEnv {
        readonly VITE_APP_NAME: string;

        [key: string]: string | boolean | undefined;
    }

    interface ImportMeta {
        readonly env: ImportMetaEnv;
        readonly glob: <T>(pattern: string) => Record<string, () => Promise<T>>;
    }
}

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

const defaultPreset = getPreset();
const nprogress = useNProgress();

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./pages/${name}.vue`, import.meta.glob<DefineComponent>('./pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        const vueApp = createApp({
            render: () => h('div', [h(App, props)]),
        });

        let timeout: number | null | undefined = null;

        router.on('start', () => {
            timeout = setTimeout(() => nprogress.start(), 250);
        });

        router.on('progress', (event) => {
            if (nprogress.isStarted() && event.detail.progress?.percentage) {
                nprogress.set((event.detail.progress.percentage / 100) * 0.9);
            }
        });

        router.on('finish', (event) => {
            if (timeout !== null) {
                clearTimeout(timeout);
            }
            if (!nprogress.isStarted()) {
                return;
            } else if (event.detail.visit.completed) {
                nprogress.done();
            } else if (event.detail.visit.interrupted) {
                nprogress.set(0);
            } else if (event.detail.visit.cancelled) {
                nprogress.done();
                nprogress.remove();
            }
        });

        vueApp
            .use(plugin)
            .use(ZiggyVue)
            .use(PrimeVue, {
                theme: {
                    preset: defaultPreset,
                    options: {
                        darkModeSelector: '.dark',
                    },
                },
                ripple: true,
            })
            .use(ToastService)
            .use(ConfirmationService)
            .mount(el);
    },
    progress: false,
});

// This will set light / dark mode on page load...
initializeTheme();
