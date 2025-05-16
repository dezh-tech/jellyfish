import GradientIconBox from "@/components/ui/GradientIconBox";
import { ServicesCardProps } from "./data";

const ServicesCard = ({
    title,
    description,
    dashDescription,
    icon,
    isItPublished,
    isItDashboard,
}: ServicesCardProps) => {
    return (
        <div className="w-full max-h-[284px] h-[284px] relative text-center rounded-[22px] p-[1px] bg-gradient-to-tl from-[#A0C5F7] to-[#111628]/[0.62]">
            <div className="bg-[url(/svg/services-bg.svg)] bg-[#141B30] bg-cover bg-center rounded-[20px] px-4 py-[33px] flex-grow h-full grid grid-cols-1 grid-rows-3 ">
                {/* -- Icon -- */}
                <div className="flex justify-center flex-shrink-0 row-span-1">
                    <GradientIconBox>{icon}</GradientIconBox>
                </div>

                {/* -- Title and Badge -- */}
                <div
                    className="flex flex-col items-center justify-center flex-shrink-0 h-full row-span-1"
                    style={{
                        height: isItPublished ? "82px" : "53px",
                    }}
                >
                    {!isItPublished && (
                        <span className="text-sm font-medium leading-6 purple-gradient-text font-roboto-mono">
                            Coming Soon
                        </span>
                    )}
                    <p className="text-[#ACCDF2] text-center  font-bankGothic  font-bank-gothic font-bold text-[38px] leading-[26.02px] tracking-[-0.03em]">
                        {title}
                    </p>
                </div>

                {/* -- Summary -- */}
                <div className="flex items-center justify-center flex-shrink-0 row-span-1">
                    <p className=" text-[#80899F] text-center text-lg font-roboto-mono font-normal text-[18px] leading-[21px] tracking-[-0.04em] ">
                        {isItDashboard ? dashDescription : description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;
