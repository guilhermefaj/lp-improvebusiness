import { motion } from 'framer-motion';
import { HeadCircuit, Brain } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { useContactModal } from '../contexts/ContactModalContext';

export function AgentsSection() {
  const { openContactModal } = useContactModal();

  const cards = [
    {
      id: 'exp1',
      title: 'Agentes de IA para clientes',
      description: 'Aprimore a experiência do cliente com interações personalizadas, inteligentes e eficientes, proporcionadas pelos agentes de IA da Improve. À medida que as demandas dos clientes evoluem, entregar experiências memoráveis tornou-se essencial para líderes empresariais. Agentes de resposta fortalecem relacionamentos e elevam o engajamento, orientando os clientes a obterem as informações que precisam de forma intuitiva.',
      icon: HeadCircuit,
      iconColor: 'text-[#FF610B]',
      link: '/agentes-inteligentes'
    },
    {
      id: 'exp2',
      title: 'Agentes de IA para funcionários',
      description: 'Aprimore a experiência do cliente com interações personalizadas, inteligentes e eficientes, proporcionadas pelos agentes de IA da Improve. À medida que as demandas dos clientes evoluem, entregar experiências memoráveis tornou-se essencial para líderes empresariais. Action Agents otimizam tempo e simplificam interações, resolvendo questões rapidamente e reduzindo o tempo médio de resolução.',
      icon: Brain,
      iconColor: 'text-[#FF610B]',
      link: '/agentes-inteligentes'
    }
  ];

  return (
    <section id="solucoes" className="w-full bg-white pt-12 sm:pt-16 md:pt-24 pb-24 sm:pb-32 md:pb-48">
      <div className="mx-auto px-4 sm:px-6 lg:px-[40px]">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="mb-8 sm:mb-10 text-center">
            <h2 className="text-[#1E1E1E] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-clash font-bold mb-3 sm:mb-4">
              Agentes de IA para clientes
            </h2>
            <p className="text-[#4A5568] text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto font-ibm">
              Aprimore a experiência do cliente com interações personalizadas, inteligentes e eficientes, proporcionadas pelos agentes de IA da Improve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-[#f7f8fb] rounded-[20px] p-8 sm:p-10 border border-[#E2E8F0]"
                >
                  <Icon size={32} className={card.iconColor} />
                  <h3 className="text-[#1E1E1E] text-lg sm:text-xl font-clash font-bold mt-4 mb-2 sm:mb-3">
                    {card.title}
                  </h3>
                  <p className="text-[#4A5568] text-sm sm:text-base font-ibm mb-4">
                    {card.description}
                  </p>
                  <Link 
                    to={card.link}
                    className="inline-block text-[#FF610B] font-ibm text-sm sm:text-base hover:underline"
                  >
                    Ver mais
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="font-clash text-xl sm:text-2xl md:text-3xl font-bold text-[#1E1E1E] mb-4 sm:mb-6">
                Pronto para revolucionar seu atendimento?
              </h3>
              <motion.button
                onClick={openContactModal}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#FF610B] text-white font-ibm text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-[#e65709] transition-colors duration-300"
              >
                Entrar em contato
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 