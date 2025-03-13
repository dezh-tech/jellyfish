import { Button } from "@/components/ui/Button";
import { TeamMembersCardProps } from "./data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { NostrIconPink } from "@/assets/icons/nav/NostrIconPink";

const TeamMemberCard = ({
    avatar,
    role,
    name,
    nickname,
    followLink,
}: TeamMembersCardProps) => {
    return (
        <div className="flex flex-col items-center justify-center gap-3 text-center sm:gap-4 md:gap-5 lg:gap-6">
            <Avatar className="w-8/12 h-auto sm:w-9/12 md:w-10/12 lg:w-11/12 mix-blend-luminosity">
                <AvatarImage
                    src={avatar.src}
                    alt={avatar.alt}
                    style={{ filter: "grayscale(100%)" }}
                />
                <AvatarFallback>{name}</AvatarFallback>
            </Avatar>
            <div>
                <div className="text-base gradient-text sm:text-lg md:text-xl lg:text-2xl">
                    {name}
                </div>
                <div className="text-xs sm:text-sm md:text-base lg:text-lg font-robotoMono">
                    {role}
                </div>
            </div>
            <a href={followLink} className="font-robotoMono">
                <Button
                    className="text-xs sm:text-sm md:text-base lg:text-lg"
                    size="sm"
                >
                    <NostrIconPink />
                    {`Follow ${nickname}`}
                </Button>
            </a>
        </div>
    );
};

export default TeamMemberCard;
