import { motion } from "framer-motion";
import { useEffect } from "react";

interface LoadingAnimationProps {
    onComplete: () => void;
}

export default function LoadingAnimation({
    onComplete,
}: LoadingAnimationProps) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 3000);

        return () => clearTimeout(timer);
    }, [onComplete]);

    const name = "Firudin Maniyev".split("");

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[999] overflow-hidden bg-[#09090B]"
        >
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 80, 0],
                        y: [0, -60, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-yellow-400/10 blur-[120px]"
                />

                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        x: [0, -70, 0],
                        y: [0, 80, 0],
                    }}
                    transition={{
                        duration: 14,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-[-10%] right-[-10%] h-96 w-96 rounded-full bg-orange-400/10 blur-[120px]"
                />

                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-400/5"
                />

                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                        duration: 55,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"
                />
            </div>

            {/* Content */}
            <div className="relative flex h-full flex-col items-center justify-center px-6">
                {/* Logo */}
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.8,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                    className="mb-10"
                >
                    <motion.div
                        animate={{
                            rotate: 360,
                        }}
                        transition={{
                            duration: 18,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="flex h-28 w-28 items-center justify-center rounded-full border border-yellow-400/20"
                    >
                        <motion.div
                            animate={{
                                scale: [1, 1.08, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                            }}
                            className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-yellow-300 to-orange-400 shadow-[0_0_70px_rgba(250,204,21,0.35)]"
                        >
                            <span className="text-3xl font-bold text-black">
                                FM
                            </span>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Name */}
                <div className="flex flex-wrap justify-center text-center text-4xl font-bold sm:text-6xl">
                    {name.map((char, index) => (
                        <motion.span
                            key={index}
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: index * 0.05,
                                duration: 0.4,
                            }}
                            className={
                                char === " "
                                    ? "mx-2"
                                    : char === "F"
                                        ? "text-yellow-400"
                                        : "text-white"
                            }
                        >
                            {char}
                        </motion.span>
                    ))}
                </div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 0.8,
                    }}
                    className="mt-5 text-lg tracking-wide text-zinc-400"
                >
                    Full Stack Developer
                </motion.p>

                {/* Loading Dots */}
                <div className="mt-12 flex gap-3">
                    {[0, 1, 2].map((dot) => (
                        <motion.div
                            key={dot}
                            animate={{
                                y: [0, -8, 0],
                                opacity: [0.4, 1, 0.4],
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 0.8,
                                repeat: Infinity,
                                delay: dot * 0.2,
                            }}
                            className="h-2.5 w-2.5 rounded-full bg-yellow-400"
                        />
                    ))}
                </div>

                {/* Bottom Text */}
                <motion.p
                    animate={{
                        opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                    className="mt-10 text-xs uppercase tracking-[6px] text-zinc-600"
                >
                    Initializing Experience
                </motion.p>
            </div>
        </motion.div>
    );
}