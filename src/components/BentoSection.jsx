import { motion, AnimatePresence } from 'framer-motion';
import { HeadCircuit, Clock, Brain } from '@phosphor-icons/react';
import { useState } from 'react';
import { AgentsSection } from './AgentsSection';
import { Footer } from './Footer';

export function BentoSection() {
  return (
    <>
      <section className="w-full bg-[#f7f8fb] pt-8 sm:pt-12 md:pt-16 lg:pt-24 pb-16 sm:pb-20 md:pb-24 lg:pb-32">
        <div className="mx-auto px-4 sm:px-6 lg:px-[40px]">
          <div className="w-full max-w-[1360px] mx-auto">
            <div className="mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-[#1E1E1E] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-clash font-bold mb-3 sm:mb-4">
                IA que Elimina Gargalos e Escala sua Operação
              </h2>
              <p className="text-[#4A5568] text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl font-ibm mb-4">
                Nossos agentes inteligentes automatizam processos estratégicos da sua empresa, reduzindo custos operacionais e aumentando a eficiência — sem depender de interações humanas.
              </p>
              <p className="text-[#4A5568] text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl font-ibm">
                De tarefas administrativas a fluxos críticos de produção, criamos soluções sob medida para o que mais consome tempo e energia na sua operação.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 auto-rows-auto">
              {/* Item 1 - Voice and Chat AI */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-[#fefefe] rounded-[20px] h-full"
              >
                <div className="p-6 sm:p-8 md:p-[40px] flex flex-col h-full text-left">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mb-4 sm:mb-6"
                  >
                    <HeadCircuit size={48} className="text-[#FF610B] sm:w-12 sm:h-12 md:w-16 md:h-16" />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="font-clash text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#1E1E1E]"
                  >
                    Automação de Processos Repetitivos
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-[#4A5568] font-ibm text-sm sm:text-base leading-relaxed"
                  >
                    IA que executa rotinas administrativas, operacionais e financeiras. Elimine tarefas manuais como lançamentos, verificações e aprovações. A IA assume etapas com regras claras, reduzindo erros e ganhando velocidade.
                  </motion.p>
                </div>
              </motion.div>

              {/* Item 2 - 24/7 Service */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-[#fefefe] rounded-[20px] h-full"
              >
                <div className="p-6 sm:p-8 md:p-[40px] flex flex-col h-full text-left">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mb-4 sm:mb-6"
                  >
                    <Clock size={48} className="text-[#6833FF] sm:w-12 sm:h-12 md:w-16 md:h-16" />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="font-clash text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#1E1E1E]"
                  >
                    Operações Ininterruptas (24h/7)
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-[#4A5568] font-ibm text-sm sm:text-base leading-relaxed"
                  >
                    Fluxos que funcionam sozinhos — dia e noite. Mesmo sem ninguém online, seus processos continuam rodando: envio de relatórios, atualização de sistemas, cruzamento de dados e muito mais.
                  </motion.p>
                </div>
              </motion.div>

              {/* Item 3 - Language Support */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-[#fefefe] rounded-[20px] h-full sm:row-span-2 lg:row-span-2"
              >
                <div className="p-6 sm:p-8 md:p-[40px] flex flex-col h-full text-left">
                  <motion.h2
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="font-clash text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-[#1abcfe]"
                  >
                    100+
                  </motion.h2>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="font-clash text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#1E1E1E]"
                  >
                    Integração entre Sistemas
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="text-[#4A5568] font-ibm text-sm sm:text-base leading-relaxed"
                  >
                    IA que conecta plataformas e toma decisões automáticas. Pare de copiar e colar dados entre sistemas. Criamos automações que integram CRMs, ERPs, bancos de dados e qualquer outra ferramenta do seu stack.
                  </motion.p>
                </div>
              </motion.div>

              {/* Item 4 - Always Learning */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-[#fefefe] rounded-[20px] h-full sm:col-span-2 lg:col-span-2"
              >
                <div className="p-6 sm:p-8 md:p-[40px] flex flex-col h-full text-left">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-4 sm:mb-6"
                  >
                    <Brain size={48} className="text-[#0acf83] sm:w-12 sm:h-12 md:w-16 md:h-16" />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    viewport={{ once: true }}
                    className="font-clash text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#1E1E1E]"
                  >
                    Aprendizado Contínuo com Dados Reais
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    viewport={{ once: true }}
                    className="text-[#4A5568] font-ibm text-sm sm:text-base leading-relaxed"
                  >
                    Automação que evolui com base no comportamento do seu negócio. Nossos agentes são configurados para aprender com padrões e ajustes. Quanto mais rodarem, mais inteligentes e eficientes se tornam.
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <AgentsSection />

      <Footer />
    </>
  );
} 