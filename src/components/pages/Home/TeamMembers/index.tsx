import SectionTitle from "@/components/ui/SectionTitle";
import { teamMembersData } from "./data";
import TeamMemberCard from "./TeamMemberCard";
import AnimateWrapper from "@/components/AnimateWrapper";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

const TeamMembersSection = () => {
    return (
        <section className="space-y-[84px] mt-48 w-full">
            <SectionTitle className="">Meet the JellyFish team</SectionTitle>
            <AnimateWrapper delay={0.4}>
                <div className="flex justify-between gap-4 ">
                    {teamMembersData.map((service, key) => (
                        <TeamMemberCard {...service} key={key} />
                    ))}
                </div>
            </AnimateWrapper>
            <AnimatedGridPattern
                numSquares={30}
                maxOpacity={0.1}
                duration={3}
                repeatDelay={1}
                className={cn(
                    "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                    "inset-x-0 inset-y-[48%] h-[10%] skew-y-0 opacity-60",
                )}
            />
        </section>
    );
};

export default TeamMembersSection;
