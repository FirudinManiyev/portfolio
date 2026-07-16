import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingAnimationProps {
    onComplete: () => void;
}

export default function LoadingAnimation({
    onComplete,
}: LoadingAnimationProps) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);

                    setTimeout(() => {
                        onComplete();
                    }, 500);

                    return 100;
                }

                return prev + 1;
            });
        }, 25);

        return () => clearInterval(interval);
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
            <div className="absolute inset-0">

                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 80, 0],
                        y: [0, -60, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 12,
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
                        repeat: Infinity,
                        duration: 14,
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-[-10%] right-[-10%] h-96 w-96 rounded-full bg-orange-400/10 blur-[120px]"
                />

                <motion.div
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 25,
                        ease: "linear",
                    }}
                    className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-400/5"
                />
            </div>

            <div className="relative flex h-full items-center justify-center px-6">

                <motion.div
                    initial={{
                        opacity: 0,
                        scale: .9,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: .8,
                    }}
                    className="w-full max-w-lg rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
                >
                    {/* Logo */}

                    <div className="mb-8 flex justify-center">

                        <motion.div
                            animate={{
                                rotate: 360,
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 10,
                                ease: "linear",
                            }}
                            className="flex h-24 w-24 items-center justify-center rounded-full border border-yellow-400/20"
                        >
                            <motion.div
                                animate={{
                                    scale: [1, 1.15, 1],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 2,
                                }}
                                className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400"
                            >
                                <span className="text-2xl font-bold text-black">
                                    FM
                                </span>
                            </motion.div>
                        </motion.div>

                    </div>

                    {/* Name */}

                    <div className="flex flex-wrap justify-center text-center text-3xl font-bold sm:text-5xl">

                        {name.map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{
                                    opacity: 0,
                                    y: 25,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    delay: index * 0.04,
                                }}
                                className={
                                    char === " "
                                        ? "mx-2"
                                        : char === "F"
                                            ? "text-yellow-400"
                                            : "text-zinc-100"
                                }
                            >
                                {char}
                            </motion.span>
                        ))}

                    </div>

                    <motion.p
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            delay: 1,
                        }}
                        className="mt-4 text-center text-zinc-400"
                    >
                        Full Stack Developer
                    </motion.p>

                    {/* Progress */}

                    <div className="mt-10">

                        <div className="mb-3 flex justify-between text-sm text-zinc-400">
                            <span>Loading</span>
                            <span>{progress}%</span>
                        </div>

                        <div className="relative h-1.5 overflow-hidden rounded-full bg-zinc-800">

                            <motion.div
                                animate={{
                                    width: `${progress}%`,
                                }}
                                transition={{
                                    duration: .2,
                                }}
                                className="relative h-full rounded-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400"
                            >
                                <motion.div
                                    animate={{
                                        x: [-40, 200],
                                    }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 1,
                                        ease: "linear",
                                    }}
                                    className="absolute top-0 h-full w-20 bg-white/40 blur-md"
                                />
                            </motion.div>

                        </div>

                    </div>

                    <motion.div
                        animate={{
                            opacity: [.4, 1, .4],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 2,
                        }}
                        className="mt-8 text-center text-xs tracking-[5px] text-zinc-500 uppercase"
                    >
                        Initializing Experience
                    </motion.div>

                </motion.div>

            </div>
        </motion.div>
    );
}