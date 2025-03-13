import { ImageT } from "@/@types/global";

export type TeamMembersCardProps = {
    avatar: ImageT;
    role: string;
    name: string;
    nickname: string;
    followLink: string;
};

export const teamMembersData: TeamMembersCardProps[] = [
    {
        avatar: {
            src: "https://github.com/kehiy.png",
            alt: "k.",
        },
        role: "Technical Team Lead",
        name: "k.",
        nickname: "",
        followLink: "https://njump.me/kehiy.net",
    },
    {
        avatar: {
            src: "https://github.com/ZigBalthazar.png",
            alt: "zig",
        },
        role: "Software Engineer",
        name: "Balthazar",
        nickname: "",
        followLink: "https://njump.me/zig@dezh.tech",
    },
    {
        avatar: {
            src: "https://github.com/SwimmingRieux.png",
            alt: "praxeologist",
        },
        role: "Software Engineer",
        name: "Praxeologist",
        nickname: "",
        followLink:
            "https://njump.me/nprofile1qqsw4tud4td89zlkyv2y8tycn72j7zkmv4ahhxupzrj2dqmsdwfcuhq9gcpl5",
    },
    {
        avatar: {
            src: "https://github.com/hamedtkd.png",
            alt: "Hamed",
        },
        role: "Front-End Developer",
        name: "Hamed",
        nickname: "",
        followLink: "#",
    },
    {
        avatar: {
            src: "https://github.com/yasersharifi.png",
            alt: "Yaser",
        },
        role: "Front-End Team Lead",
        name: "Yaser",
        nickname: "",
        followLink: "#",
    },
    {
        avatar: {
            src: "https://image.nostr.build/98a447d949975be5d8c69b508f26adef450cdc2623995bbdc553371383fd8104.jpg",
            alt: "Ehsan",
        },
        role: "Product Designer",
        name: "Ehsan",
        nickname: "",
        followLink:
            "https://njump.me/nprofile1qqsrryh9pq4l09sa568enwr6u3quu4j5745a9rcmpg5m6kg45jnk3zs0ast79",
    },
];
