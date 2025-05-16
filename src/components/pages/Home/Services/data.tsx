import { TitleDescriptionT } from "@/@types/global";
import { NipIcon } from "@/assets/icons";
import { ReactNode } from "react";

export type ServicesCardProps = {
    icon: ReactNode;
    isItPublished?: boolean;
    href?: string;
    dashboardHref?: string;
    isItDashboard?: boolean;
} & TitleDescriptionT;

export const servicesData: ServicesCardProps[] = [
    {
        title: "Relay Service",
        description:
            "Let your friends to find you by your name on chaotic nostr ecosystem easily. Pay once keep it forever.",
        icon: <img src="/svg/relay.svg" alt="relay" />,
        isItPublished: true,
        href: "/relay",
        dashboardHref: "/dashboard/relay",
    },
    {
        title: "NIP-05 Service",
        description:
            "Create a human-readable Nostr ID to simplify identity and boost trust across the network.",
        icon: <NipIcon className="flex-shrink-0" />,
        isItPublished: true,
        dashboardHref: "/dashboard/nip05",
        href: "/nip05",
    },
];
