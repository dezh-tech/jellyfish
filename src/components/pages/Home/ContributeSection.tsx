import { GitHubIcon } from "@/assets/icons/GitHubIcon";
import { OpenLinkIcon } from "@/assets/icons/OpenLinkIcon";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const ContributeSection = () => {
    return (
        <section className="pt-[212px] pb-[289px] flex flex-col items-center gap-12">
            <GitHubIcon />
            <h1 className="gradient-text text text-center font-bold text-5xl uppercase max-w-[900px] mx-auto leading-[70px] animate-fade-up ">
                Contribute to JellyFish development
            </h1>
            <p className="font-roboto-mono up max-w-[900px] mx-auto text-center text-xl">
                The JellyFish used free and open source software to provide
                services. you can be a part of jellyfish software ecosystem
                development!
            </p>
            <a href="https://github.com/dezh-tech/jellyfish">
                <Button className="h-9" variant={"outline"}>
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
                    "inset-x-0 inset-y-[66%] h-[20%] skew-y-0 opacity-60",
                )}
            />
        </section>
    );
};

export default ContributeSection;
