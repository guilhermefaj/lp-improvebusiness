import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AutoAnimatedLiquidImage } from './AutoAnimatedLiquidImage';

export function TabSection() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Agentes de resposta",
      content: {
        text: {
          title: "Forneça respostas instantâneas às perguntas dos clientes",
          description: "A busca constante por conhecimento faz toda a diferença entre um cliente que desiste de uma jornada e outro que se mantém fiel. Nossos agentes de atendimento inteligentes da Improve entregam aos usuários respostas precisas, ágeis e personalizadas para suas perguntas cotidianas ou específicas.",
          features: [
            "Diminui significativamente as conversas sem solução",
            "Oferece diálogos naturais que simulam a interação humana",
            "Centraliza todas as informações da empresa, eliminando fragmentação e servindo como um único ponto de contato para tirar dúvidas"
          ],
          conclusion: "Coleta e processa dados das interações para evoluir continuamente, adaptar-se e identificar oportunidades de novos serviços com base nas demandas reais dos clientes"
        },
        image: "https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742246485/4_hfcras.png"
      }
    },
    {
      title: "Agentes de ação",
      content: {
        text: {
          title: "Agentes de Ação Improve: Soluções Práticas em Tempo Real",
          description: "Transforme atendimento comum em experiência memorável com ações imediatas. Nossos Agentes não apenas respondem, mas resolvem problemas automatizando tarefas e entregando resultados antes mesmo da solicitação do cliente.",
          features: [
            "Automatizam soluções sem intervenção humana, acelerando respostas.",
            "Atuam em múltiplos sistemas (vendas, suporte, operações) com ações diretas nas plataformas.",
            "Integram processos, eliminando gargalos e repetições.",
            "Evoluem com dados, antecipando necessidades e otimizando rotinas."
          ],
          conclusion: "Com automação inteligente, vão além do diálogo: agendam serviços, atualizam dados, processam reembolsos e conectam informações críticas em segundos."
        },
        image: "https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742246485/9_v4ctzf.png"
      }
    }
  ];

  return (
    <section className="w-full bg-white flex items-center py-24 md:py-32">
      <div className="w-full">
        <div className="max-w-[1360px] mx-auto px-4 md:px-6 lg:px-[40px]">
          <div className="flex flex-col items-center mb-8 md:mb-12">
            <h2 className="text-[#1E1E1E] text-3xl md:text-4xl lg:text-5xl font-clash font-bold text-center mb-4">
              Nossos Agentes Inteligentes
            </h2>
            <p className="text-[#4A5568] text-base md:text-lg lg:text-xl text-center max-w-2xl font-ibm">
              Conheça os diferentes tipos de agentes que podem transformar sua operação
            </p>
          </div>

          {/* Tabs Navigation */}
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 mb-8 md:mb-12">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 md:px-6 py-2.5 md:py-3 rounded-[30px] font-ibm font-semibold transition-all duration-200 text-sm md:text-base ${
                  activeTab === index
                    ? 'bg-[#1E1E1E] text-white shadow-lg'
                    : 'bg-white text-[#1E1E1E] hover:bg-gray-50'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start"
          >
            {/* Text Content */}
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              <h3 className="text-[#1E1E1E] text-lg sm:text-xl md:text-2xl lg:text-3xl font-clash font-bold leading-tight">
                {tabs[activeTab].content.text.title}
              </h3>
              <p className="text-[#4A5568] text-sm sm:text-base md:text-lg font-ibm leading-relaxed">
                {tabs[activeTab].content.text.description}
              </p>
              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <h4 className="text-[#1E1E1E] text-base sm:text-lg md:text-xl font-clash font-bold">
                  {activeTab === 1 ? "Benefícios-chave:" : "Principais benefícios:"}
                </h4>
                <ul className="space-y-3 sm:space-y-4 md:space-y-6">
                  {tabs[activeTab].content.text.features.map((feature, index) => (
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
                {tabs[activeTab].content.text.conclusion && (
                  <p className="text-[#1E1E1E] text-sm sm:text-base md:text-lg font-ibm font-semibold leading-relaxed pt-2">
                    {tabs[activeTab].content.text.conclusion}
                  </p>
                )}
              </div>
            </div>

            {/* Image Content */}
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-[20px] overflow-hidden">
              <AutoAnimatedLiquidImage
                src={tabs[activeTab].content.image}
                alt={`Ilustração de ${tabs[activeTab].title}`}
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 