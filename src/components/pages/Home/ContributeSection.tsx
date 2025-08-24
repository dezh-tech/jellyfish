import { GitHubIcon } from "@/assets/icons/GitHubIcon";
import { OpenLinkIcon } from "@/assets/icons/OpenLinkIcon";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const ContributeSection = () => {
    return (
        <section className="pt-16 sm:pt-24 md:pt-32 lg:pt-[212px] pb-16 sm:pb-24 md:pb-32 lg:pb-[289px] flex flex-col items-center gap-8 sm:gap-10 md:gap-12 lg:gap-12">
            <GitHubIcon />
            <h2 className="gradient-text text-center font-bold text-base sm:text-xl md:text-3xl lg:text-5xl uppercase max-w-full sm:max-w-lg md:max-w-xl lg:max-w-[900px] mx-auto leading-8 sm:leading-10 md:leading-12 lg:leading-[70px] animate-fade-up">
                Contribute to JellyFish
            </h2>
            <p className="font-roboto-mono text-center text-base sm:text-md md:text-lg lg:text-xl max-w-full sm:max-w-lg md:max-w-xl lg:max-w-[900px] mx-auto">
                The JellyFish uses free and open source software to provide
                services. you can be a part of jellyfish software ecosystem
                development!
            </p>
            <a href="https://github.com/dezh-tech">
                <Button
                    className="h-8 sm:h-10 md:h-12 lg:h-9"
                    variant="outline"
                >
                    <OpenLinkIcon /> Go to GitHub
                </Button>
            </a>
            <AnimatedGridPattern
                numSquares={30}
                maxOpacity={0.1}
                duration={3}
                repeatDelay={1}
                className={cn(
                    "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                    "inset-x-0 inset-y-[66%] h-16 sm:h-20 md:h-24 lg:h-[20%] skew-y-0 opacity-60",
                )}
            />
        </section>
    );
};

export default ContributeSection;
