import { motion } from "framer-motion";
import { useContactModal } from '../contexts/ContactModalContext';

export function Hero() {
    const { openContactModal } = useContactModal();

    return (
        <section className="w-full min-h-[716px] relative bg-gradient-to-b from-[#F5F0EF] from-80.41% to-white to-100%">
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
                            className="absolute inset-0 w-full h-full object-cover"
                        >
                            <source 
                                src="https://res.cloudinary.com/dl4jtxnnv/video/upload/v1742334607/5405026_Coll_wavebreak_Icon_1280x720_online-video-cutter.com_e0sgq2.mp4" 
                                type="video/mp4"
                            />
                            <source 
                                src="https://res.cloudinary.com/dl4jtxnnv/video/upload/v1742335368/5405026_Coll_wavebreak_Icon_1280x720_online-video-cutter.com_euigg6.webm" 
                                type="video/webm" 
                            />
                        </video>
                    </div>

                    {/* Gradient Overlay for better text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                    
                    {/* Conteúdo/Texto com Animação */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="relative z-10 flex flex-col justify-end h-full p-4 md:p-6 lg:pl-[40px] lg:pb-[40px]"
                    >
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-clash font-bold mb-4 lg:mb-6 leading-tight max-w-[280px] sm:max-w-[400px] md:max-w-[600px] text-white [text-shadow:0px_2px_4px_rgba(0,0,0,0.25)]">
                            A Improve leva a IA conversacional para o próximo nível
                        </h1>
                        <motion.button 
                            onClick={openContactModal}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-[160px] sm:w-[180px] h-[36px] sm:h-[40px] bg-white rounded-[30px] hover:bg-gray-50 transition-all shadow-md hover:shadow-lg"
                        >
                            <span className="text-black font-ibm font-semibold text-sm sm:text-base">
                                Entrar em contato
                            </span>
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
} 