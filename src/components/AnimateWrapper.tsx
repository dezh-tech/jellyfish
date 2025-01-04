import {
    AnimatePresence,
    AnimationProps,
    motion,
    TargetAndTransition,
    VariantLabels,
} from "framer-motion";
import React from "react";
type AnimateWrapperType = {
    duration?: number;
    whileInView?: VariantLabels | TargetAndTransition;
    transition?: AnimationProps;
    delay?: number;
    once?: boolean;
    children?: React.ReactNode;
} & AnimationProps;

export default function AnimateWrapper({
    exit,
    whileInView,
    initial,
    duration,
    children,
    transition,
    delay,
    once,
}: AnimateWrapperType) {
    return (
        <>
            <AnimatePresence>
                <motion.div
                    transition={
                        transition ?? {
                            duration: duration ?? 0.8,
                            delay: delay ?? 0,
                        }
                    }
                    initial={initial ?? { opacity: 0, y: 15 }}
                    whileInView={whileInView ?? { opacity: 1, y: 0 }}
                    exit={exit ?? { opacity: 0, y: 15 }}
                    viewport={{ once: once }}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </>
    );
}
