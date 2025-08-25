import Features from "@/components/common/Features";
import Form from "./Form";
import useScrollToTop from "@/hooks/useScrollToTop";
import { useSEO } from "@/hooks/useSEO";

const SellRelay = () => {
    useScrollToTop();

    // Set SEO for relay page
    useSEO('relay');

    return (
        <div className="pt-4 sm:pt-8 md:pt-16 lg:pt-[152px] space-y-8 md:space-y-16 lg:space-y-[80px]">
            <Form />
            <Features />
        </div>
    );
};

export default SellRelay;
