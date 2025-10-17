import { motion } from "framer-motion";
import { WhatsappLogo } from '@phosphor-icons/react';

export function Hero() {

    return (
        <section className="w-full min-h-[716px] relative bg-gradient-to-b from-[#F5F0EF] from-80.41% to-white to-100%" aria-labelledby="hero-heading">
            <div className="max-w-[1360px] min-h-[716px] mx-auto relative pt-[140px]">
                {/* Background Rectangle with Animation */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute left-0 w-[350px] h-[492px] md:w-full md:h-[620px] bg-[#D9D9D9] rounded-[20px] overflow-hidden mx-auto right-0 md:mx-0 md:right-auto md:px-4 lg:px-0"
                >
                    {/* Video Background with Loading State */}
                    <div className="absolute inset-0 bg-black/30">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                            className="absolute inset-0 w-full h-full object-cover"
                            poster="https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742314338/Group_1_t1wmpz.svg"
                            aria-hidden="true"
                        >
                            <source 
                                src="https://res.cloudinary.com/dl4jtxnnv/video/upload/v1742334607/5405026_Coll_wavebreak_Icon_1280x720_online-video-cutter.com_e0sgq2.mp4" 
                                type="video/mp4"
                            />
                            <source 
                                src="https://res.cloudinary.com/dl4jtxnnv/video/upload/v1742335368/5405026_Coll_wavebreak_Icon_1280x720_online-video-cutter.com_euigg6.webm" 
                                type="video/webm" 
                            />
                            Seu navegador não suporta o elemento de vídeo.
                        </video>
                    </div>

                    {/* Gradient Overlay for better text contrast */}
                    <div 
                        className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/50 to-transparent"
                        aria-hidden="true"
                    ></div>
                    <div 
                        className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent"
                        aria-hidden="true"
                    ></div>
                    
                    {/* Conteúdo/Texto com Animação */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="relative z-10 flex flex-col justify-end h-full p-4 md:p-6 lg:pl-[40px] lg:pb-[40px]"
                    >
                        <h1 
                            id="hero-heading" 
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-clash font-bold mb-4 lg:mb-6 leading-tight max-w-[280px] sm:max-w-[400px] md:max-w-[600px] text-white [text-shadow:0px_2px_4px_rgba(0,0,0,0.25)]"
                        >
                            Reduza custos e aumente a eficiência com automações inteligentes
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl font-ibm mb-6 lg:mb-8 leading-relaxed max-w-[280px] sm:max-w-[400px] md:max-w-[550px] text-gray-200 [text-shadow:0px_1px_3px_rgba(0,0,0,0.2)]">
                            Gere um relatório consultivo de forma automatizada e descubra rapidamente como seu negócio pode melhorar. É super rápido.
                        </p>
                        <motion.a 
                            href="https://wa.me/5511936190477?text=Ol%C3%A1,%20eu%20gostaria%20de%20gerar%20um%20relat%C3%B3rio%20consultivo%20gratuito%20para%20a%20minha%20empresa."
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-[200px] sm:w-[220px] h-[40px] sm:h-[44px] bg-white rounded-[30px] hover:bg-gray-50 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                            aria-label="Gerar Relatório"
                        >
                            <WhatsappLogo size={18} className="text-[#FF610B]" />
                            <span className="text-black font-ibm font-semibold text-sm sm:text-base">
                                Gerar Relatório
                            </span>
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
} 