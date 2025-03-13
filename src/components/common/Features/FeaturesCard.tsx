import { TitleDescriptionT } from "@/@types/global";
import GradientIconBox from "@/components/ui/GradientIconBox";
import { linkifyText } from "@/lib/utils";
import { ReactNode } from "react";

const wordsToLink = {
    NSaaS: "https://nsass",
    Immortal: "https://github.com/dezh-tech/immortal",
};

const FeaturesCard = ({
    icon,
    title,
    description,
}: { icon: ReactNode } & TitleDescriptionT) => {
    const formattedDescription = linkifyText(description, wordsToLink);

    return (
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-5 items-center text-center px-4 sm:px-6 md:px-8 lg:px-4 max-w-full sm:max-w-md md:max-w-lg lg:max-w-[330px]">
            <GradientIconBox>{icon}</GradientIconBox>
            <p className="text-[#ACCDF2] text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold text-nowrap">
                {title}
            </p>
            <p
                className="text-[#80899F] text-base sm:text-lg md:text-xl lg:text-xl font-roboto-mono leading-5"
                dangerouslySetInnerHTML={{ __html: formattedDescription }}
            ></p>
        </div>
    );
};

export default FeaturesCard;
