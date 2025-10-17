import { motion } from 'framer-motion';
import { Target, Database, Shield, ArrowsClockwise } from '@phosphor-icons/react';
import { useRef } from 'react';
import { AnimatedBeam } from './ui/animated-beam';

export function AdaptiveSection() {
  const containerRef = useRef(null);
  const centerRef = useRef(null);
  const leftCircleRefs = [useRef(null), useRef(null), useRef(null)];
  const rightCircleRefs = [useRef(null), useRef(null), useRef(null)];

  const principles = [
    {
      icon: Target,
      title: "Foco em Metas",
      description: "Prioriza o objetivo final, em vez de seguir instruções lineares."
    },
    {
      icon: Database,
      title: "Atenção aos Recursos",
      description: "Identifica e utiliza dados, ferramentas e ativos disponíveis para alcançar resultados."
    },
    {
      icon: Shield,
      title: "Respeito a Restrições",
      description: "Incorpora limites regulatórios, orçamentários ou operacionais em seu planejamento."
    },
    {
      icon: ArrowsClockwise,
      title: "Adaptação Contínua",
      description: "Ajusta estratégias conforme avalia o progresso em relação aos critérios de sucesso."
    }
  ];

  return (
    <section className="w-full bg-[#f7f8fb] py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-[40px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-[#1E1E1E] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-clash font-bold mb-6 sm:mb-8">
            O Potencial Adaptativo da Improve e Sua Integração Estratégica
          </h2>
          <p className="text-[#4A5568] text-sm sm:text-base md:text-lg font-ibm leading-relaxed mb-4 sm:mb-6">
            A Improve representa uma evolução significativa em relação aos modelos tradicionais de inteligência artificial, especialmente quando comparada à rigidez da IA conversacional convencional. Enquanto sistemas determinísticos operam com regras fixas e scripts predefinidos, a Improve funciona como um ecossistema dinâmico, orientado por metas e capaz de navegar pela complexidade do mundo real.
          </p>
          <p className="text-[#4A5568] text-sm sm:text-base md:text-lg font-ibm leading-relaxed">
            Não se trata apenas de automatizar tarefas, mas de reimaginar a resolução de problemas, a gestão de recursos e a entrega de resultados estratégicos.
          </p>
        </motion.div>

        {/* Cards Section */}
        <div className="mb-16 sm:mb-20">
          <h3 className="text-[#1E1E1E] text-xl sm:text-2xl md:text-3xl font-clash font-bold mb-6 sm:mb-8">
            Princípios Fundamentais da Improve
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                  viewport={{ once: true }}
                  className="bg-white rounded-[20px] p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <Icon size={28} className="text-[#FF610B] mb-3 sm:mb-4" />
                  <h4 className="text-[#1E1E1E] text-lg sm:text-xl font-clash font-bold mb-2 sm:mb-3">
                    {principle.title}
                  </h4>
                  <p className="text-[#4A5568] text-sm sm:text-base font-ibm">
                    {principle.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-[#4A5568] text-sm sm:text-base md:text-lg font-ibm leading-relaxed mb-16 sm:mb-20"
        >
          Essa estrutura permite que a Improve atue em cenários imprevisíveis. Por exemplo, em um contexto corporativo, ela pode personalizar soluções financeiras com base em dados em tempo real ou otimizar fluxos hospitalares durante crises.
        </motion.p>

        {/* Animated Beams Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          ref={containerRef}
          className="relative h-[400px] max-w-[1000px] mx-auto"
        >
          {/* Beams Layer - Camada inferior */}
          <div className="absolute inset-0 z-0">
            {/* Beams da Esquerda */}
            {leftCircleRefs.map((circleRef, index) => (
              <AnimatedBeam
                key={`left-beam-${index}`}
                containerRef={containerRef}
                fromRef={centerRef}
                toRef={circleRef}
                gradientStartColor="#ff6109"
                gradientStopColor="#6833ff"
                pathColor="#CBD5E0"
                pathOpacity={0.25}
                pathWidth={3}
                delay={index * 0.2}
                curvature={index === 0 ? 100 : index === 1 ? 0 : -100}
                reverse={true}
              />
            ))}

            {/* Beams da Direita */}
            {rightCircleRefs.map((circleRef, index) => (
              <AnimatedBeam
                key={`right-beam-${index}`}
                containerRef={containerRef}
                fromRef={centerRef}
                toRef={circleRef}
                gradientStartColor="#ff6109"
                gradientStopColor="#6833ff"
                pathColor="#CBD5E0"
                pathOpacity={0.25}
                pathWidth={3}
                delay={index * 0.2}
                curvature={index === 0 ? 100 : index === 1 ? 0 : -100}
                reverse={false}
              />
            ))}
          </div>

          {/* Circles Layer - Camada superior */}
          <div className="absolute inset-0 z-10">
            {/* Centro - Ícone da Improve */}
            <div 
              ref={centerRef}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center"
            >
              <img 
                src="https://f005.backblazeb2.com/file/improvebusinessai/logo.svg"
                alt="Improve AI"
                className="w-20 h-20 max-w-full object-contain"
              />
            </div>

            {/* Círculos da Esquerda */}
            <div className="absolute left-[15%] top-0 h-full flex flex-col items-center justify-center">
              <motion.div
                ref={leftCircleRefs[0]}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300 mb-20"
              >
                <img 
                  src="https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742399375/Messenger_zzjott.svg"
                  alt="Messenger"
                  className="w-8 h-8"
                />
              </motion.div>
              <motion.div
                ref={leftCircleRefs[1]}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300 mb-20"
              >
                <img 
                  src="https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742399375/Drive_ncg4fo.svg"
                  alt="Drive"
                  className="w-8 h-8"
                />
              </motion.div>
              <motion.div
                ref={leftCircleRefs[2]}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300"
              >
                <img 
                  src="https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742399374/Mailchimp_cbf3kd.svg"
                  alt="Mailchimp"
                  className="w-8 h-8"
                />
              </motion.div>
            </div>

            {/* Círculos da Direita */}
            <div className="absolute right-[15%] top-0 h-full flex flex-col items-center justify-center">
              <motion.div
                ref={rightCircleRefs[0]}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300 mb-20"
              >
                <img 
                  src="https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742399374/Instagram_oju8qb.svg"
                  alt="Instagram"
                  className="w-8 h-8"
                />
              </motion.div>
              <motion.div
                ref={rightCircleRefs[1]}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300 mb-20"
              >
                <img 
                  src="https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742399374/Gmail_fgkhxt.svg"
                  alt="Gmail"
                  className="w-8 h-8"
                />
              </motion.div>
              <motion.div
                ref={rightCircleRefs[2]}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300"
              >
                <img 
                  src="https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742399374/WhatsApp_fvoumw.svg"
                  alt="WhatsApp"
                  className="w-8 h-8"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Caso Prático Section */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <h3 className="text-[#1E1E1E] text-2xl md:text-3xl font-clash font-bold mb-8">
              Caso Prático: Personalização em Ação
            </h3>
            <p className="text-[#4A5568] text-base md:text-lg font-ibm leading-relaxed mb-6">
              Imagine um colaborador que precisa escolher o melhor plano de benefícios para sua família, considerando políticas de licença parental e franquias de seguro. Sistemas baseados em regras falhariam aqui, pois a solicitação exige análise contextualizada de múltiplas variáveis. A Improve, porém, é acionada por um sistema de direcionamento inteligente, que:
            </p>

            <ul className="text-[#4A5568] text-base md:text-lg font-ibm leading-relaxed mb-12 space-y-4">
              <li className="flex items-start">
                <span className="text-[#FF610B] mr-2">•</span>
                <span><strong className="text-[#1E1E1E]">Analisa o Objetivo:</strong> Entender qual decisão trará maior bem-estar ao colaborador.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF610B] mr-2">•</span>
                <span><strong className="text-[#1E1E1E]">Mapeia Recursos:</strong> Acessa políticas da empresa, dados de planos e restrições legais.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF610B] mr-2">•</span>
                <span><strong className="text-[#1E1E1E]">Gera um Plano Personalizado:</strong> Oferece opções alinhadas às necessidades individuais e às diretrizes organizacionais.</span>
              </li>
            </ul>

            <h3 className="text-[#1E1E1E] text-2xl md:text-3xl font-clash font-bold mb-8">
              Sinergia com Sistemas Existentes
            </h3>
            <p className="text-[#4A5568] text-base md:text-lg font-ibm leading-relaxed mb-6">
              A Improve não opera isoladamente. Ela se integra à infraestrutura tecnológica das empresas, considerando:
            </p>

            <ul className="text-[#4A5568] text-base md:text-lg font-ibm leading-relaxed mb-12 space-y-4">
              <li className="flex items-start">
                <span className="text-[#FF610B] mr-2">•</span>
                <span><strong className="text-[#1E1E1E]">Segurança e Conformidade:</strong> Prioriza protocolos para garantir proteção de dados.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF610B] mr-2">•</span>
                <span><strong className="text-[#1E1E1E]">Eficiência Operacional:</strong> Equilibra latência, custos e demanda de manutenção.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF610B] mr-2">•</span>
                <span><strong className="text-[#1E1E1E]">Auditabilidade:</strong> Mantém rastreabilidade para transparência em decisões críticas.</span>
              </li>
            </ul>

            <p className="text-[#4A5568] text-base md:text-lg font-ibm leading-relaxed mb-6">
              Para clientes de plataformas de IA conversacional, a combinação é estratégica:
            </p>

            <ul className="text-[#4A5568] text-base md:text-lg font-ibm leading-relaxed mb-12 space-y-4">
              <li className="flex items-start">
                <span className="text-[#FF610B] mr-2">•</span>
                <span><strong className="text-[#1E1E1E]">Tarefas Rotineiras</strong> (ex.: redefinição de senha) são tratadas por processos pré-definidos, garantindo agilidade e consistência.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF610B] mr-2">•</span>
                <span><strong className="text-[#1E1E1E]">Desafios Complexos</strong> (ex.: escolha de benefícios) são direcionados à Improve, que aplica raciocínio contextual e adaptativo.</span>
              </li>
            </ul>

            <h3 className="text-[#1E1E1E] text-2xl md:text-3xl font-clash font-bold mb-8">
              Conclusão: Inovação e Confiabilidade em Equilíbrio
            </h3>
            <p className="text-[#4A5568] text-base md:text-lg font-ibm leading-relaxed">
              A fusão entre Improve e IA conversacional cria um ecossistema robusto, capaz de unir inovação (para problemas multifacetados) e estabilidade (para operações cotidianas). Essa abordagem híbrida não apenas otimiza recursos, mas também fortalece a capacidade das organizações de responder a um mercado em constante mudança, onde flexibilidade e precisão são indispensáveis.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 