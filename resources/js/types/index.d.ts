import type { PageProps } from '@inertiajs/core';
import type { LucideIcon } from 'lucide-vue-next';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    route?: string;
    icon?: string;
    url?: string;
    target?: string;
}

export interface AppTopSubBarItem {
    title: string;
    route?: string;
    icon?: string;
    url?: string;
    target?: string;
    command?: any;
}

export interface NavItem {
    title: string;
    route: string;
    icon?: LucideIcon|string;
    isActive?: boolean;
}

export interface SharedData extends PageProps {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
}

export type BreadcrumbItemType = BreadcrumbItem;
