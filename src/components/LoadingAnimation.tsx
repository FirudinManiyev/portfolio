import { motion, useReducedMotion } from "framer-motion";
import { useEffect } from "react";

interface LoadingAnimationProps {
    onComplete: () => void;
}

export default function LoadingAnimation({
    onComplete,
}: LoadingAnimationProps) {
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const timeout = window.setTimeout(
            onComplete,
            shouldReduceMotion ? 350 : 1050,
        );

        return () => {
            window.clearTimeout(timeout);
            document.body.style.overflow = previousOverflow;
        };
    }, [onComplete, shouldReduceMotion]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.1 : 0.28 }}
            role="status"
            aria-live="polite"
            aria-label="Sayt açılır"
            className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-neutral-950"
        >
            <div aria-hidden="true" className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.12),transparent_48%)]" />
                <motion.div
                    animate={shouldReduceMotion ? undefined : { rotate: 360 }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-yellow-300/15 sm:h-72 sm:w-72"
                />
            </div>

            <div className="relative flex w-full max-w-56 flex-col items-center px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: shouldReduceMotion ? 0.1 : 0.38, ease: "easeOut" }}
                    aria-hidden="true"
                    className="relative flex h-24 w-24 items-center justify-center rounded-[2rem] border border-yellow-300/25 bg-yellow-300/8 text-3xl font-black tracking-[-0.08em] text-yellow-200 shadow-[0_0_55px_rgba(250,204,21,0.16)] backdrop-blur-xl"
                >
                    FM
                    <div className="absolute inset-2 rounded-[1.55rem] border border-white/5" />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: shouldReduceMotion ? 0 : 0.12 }}
                    className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400"
                >
                    Portfolio
                </motion.p>

                <div aria-hidden="true" className="mt-5 h-px w-full overflow-hidden bg-white/10">
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: shouldReduceMotion ? 0.2 : 0.85, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full origin-left bg-linear-to-r from-yellow-400 via-yellow-200 to-amber-400"
                    />
                </div>
            </div>
        </motion.div>
    );
}
