import { TitleDescriptionT } from "@/@types/global";
import { NipIcon } from "@/assets/icons";
import { ReactNode } from "react";

export type ServicesCardProps = {
    icon: ReactNode;
    isItPublished?: boolean;
    href?: string;
    dashboardHref?: string;
    dashDescription?: string;
    isItDashboard?: boolean;
} & TitleDescriptionT;

export const servicesData: ServicesCardProps[] = [
    {
        title: "Relay",
        description:
            "Publish your notes to a spam-free, WoT protected and modern relay",
        icon: <img src="/svg/relay.svg" alt="relay" />,
        isItPublished: true,
        href: "/relay",
        dashboardHref: "/dashboard/relay",
        dashDescription: "Check your relay subscription information"
    },
    {
        title: "NIP-05",
        description:
            "Create a human-readable, WoT protected and creditable Nostr ID",
        icon: <NipIcon className="flex-shrink-0" />,
        isItPublished: true,
        dashboardHref: "/dashboard/nip05",
        href: "/nip05",
        dashDescription: "Manage your NIP-05 address"
    },
];
