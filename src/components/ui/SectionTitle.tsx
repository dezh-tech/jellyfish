import { cn } from "@/lib/utils";
import { ReactNode, forwardRef } from "react";
import AnimateWrapper from "../AnimateWrapper";

type SectionTitleProps = {
    children: ReactNode;
    className?: string;
};

const SectionTitle = forwardRef<HTMLHeadingElement, SectionTitleProps>(
    ({ className, children, ...props }: SectionTitleProps) => {
        return (
            <AnimateWrapper delay={0.3}>
                <h2
                    className={cn(
                        "text-[72px] font-bold leading-[86px] tracking-tighter gradient-text",
                        className,
                    )}
                    {...props}
                >
                    {children}
                </h2>
            </AnimateWrapper>
        );
    },
);

SectionTitle.displayName = "SectionTitle";

export default SectionTitle;
