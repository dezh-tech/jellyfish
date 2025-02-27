import { cn } from "@/lib/utils";
import { alertVariants } from "./alertVariants";
import { VariantProps } from "class-variance-authority";
import React from "react";

export interface alertProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof alertVariants> {
    asChild?: boolean;
}

const Alert = React.forwardRef<HTMLDivElement, alertProps>(
    ({ className, variant, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(alertVariants({ variant }), className)}
                {...props}
            >
                {children}
            </div>
        );
    },
);

Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h5
        ref={ref}
        className={cn(
            "mb-1 font-medium leading-none tracking-tight",
            className,
        )}
        {...props}
    />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("text-sm [&_p]:leading-relaxed", className)}
        {...props}
    />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
