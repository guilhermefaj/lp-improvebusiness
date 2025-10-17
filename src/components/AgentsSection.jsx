import { motion } from 'framer-motion';
import { HeadCircuit, Brain } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { useContactModal } from '../contexts/ContactModalContext';

export function AgentsSection() {
  const { openContactModal } = useContactModal();

  const cards = [
    {
      id: 'exp1',
      title: 'Agentes de IA voltados para o cliente',
      description: 'Automatize interações externas de forma eficiente com fluxos inteligentes que entendem o contexto, direcionam ações e fornecem respostas imediatas.\nDesde onboarding, suporte até pré-vendas, os agentes de IA eliminam filas, reduzem tempo de resposta e melhoram a jornada do seu cliente com consistência e escala.\nIdeal para suporte, vendas, autoatendimento e canais digitais.',
      icon: HeadCircuit,
      iconColor: 'text-[#FF610B]',
      link: '/agentes-de-resposta'
    },
    {
      id: 'exp2',
      title: 'Agentes de IA voltados para equipes e processos',
      description: 'Automatize tarefas internas que consomem tempo da sua equipe — como preenchimentos, verificações, atualizações de sistemas, cruzamentos de dados e processos de aprovação.\nOs agentes de IA operam silenciosamente nos bastidores, executando rotinas com precisão e liberando seus colaboradores para atividades mais estratégicas.\nIdeal para financeiro, operações, RH, compliance, suporte técnico e mais.',
      icon: Brain,
      iconColor: 'text-[#FF610B]',
      link: '/agentes-de-acao'
    }
  ];

  return (
    <section id="solucoes" className="w-full bg-white pt-12 sm:pt-16 md:pt-24 pb-24 sm:pb-32 md:pb-48">
      <div className="mx-auto px-4 sm:px-6 lg:px-[40px]">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="mb-8 sm:mb-10 text-center">
            <h2 className="text-[#1E1E1E] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-clash font-bold mb-3 sm:mb-4">
              Automação Inteligente para Clientes, Equipes e Processos Internos
            </h2>
            <p className="text-[#4A5568] text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto font-ibm">
              Otimize jornadas, reduza esforço manual e aumente a produtividade com agentes de IA desenvolvidos sob medida para cada parte do seu negócio.
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
                  className="bg-[#f7f8fb] rounded-[20px] p-8 sm:p-10 border border-[#E2E8F0] h-full flex flex-col"
                >
                  <Icon size={32} className={card.iconColor} />
                  <h3 className="text-[#1E1E1E] text-lg sm:text-xl font-clash font-bold mt-4 mb-2 sm:mb-3">
                    {card.title}
                  </h3>
                  <p className="text-[#4A5568] text-sm sm:text-base font-ibm mb-4 whitespace-pre-line">
                    {card.description}
                  </p>
                  <Link 
                    to={card.link}
                    className="inline-block text-[#FF610B] font-ibm text-sm sm:text-base hover:underline mt-auto"
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
                Pronto para automatizar o que realmente consome tempo na sua empresa?
              </h3>
              <motion.a
                href="https://wa.me/5511936190477?text=Ol%C3%A1,%20eu%20gostaria%20de%20gerar%20um%20relat%C3%B3rio%20consultivo%20gratuito%20para%20a%20minha%20empresa."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#FF610B] text-white font-ibm text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-[#e65709] transition-colors duration-300 inline-flex items-center gap-2"
              >
                Gerar Relatório
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 