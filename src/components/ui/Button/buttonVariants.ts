import { cva } from "class-variance-authority";

export const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-mono transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
        variants: {
            variant: {
                default:
                    "bg-gradient-to-bl from-[hsla(212,73%,81%,1)] to-[hsla(204,69%,90%,1)] text-secondary-foreground shadow-sm hover:bg-secondary/80 rounded-xl",
                destructive:
                    "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
                outline:
                    "rounded-full font-semibold text-[#D8ECF8] bg-[#161a20] relative after:content-[''] after:-z-10 after:absolute after:w-[100%] after:scale-105 after:h-[100%] after:rounded-full after:bg-[linear-gradient(to_bottom_left,_#a0c5f7,_#070c20)]",
                secondary: "bg-[#282E4A] text-white",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-9 px-4 py-2",
                sm: "h-8 rounded-md px-3 text-xs",
                lg: "h-10 rounded-md px-8",
                icon: "h-9 w-9",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    },
);
