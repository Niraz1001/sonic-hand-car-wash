import { JSX } from "react";

export interface NavItem {
    name: string;
    href: string;
}

export interface DetailsInfo {
    Icon: JSX.Element;
    name: string;
    details?: string;
}

export interface SocialIcon {
    icon: JSX.Element;
    href: string;
}

export interface HeroSection {
    title?: string;
    img: string;
}

export interface Services {
    img: string;
    title: string;
    description: string;
    price: string;
}

export interface Testimonials {
    img: string;
    name: string;
    title: string;
    description: string;
}

export interface Herosections {
    img: string;
    title: string;
}

export interface SubscriptionCards {
    icon: JSX.Element;
    title: string;
    description: string;
}


export interface SubscriptionPlans {
    title: string;
    price: string;
    features: string[];
    isPopular?: boolean; // Optional property
    button?: string;
}

export interface Faq {
    title: string;
    des: string;
}