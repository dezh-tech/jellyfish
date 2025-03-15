import SectionTitle from "@/components/ui/SectionTitle";
import { teamMembersData } from "./data";
import TeamMemberCard from "./TeamMemberCard";
import AnimateWrapper from "@/components/AnimateWrapper";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

const TeamMembersSection = () => {
    return (
        <section className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-[84px] mt-12 sm:mt-16 md:mt-20 lg:mt-48 w-full max-w-full sm:max-w-lg md:max-w-xl lg:max-w-[1430px] mx-auto">
            <SectionTitle className="text-left">
                Meet the JellyFish team
            </SectionTitle>
            <AnimateWrapper delay={0.4}>
                <Carousel className="w-full">
                    <CarouselContent className="gap-4">
                        {teamMembersData.map((service, key) => (
                            <CarouselItem
                                key={key}
                                className="basis-[150px] sm:basis-[170px] md:basis-[180px] lg:basis-[190px] last:pr-4"
                            >
                                <TeamMemberCard {...service} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </AnimateWrapper>
            <AnimatedGridPattern
                numSquares={30}
                maxOpacity={0.1}
                duration={3}
                repeatDelay={1}
                className={cn(
                    "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                    "inset-x-0 inset-y-[40%] sm:inset-y-[44%] md:inset-y-[46%] lg:inset-y-[48%] h-[8%] sm:h-[9%] md:h-[10%] lg:h-[10%] skew-y-0 opacity-60",
                )}
            />
        </section>
    );
};

export default TeamMembersSection;
