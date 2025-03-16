import { TitleDescriptionT } from "@/@types/global";
import { NipIcon } from "@/assets/icons";
import { ReactNode } from "react";

export type ServicesCardProps = {
    icon: ReactNode;
    isItPublished?: boolean;
    href?: string;
} & TitleDescriptionT;

export const servicesData: ServicesCardProps[] = [
    {
        title: "Relay Services",
        description:
            "Let your friends to find you by your name on chaotic nostr ecosystem easily. Pay once keep it forever.",
        icon: <img src="/svg/relay.svg" alt="relay" />,
        isItPublished: true,
        href: "/relay",
    },
    {
        title: "NIP-05 Service",
        description:
            "Let your friends to find you by your name on chaotic nostr ecosystem easily. Pay once keep it forever.",
        icon: <NipIcon className="flex-shrink-0" />,
    },
];
