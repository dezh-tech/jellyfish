import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <section className="pt-[100px] pb-[150px] md:pt-[150px] md:pb-[200px] lg:pt-[212px] lg:pb-[289px] xl:pb-[350px] relative">
            <h1 className="font-bank-gothic gradient-text font-bold text-[36px] xs:text-[48px] sm:text-[72px] md:text-[96px] lg:text-[136px] xl:text-[160px]  mx-auto leading-[40px] sm:leading-[60px] md:leading-[60px] lg:leading-[86px] animate-fade-up font-bank-gothic  text-center align-middle max-w-[1217px]  sm:text-3xl md:text-5xl  tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.5px] lg:tracking-[-0.6px]">
                Stay Immortal!
            </h1>

            <p className="font-roboto-mono max-w-[80%] sm:max-w-[60%] md:max-w-[503px] mx-auto text-center mt-4 md:mt-6 lg:mt-8 text-base sm:text-lg md:text-xl">
                Premium Nostr relay and NIP-05 services with WoT protection. Join the decentralized social revolution with JellyFish.
            </p>

            <div className="flex items-center justify-center w-full">
                <Button
                    variant="secondary"
                    className="h-12 mt-4 rounded-full w-fit md:mt-6 lg:mt-8"
                    asChild
                >
                    <Link to="/nip05">Get your @nostr.eco address now!</Link>
                </Button>
            </div>

            <div className="-z-20 absolute -bottom-[20%] sm:-bottom-[30%] md:-bottom-[35%] lg:-bottom-[43%] left-1/2 -translate-x-1/2 w-[80%] max-w-[806px] ">
                <img
                    className="w-full h-auto animate-fade-up"
                    src="/svg/half-ring.svg"
                    alt="half-ring"
                    loading="lazy"
                />
            </div>
            <img
                className="absolute inset-0 -z-10 opacity-50 bg-background left-1/2 -translate-x-1/2 
                 [mask-image:radial-gradient(150px_circle_at_center,#141B30,transparent)] 
                 md:[mask-image:radial-gradient(300px_circle_at_center,#141B30,transparent)] 
                 lg:[mask-image:radial-gradient(400px_circle_at_center,#141B30,transparent)]"
                src="/images/jellyfish-gif.gif"
                alt="jellyfish"
                loading="lazy"
            />

            {/* Hidden SEO content for better keyword targeting */}
            <div className="sr-only">
                <h2>Premium Nostr Services</h2>
                <p>
                    JellyFish offers the best Nostr relay and NIP-05 services with Web of Trust (WoT) protection.
                    Our spam-free Nostr relay at wss://jellyfish.land provides reliable infrastructure for the
                    decentralized social network. Get your premium @nostr.eco NIP-05 address for verified
                    Nostr identity. Join thousands of users who trust JellyFish for their Nostr needs.
                </p>
                <ul>
                    <li>Paid Nostr relay with WoT protection</li>
                    <li>Premium NIP-05 names on nostr.eco domain</li>
                    <li>Spam-free Web of Trust relay</li>
                    <li>Professional Nostr infrastructure</li>
                    <li>Lightning and Bitcoin integration</li>
                    <li>Decentralized social network services</li>
                </ul>
            </div>
        </section>
    );
};

export default HeroSection;
