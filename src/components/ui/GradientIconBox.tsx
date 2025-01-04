import { ReactNode } from "react";

const GradientIconBox = ({ children }: { children: ReactNode }) => {
    return (
        <div className="bg-gradient-to-tr from-[#070C20] to-[#A0C5F7] p-[1px]   size-[45px] rounded-[12px] ">
            <span className="size-full flex justify-center items-center rounded-[12px] bg-gradient-to-b from-[#1B2550] to-[#070C20]   ">
                {children}
            </span>
        </div>
    );
};

export default GradientIconBox;
