import {
    InfinityIcon,
    ShortNameIcon,
    FastIcon,
    LightingIcons,
    RecordsIcon,
} from "@/assets/icons";

export const relayFeaturesData = [
    {
        icon: <InfinityIcon />,
        title: "Modern",
        description: "We run a modern relay implementation with maximum NIPs support and on going development.",
    },
    {
        icon: <ShortNameIcon />,
        title: "Reliable",
        description:
            "We run multiple instances of our relay over the globe and they are synced meanwhile (deletions and events are 100% synced between them, guaranteed) helping jellyfish to be high-available",
    },
    {
        icon: <FastIcon />,
        title: "Managed",
        description:
            "We care about your experience, all reports will be checked and we remove and ban harmful contents.",
    },
    {
        icon: <LightingIcons />,
        title: "Privacy and Control",
        description:
            "Jellyfish fully respects to deletion requests (NIP-09), request to vanishes (NIP-62), protected events (NIP-70) and prevent people to read your private gift-wrapped DMs.",
    },
    {
        icon: <RecordsIcon />,
        title: "Custom Software",
        description:
            "We use our own open-source FOSS called Immortal which is 100% custom and dynamic. We are open to feature requests and contributions.",
    },
    // {
    //     icon: <ShortNameIcon />,
    //     title: "Tor Support",
    //     description:
    //         "You can connect to the Jellyfish relay over Tor hidden services as well, enhance your privacy.",
    // },
];
