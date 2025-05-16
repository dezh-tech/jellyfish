import AnimateWrapper from "@/components/AnimateWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import { Link } from "react-router-dom";
import { servicesData } from "./data";
import ServicesCard from "./ServicesCard";

const ServicesSection = () => {
    return (
        <section className="space-y-[84px] ">
            <SectionTitle className="text-center">Our Services</SectionTitle>
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
