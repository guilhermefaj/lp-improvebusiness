import { motion } from "framer-motion";
import { LiquidImage } from "./LiquidImage";

export function Card({ title, description, image, imageAlt }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-[413px] min-h-[420px] flex-shrink-0 rounded-[16px] p-[1px] relative group mx-auto"
        >
            {/* Borda com gradiente no hover */}
            <div 
                className="absolute inset-0 rounded-[16px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    background: 'linear-gradient(119deg, #6833FF 0%, #FF610B 100%)'
                }}
                aria-hidden="true"
            />
            
            {/* Conteúdo do card com fundo */}
            <div 
                className="w-full h-full rounded-[16px] pt-8 md:pt-10 px-4 md:px-6 lg:px-[40px] pb-8 md:pb-[40px] flex flex-col justify-between relative bg-white border-[0.5px] border-[#DADCE0] group-hover:border-transparent"
                style={{
                    background: 'linear-gradient(119deg, #FCF9F3 18.17%, #F0F6FB 50.2%, #FFF 74.51%)'
                }}
            >
                {/* Imagem */}
                {image && (
                    <div className="mb-6">
                        <LiquidImage
                            src={image}
                            alt={imageAlt || `Ilustração para ${title}`}
                            width="300"
                            height="200"
                            loading="lazy"
                            className="w-full max-w-[160px] md:max-w-[200px]"
                        />
                    </div>
                )}
                
                {/* Conteúdo de texto */}
                <div>
                    <h3 className="text-xl md:text-2xl font-clash font-bold text-[#1E1E1E]">
                        {title}
                    </h3>
                    <p className="mt-3 md:mt-4 text-[#4A5568] text-sm md:text-base font-ibm">
                        {description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
} 