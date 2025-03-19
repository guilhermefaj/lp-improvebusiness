import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function ExpandableCard({ title, preview, fullText, icon }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div 
            className="bg-white rounded-[20px] p-6 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            layout
        >
            <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                    <h3 className="text-xl font-clash font-bold text-[#1E1E1E] mb-2">
                        {title}
                    </h3>
                    <AnimatePresence mode="wait">
                        {isExpanded ? (
                            <motion.p
                                key="full"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="text-gray-600"
                            >
                                {fullText}
                            </motion.p>
                        ) : (
                            <motion.p
                                key="preview"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="text-gray-600"
                            >
                                {preview}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FF610B]/10 flex items-center justify-center transition-transform duration-300"
                    style={{
                        transform: isExpanded ? 'rotate(45deg)' : 'rotate(0deg)'
                    }}
                >
                    <span className="text-[#FF610B] text-xl">+</span>
                </button>
            </div>
        </motion.div>
    );
} 