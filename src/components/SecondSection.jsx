import { motion } from "framer-motion";

export function SecondSection() {
    return (
        <section className="w-full min-h-[644px] bg-white relative">
            <div className="max-w-[1360px] h-full mx-auto relative px-4 md:px-6 lg:px-[40px] py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-start gap-8"
                >
                    {/* Conteúdo da segunda dobra aqui */}
                </motion.div>
            </div>
        </section>
    );
} 