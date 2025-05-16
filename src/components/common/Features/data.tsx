import { GlobeIcon } from "@/assets/icons/features/GlobeIcon";
import { LockIcon } from "@/assets/icons/features/LockIcon";
import { ManageIcon } from "@/assets/icons/features/ManageIcon";
import { ModernIcon } from "@/assets/icons/features/ModernIcon";
import { SoftwareIcon } from "@/assets/icons/features/SoftwareIcon";
import { BoltIcon } from "@/assets/icons/features/BoltIcon";
import { LayersIcon } from "@/assets/icons/features/LayersIcon";

export const relayFeaturesData = [
    {
        icon: <ModernIcon />,
        title: "Modern",
        description:
            "We run a modern relay implementation with maximum NIPs support and on going development.",
    },
    {
        icon: <GlobeIcon />,
        title: "Reliable",
        description:
            "We run multiple instances of our relay over the globe and they are synced meanwhile (deletions and events are 100% synced between them, guaranteed) helping jellyfish to be high-available",
    },
    {
        icon: <ManageIcon />,
        title: "Managed",
        description:
            "We care about your experience, all reports will be checked and we remove and ban harmful contents.",
    },
    {
        icon: <LockIcon />,
        title: "Privacy and Control",
        description:
            "Jellyfish fully respects to deletion requests (NIP-09), request to vanishes (NIP-62), protected events (NIP-70) and prevent people to read your private gift-wrapped DMs.",
    },
    {
        icon: <SoftwareIcon />,
        title: "Custom Software",
        description:
            "We use our own open-source FOSS called Immortal which is 100% custom and dynamic. We are open to feature requests and contributions.",
    },
    {
        icon: <GlobeIcon />,
        title: "WoT Protected",
        description:
            "People with WoT rank below of a minimum won't be able to get a subscription address, which protects you from scams and spams",
    },
    // {
    //     icon: < />,
    //     title: "Tor Support",
    //     description:
    //         "You can connect to the Jellyfish relay over Tor hidden services as well, enhance your privacy.",
    // },
    // {
    //     icon: < />,
    //     title: "Advanced full-text search",
    //     description:
    //         "You can easily search notes using NIP-50 on jellyfish.",
    // },
];

export const nipData = [
    {
        icon: <GlobeIcon />,
        title: "WoT Protected",
        description:
            "People with WoT rank below of a minimum won't be able to get a NIP-05 address, which keeps these address creditable",
    },
    {
        icon: <BoltIcon />,
        title: "Lightning redirect",
        description:
            "You can use this feature to have custom ln address which is same as your NIP-05 address",
    },
    {
        icon: <LayersIcon />,
        title: "Caching",
        description:
            "We cache recent resolution requests to make validation process faster",
    },
];
