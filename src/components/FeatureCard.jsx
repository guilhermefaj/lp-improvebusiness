import { motion } from "framer-motion";
import { ChartLine, Brain, Handshake, Target } from "@phosphor-icons/react";
import { DotPattern } from "./DotPattern";

const icons = {
    optimization: ChartLine,
    priority: Target,
    connection: Handshake,
    strategy: Brain
};

export function FeatureCard({ title, description, iconType, className = "" }) {
    const Icon = icons[iconType] || ChartLine;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`bg-white rounded-[12px] p-6 h-full [box-shadow:0px_0px_1px_0px_rgba(12,26,75,0.24),0px_3px_8px_-1px_rgba(50,50,71,0.05)] relative overflow-hidden ${className}`}
        >
            <DotPattern
                width={20}
                height={20}
                cx={1}
                cy={1}
                cr={1}
                className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] text-[#1E1E1E]"
                glow={false}
            />

            <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#FF610B]/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#FF610B]" weight="bold" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-clash font-bold text-[#1E1E1E]">
                        {title}
                    </h3>
                </div>
                <p className="text-gray-600 leading-relaxed flex-grow">
                    {description}
                </p>
            </div>
        </motion.div>
    );
} 