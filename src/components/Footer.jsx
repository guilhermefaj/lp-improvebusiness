import { motion } from 'framer-motion';
import { EnvelopeSimple, MapPin, InstagramLogo, LinkedinLogo, GlobeSimple } from '@phosphor-icons/react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#1E1E1E] text-white">
      <div className="mx-auto px-4 md:px-6 lg:px-[40px]">
        <div className="w-full max-w-[1360px] mx-auto py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
            {/* Coluna 1 - Logo e Descrição */}
            <div className="space-y-6">
              <img 
                src="https://f005.backblazeb2.com/file/improvebusinessai/logo.svg" 
                alt="ImproveAI Logo" 
                className="h-16 w-auto max-w-full shrink-0 object-contain"
              />
              <p className="text-white/80 font-ibm text-base leading-relaxed">
                Transformando o atendimento ao cliente com IA avançada. Soluções inteligentes para empresas que buscam excelência.
              </p>
            </div>

            {/* Coluna 2 - Links Rápidos */}
            <div>
              <h4 className="font-clash text-lg font-bold mb-6">Links Rápidos</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#home" className="text-white/80 hover:text-white transition-colors duration-300 font-ibm">
                    Home
                  </a>
                </li>
                <li>
                  <a 
                    href="https://improve.business/Sobre/sobre-nos" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white/80 hover:text-white transition-colors duration-300 font-ibm"
                  >
                    Sobre nós
                  </a>
                </li>
                <li>
                  <a href="#solucoes" className="text-white/80 hover:text-white transition-colors duration-300 font-ibm">
                    Soluções
                  </a>
                </li>
                <li>
                  <a href="#contato" className="text-white/80 hover:text-white transition-colors duration-300 font-ibm">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna 3 - Contato */}
            <div>
              <h4 className="font-clash text-lg font-bold mb-6">Contato</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-white/80">
                  <EnvelopeSimple size={20} />
                  <a href="mailto:contato@improve.business" className="hover:text-white transition-colors duration-300 font-ibm">
                    contato@improve.business
                  </a>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <MapPin size={20} className="mt-1" />
                  <span className="font-ibm">
                    Av. Paulista, 1000 - Bela Vista<br />
                    São Paulo - SP, 01310-100
                  </span>
                </li>
              </ul>
            </div>

            {/* Coluna 4 - Redes Sociais */}
            <div>
              <h4 className="font-clash text-lg font-bold mb-6">Redes Sociais</h4>
              <div className="flex gap-4">
                <motion.a
                  href="https://www.instagram.com/improve.businesss/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                >
                  <InstagramLogo size={20} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/company/improveassessoria/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                >
                  <LinkedinLogo size={20} />
                </motion.a>
                <motion.a
                  href="https://improve.business"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                >
                  <GlobeSimple size={20} />
                </motion.a>
              </div>
            </div>
          </div>

          {/* Linha divisória */}
          <div className="w-full h-[1px] bg-white/10 my-8" />

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm font-ibm">
            <p>© {currentYear} ImproveAI. Todos os direitos reservados. improvebusiness.ai faz parte do grupo Improve Business (improve.business).</p>
            <div className="flex gap-6">
              <a href="/politica-e-termos" className="hover:text-white transition-colors duration-300">
                Política de Privacidade
              </a>
              <a href="/politica-e-termos" className="hover:text-white transition-colors duration-300">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 