import { motion } from "framer-motion";
import { Card } from "./Card";
import { useContactModal } from '../contexts/ContactModalContext';

export function MultiAgentSection() {
    const { openContactModal } = useContactModal();
    
    return (
        <section className="w-full bg-white py-6 md:py-16 lg:py-20">
            <div className="max-w-[1360px] mx-auto px-4 md:px-6 lg:px-[40px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col"
                >
                    <div className="flex flex-col max-w-[700px] mb-8 md:mb-12">
                        <div className="mb-4 md:mb-8">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-clash font-bold mb-4 text-[#1E1E1E] leading-tight">
                                Automação Inteligente com Agentes Multitarefa Personalizados
                            </h2>
                            <p className="text-base md:text-lg text-gray-600">
                                Nossos sistemas multiagentes são desenvolvidos para resolver gargalos complexos e repetitivos da sua operação com o máximo de eficiência. Integramos inteligência artificial, automação e dados em uma solução única que entrega ROI real desde o primeiro mês.
                            </p>
                        </div>
                        <p className="text-lg md:text-xl font-clash font-bold text-[#1E1E1E] mb-6 md:mb-8">
                            Descubra como transformar tarefas operacionais em fluxos inteligentes, com agilidade, escala e precisão — tudo sob medida para seu negócio.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        <Card 
                            title="Simplificam jornadas"
                            description="Atuam em etapas interligadas para resolver desafios intricados."
                            image="https://res.cloudinary.com/dl4jtxnnv/image/upload/v1747418207/2_1_ihmqv3.png"
                        />
                        <Card 
                            title="Maximizam resultados"
                            description="Alinham automação a metas mensuráveis, reduzindo custos operacionais."
                            image="https://res.cloudinary.com/dl4jtxnnv/image/upload/v1747418207/3_1_uu51yg.png"
                        />
                        <Card 
                            title="Escalam com precisão"
                            description="Adaptam-se dinamicamente a demandas variáveis, mantendo alta performance."
                            image="https://res.cloudinary.com/dl4jtxnnv/image/upload/v1747418207/4_1_geukpu.png"
                        />
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-start mt-8 md:mt-10 gap-6 md:gap-8">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-gray-600 text-base md:text-lg max-w-[700px]"
                        >
                            A integração dos agentes melhora a performance da sua empresa desde o primeiro dia. Você ganha vantagem competitiva com velocidade, eficiência e visão estratégica — sem depender de ferramentas genéricas.
                        </motion.p>
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={openContactModal}
                            className="w-full md:w-auto px-6 md:px-8 py-3 border-2 border-[#FF610B] text-[#FF610B] rounded-full font-ibm font-semibold transition-all duration-300 hover:bg-[#FF610B] hover:text-white"
                        >
                            Agendar Diagnóstico
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 