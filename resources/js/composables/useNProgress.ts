import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { computed, watch } from 'vue';

export function useNProgress() {
    const progressColor = computed(() => getComputedStyle(document.documentElement).getPropertyValue('--primary-color') || '#4B5563');

    NProgress.configure({
        showSpinner: true,
        trickleSpeed: 500,
        minimum: 0.05,
    });

    const updateColor = (color: string) => {
        const bar = document.querySelector('#nprogress .bar') as HTMLElement;
        const peg = document.querySelector('#nprogress .peg') as HTMLElement;
        const spinner = document.querySelector('#nprogress .spinner-icon') as HTMLElement;

        if (bar) bar.style.background = color;
        if (peg) peg.style.boxShadow = `0 0 10px ${color}, 0 0 5px ${color}`;
        if (spinner) spinner.style.borderTopColor = color;
    };

    watch(progressColor, (newColor) => updateColor(newColor), { immediate: true });

    const set = (number: number) => NProgress.set(number);
    const isStarted = () => NProgress.isStarted();
    const start = () => NProgress.start();
    const done = (force?: boolean) => NProgress.done(force);
    const remove = () => NProgress.remove();

    return { set, start, done, isStarted, remove };
}
