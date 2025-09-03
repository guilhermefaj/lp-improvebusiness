import React, { useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { AdaptiveSection } from '../components/AdaptiveSection';
import { AutoAnimatedLiquidImage } from '../components/AutoAnimatedLiquidImage';

export function AgentesDeAcao() {
  useLayoutEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  const content = {
    title: "Agentes de Ação que Executam, Integram e Escalam sua Operação",
    description: "Os Agentes de Ação da Improve são projetados para automatizar tarefas internas, executar comandos em sistemas e integrar fluxos operacionais com autonomia. Diferente de soluções que apenas notificam ou sugerem, nossos agentes tomam decisões e realizam ações dentro da sua estrutura tecnológica — com segurança, velocidade e inteligência.\nEles operam silenciosamente nos bastidores da sua empresa, conectando dados, eliminando tarefas manuais e tornando seus processos mais eficientes, confiáveis e escaláveis.",
    features: [
      "Automatizam soluções sem intervenção humana, acelerando respostas.",
      "Atuam em múltiplos sistemas (vendas, suporte, operações) com ações diretas nas plataformas.",
      "Integram processos, eliminando gargalos e repetições.",
      "Evoluem com dados, antecipando necessidades e otimizando rotinas."
    ],
    conclusion: "Com automação inteligente, vão além do diálogo: agendam serviços, atualizam dados, processam reembolsos e conectam informações críticas em segundos.",
    image: "https://res.cloudinary.com/dl4jtxnnv/image/upload/v1747419959/3_2_ajgioe.png"
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 w-full">
        <div className="pt-[96px] sm:pt-[104px] md:pt-[112px]">
          <section className="w-full bg-white flex items-center py-24 md:py-32">
            <div className="w-full">
              <div className="max-w-[1360px] mx-auto px-4 md:px-6 lg:px-[40px]">
                <div className="flex flex-col items-center mb-8 md:mb-12">
                  <h2 className="text-[#1E1E1E] text-3xl md:text-4xl lg:text-5xl font-clash font-bold text-center mb-4">
                    Agentes de Ação que Executam, Integram e Escalam sua Operação
                  </h2>
                  <p className="text-[#4A5568] text-base md:text-lg lg:text-xl text-center max-w-2xl font-ibm">
                    Automatização inteligente que resolve problemas em tempo real
                  </p>
                </div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start"
                >
                  {/* Text Content */}
                  <div className="space-y-4 sm:space-y-6 md:space-y-8">
                    <h3 className="text-[#1E1E1E] text-lg sm:text-xl md:text-2xl lg:text-3xl font-clash font-bold leading-tight">
                      {content.title}
                    </h3>
                    <p className="text-[#4A5568] text-sm sm:text-base md:text-lg font-ibm leading-relaxed whitespace-pre-line">
                      {content.description}
                    </p>
                    <div className="space-y-3 sm:space-y-4 md:space-y-6">
                      <h4 className="text-[#1E1E1E] text-base sm:text-lg md:text-xl font-clash font-bold">
                        Benefícios-chave:
                      </h4>
                      <ul className="space-y-3 sm:space-y-4 md:space-y-6">
                        {content.features.map((feature, index) => (
                          <li key={index} className="flex items-start space-x-2 sm:space-x-3">
                            <svg
                              className="w-4 h-4 sm:w-5 sm:h-5 text-[#1E1E1E] mt-1 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-[#4A5568] text-sm sm:text-base md:text-lg font-ibm leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      {content.conclusion && (
                        <p className="text-[#1E1E1E] text-sm sm:text-base md:text-lg font-ibm font-semibold leading-relaxed pt-2">
                          {content.conclusion}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Image Content */}
                  <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-[20px] overflow-hidden">
                    <AutoAnimatedLiquidImage
                      src={content.image}
                      alt="Ilustração de Agentes de Ação"
                      className="w-full h-full"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
          <AdaptiveSection />
        </div>
      </main>
      <Footer />
    </div>
  );
} 