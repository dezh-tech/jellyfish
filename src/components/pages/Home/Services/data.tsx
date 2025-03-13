import { TitleDescriptionT } from "@/@types/global";
import { NipIcon, RelayIcon } from "@/assets/icons";
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
            "Join jellyfish relay; control your own data with easy migration using reliable synced multi-instance immortal relays over multiple regions.",
        icon: <RelayIcon />,
        isItPublished: true,
        href: "/relay",
    },
    {
        title: "NIP-05 Service",
        description:
            "Let your friends to find you by your name on chaotic nostr ecosystem easily. Pay once keep it forever.",
        icon: <NipIcon />,
    },
];
