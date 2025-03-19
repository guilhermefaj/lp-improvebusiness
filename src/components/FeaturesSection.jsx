import { motion } from "framer-motion";
import { FeatureCard } from "./FeatureCard";

export function FeaturesSection() {
    const features = [
        {
            title: "Otimização de Custos e Processos",
            description: "A ImproveAI elimina rotinas manuais e simplifica operações, reduzindo gastos e acelerando resultados. Nossos agentes de inteligência artificial assumem tarefas operacionais-chave, permitindo que seu time invista energia em projetos inovadores e decisivos para o negócio.",
            iconType: "optimization"
        },
        {
            title: "Priorize o Essencial",
            description: "Livres de processos lentos e burocracias, seus profissionais concentram-se no que move a organização: excelência no atendimento e atenção dedicada aos pacientes. Enquanto nossa tecnologia gerencia rotinas, sua equipe amplia impacto e qualidade.",
            iconType: "priority"
        },
        {
            title: "Conexões que Geram Confiança",
            description: "Desenvolvidos para compreender contextos e emoções, nossos agentes oferecem respostas personalizadas e acolhedoras. Cada interação é pensada para fortalecer relacionamentos, garantindo que clientes e pacientes sintam-se verdadeiramente atendidos.",
            iconType: "connection"
        },
        {
            title: "Estratégia Alimentada por Dados",
            description: "Com a ImproveAI, informações complexas tornam-se aliadas. Nossa plataforma gera análises preditivas e relatórios dinâmicos, oferecendo clareza para decisões rápidas e orientados a resultados. Transforme dados em vantagem competitiva.",
            iconType: "strategy"
        }
    ];

    return (
        <section className="w-full bg-white min-h-screen flex items-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full"
            >
                <div className="bg-[#f7f8fb] px-4 sm:px-6 lg:px-[40px] py-8 sm:py-12 md:py-16 lg:py-20">
                    <div className="max-w-[1360px] mx-auto">
                        <h2 className="text-[#1E1E1E] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-clash font-bold max-w-[800px] mb-6 sm:mb-8 md:mb-10">
                            Redefinindo a Excelência Operacional com Automação Inteligente e Empatia Digital
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            {features.map((feature, index) => (
                                <div key={index}>
                                    <FeatureCard
                                        title={feature.title}
                                        description={feature.description}
                                        iconType={feature.iconType}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
} 