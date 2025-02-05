import { JSX } from "react";

export interface NavItem {
    name:string;
    href:string;
}

export interface DetailsInfo {
    Icon: JSX.Element;
    name: string;
    details: string;
}

export interface SocialIcon {
    icon: JSX.Element;
    href: string;
}  