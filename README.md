# Unofficial Laravel + PrimeVue Starter Kit

<p align="center">
<a href="https://github.com/engnua/laravel-vue-primeui-starter-kit/actions"><img src="https://github.com/engnua/laravel-vue-primeui-starter-kit/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/engnua/laravel-vue-primeui-starter-kit"><img src="https://img.shields.io/packagist/dt/engnua/laravel-vue-primeui-starter-kit" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/engnua/laravel-vue-primeui-starter-kit"><img src="https://img.shields.io/packagist/v/engnua/laravel-vue-primeui-starter-kit" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/engnua/laravel-vue-primeui-starter-kit"><img src="https://img.shields.io/packagist/l/engnua/laravel-vue-primeui-starter-kit" alt="License"></a>
</p>

# Demo

[Demo site](https://laravel-vue-primeui-starter-kit.demo.engn.com.ua)

## Introduction

Our Vue starter kit provides a robust, modern starting point for building Laravel applications with a Vue frontend using [Inertia](https://inertiajs.com).

Inertia allows you to build modern, single-page Vue applications using classic server-side routing and controllers. This lets you enjoy the frontend power of Vue combined with the incredible backend productivity of Laravel and lightning-fast Vite compilation.

This Vue starter kit utilizes Vue 3 and the Composition API, TypeScript, Tailwind 3, and the [PrimeVue](https://primevue.org/) component library.

## Official Documentation

Documentation for all Laravel starter kits can be found on the [Laravel website](https://laravel.com/docs/starter-kits).

## Contributing

Thank you for considering contributing to our starter kit! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## License

The Laravel + PrimeVue starter kit is open-sourced software licensed under the MIT license.

# Docs

To change default theme preset, change config in [useAppearance.ts](resources/js/composables/useAppearance.ts)

```js
const layoutConfig = reactive({
    preset: 'Aura',
    primary: 'noir',
    surface: 'soho',
    menuMode: 'static'
});
```
