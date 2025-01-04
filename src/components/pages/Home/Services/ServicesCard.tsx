import GradientIconBox from "@/components/ui/GradientIconBox";
import { ServicesCardProps } from "./data";

const ServicesCard = ({
    title,
    description,
    icon,
    isItPublished,
}: ServicesCardProps) => {
    return (
        <div className="relative text-center max-w-[467px] rounded-[22px] p-[1px] bg-gradient-to-tl from-[#A0C5F7] to-[#111628]/[0.62]">
            <div className="bg-[url(/svg/services-bg.svg)] bg-[#141B30] bg-cover bg-center rounded-[20px] p-4 h-full  flex flex-col items-center ">
                <GradientIconBox>{icon}</GradientIconBox>
                <div className="py-6 mt-4">
                    {!isItPublished && (
                        <span className="purple-gradient-text text-sm leading-6 font-medium font-robotoMono">
                            Coming Soon
                        </span>
                    )}
                    <p className="text-[#ACCDF2] text-center  font-bankGothic font-bold text-[38px] leading-[26px] ">
                        {title}
                    </p>
                </div>
                <p className="text-[#80899F] text-center text-lg font-robotoMono leading-5">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default ServicesCard;
