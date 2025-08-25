import AnimateWrapper from "@/components/AnimateWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import { Link } from "react-router-dom";
import { servicesData } from "./data";
import ServicesCard from "./ServicesCard";

const ServicesSection = () => {
    return (
        <section className="space-y-[84px]" aria-labelledby="services-heading">
            <SectionTitle className="text-center" id="services-heading">Our Premium Nostr Services</SectionTitle>

            {/* SEO-friendly description */}
            <div className="max-w-4xl mx-auto text-center mb-8">
                <p className="text-lg text-gray-300 font-roboto-mono">
                    Discover JellyFish's premium Nostr infrastructure services. Get access to our spam-free,
                    WoT protected relay and secure your Nostr identity with our @nostr.eco NIP-05 addresses.
                </p>
            </div>
            <AnimateWrapper delay={0.4}>
                <div className="grid grid-cols-1 md:grid-cols-2 max-w-full w-[950px] mx-auto gap-4">
                    {servicesData.map((service, key) => (
                        <Link
                            key={key}
                            to={service?.href ?? "#"}
                            className="col-span-1"
                        >
                            <ServicesCard {...service} key={key} />
                        </Link>
                    ))}
                </div>
            </AnimateWrapper>
        </section>
    );
};

export default ServicesSection;
