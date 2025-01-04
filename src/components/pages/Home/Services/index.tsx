import SectionTitle from "@/components/ui/SectionTitle";
import { servicesData } from "./data";
import ServicesCard from "./ServicesCard";
import AnimateWrapper from "@/components/AnimateWrapper";

const ServicesSection = () => {
    return (
        <section className="space-y-[84px] mt-20">
            <SectionTitle className="text-center">Our Services</SectionTitle>
            <AnimateWrapper delay={0.4}>
                <div className="flex justify-center gap-4">
                    {servicesData.map((service, key) => (
                        <ServicesCard {...service} key={key} />
                    ))}
                </div>
            </AnimateWrapper>
        </section>
    );
};

export default ServicesSection;
