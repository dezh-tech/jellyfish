import AnimateWrapper from "@/components/AnimateWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import { useLocation } from "react-router-dom";
import { nipData, relayFeaturesData } from "./data";
import FeaturesCard from "./FeaturesCard";

const Features = () => {
    const { pathname } = useLocation();

    return (
        <section className="pb-8 sm:pb-16 md:pb-24 lg:pb-[300px]">
            <SectionTitle className="text-center">Our Features</SectionTitle>
            <div className="mt-4 sm:mt-12 md:mt-16 lg:mt-20 gap-4 sm:gap-6 md:gap-8 lg:gap-y-[75px] flex flex-wrap justify-center items">
                {pathname === "/nip05"
                    ? nipData.map((card, key) => (
                          <AnimateWrapper
                              once
                              delay={0.3 * key}
                              key={card.description}
                          >
                              <FeaturesCard {...card} />
                          </AnimateWrapper>
                      ))
                    : relayFeaturesData.map((card, key) => (
                          <AnimateWrapper once delay={0.3 * key} key={key}>
                              <FeaturesCard {...card} />
                          </AnimateWrapper>
                      ))}
            </div>
        </section>
    );
};

export default Features;
