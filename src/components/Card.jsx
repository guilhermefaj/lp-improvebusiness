import { motion } from "framer-motion";
import { LiquidImage } from "./LiquidImage";

export function Card({ title, description, image }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-[413px] h-[420px] flex-shrink-0 rounded-[16px] p-[1px] relative group"
        >
            {/* Borda com gradiente no hover */}
            <div 
                className="absolute inset-0 rounded-[16px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    background: 'linear-gradient(119deg, #6833FF 0%, #FF610B 100%)'
                }}
            />
            
            {/* Conteúdo do card com fundo */}
            <div 
                className="w-full h-full rounded-[16px] pt-10 px-[40px] pb-[40px] flex flex-col justify-between relative bg-white border-[0.5px] border-[#DADCE0] group-hover:border-transparent"
                style={{
                    background: 'linear-gradient(119deg, #FCF9F3 18.17%, #F0F6FB 50.2%, #FFF 74.51%)'
                }}
            >
                {/* Imagem */}
                {image && (
                    <div className="w-full h-[160px] mb-6">
                        <LiquidImage
                            src={image}
                            alt={title}
                            className="w-full h-full"
                        />
                    </div>
                )}
                
                {/* Texto */}
                <div className="flex flex-col items-start w-[333px] gap-6">
                    <h3 className="text-2xl font-clash font-bold text-[#1E1E1E]">
                        {title}
                    </h3>
                    <p className="text-base text-gray-600">
                        {description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
} 