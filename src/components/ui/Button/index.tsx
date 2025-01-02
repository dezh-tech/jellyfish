import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./buttonVariants";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";

        if (variant === "outline") {
            return (
                <div
                    className={cn(
                        buttonVariants({ variant, size, className }),
                        "bg-gradient-to-tr from-[#070C20] to-[#A0C5F7] px-0.5 py-5",
                    )}
                >
                    <Comp
                        className={cn(
                            buttonVariants({ variant, size, className }),
                            "bg-[#151B2A] text-[#D8ECF8]",
                        )}
                        ref={ref}
                        {...props}
                    />
                </div>
            );
        }

        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    },
);
Button.displayName = "Button";

export { Button };
