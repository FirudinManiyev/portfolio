import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import fmLogo from "../assets/modern_fm_logo2.png";

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
                    }, 300);
                    return 100;
                }
                return prev + 1;
            });
        }, 25);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-[#09090B]"
        >
            {/* Pulsing Background Glow */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/20 blur-[120px]"
                />
            </div>

            <div className="relative flex flex-col items-center px-6">
                <motion.img
                    src={fmLogo}
                    alt="FM Logo"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-2 h-40 w-40 object-contain sm:h-48 sm:w-48"
                />

                {/* Progress Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-1 w-full max-w-xs"
                >
                    <div className="mb-2 flex justify-between text-sm text-zinc-400">
                        <span>Yüklənir...</span>
                        <span>{progress}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
                        <motion.div
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.1 }}
                            className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-orange-400"
                        />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}