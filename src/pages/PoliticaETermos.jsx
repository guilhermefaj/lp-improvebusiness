import React, { useLayoutEffect, useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function PoliticaETermos() {
  useLayoutEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  const [activeTab, setActiveTab] = useState('politica');

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 w-full">
        <div className="pt-[96px] sm:pt-[104px] md:pt-[112px]">
          <section className="w-full bg-white py-16 md:py-24">
            <div className="max-w-[1000px] mx-auto px-4 md:px-6 lg:px-[40px]">
              <div className="flex flex-col items-center mb-8 md:mb-12">
                <h1 className="text-[#1E1E1E] text-3xl md:text-4xl font-clash font-bold text-center mb-6">
                  Política de Privacidade e Termos de Uso
                </h1>
                <div className="flex items-center gap-3 bg-[#F7F8FB] p-2 rounded-full">
                  <button
                    onClick={() => setActiveTab('politica')}
                    className={`px-5 py-2 rounded-full text-sm md:text-base font-ibm transition-colors ${activeTab === 'politica' ? 'bg-white text-[#1E1E1E] shadow-sm' : 'text-[#4A5568]'}`}
                    aria-selected={activeTab === 'politica'}
                    role="tab"
                  >
                    Política de Privacidade
                  </button>
                  <button
                    onClick={() => setActiveTab('termos')}
                    className={`px-5 py-2 rounded-full text-sm md:text-base font-ibm transition-colors ${activeTab === 'termos' ? 'bg-white text-[#1E1E1E] shadow-sm' : 'text-[#4A5568]'}`}
                    aria-selected={activeTab === 'termos'}
                    role="tab"
                  >
                    Termos de Uso
                  </button>
                </div>
              </div>

              {activeTab === 'politica' ? (
                <article className="prose max-w-none text-[#1E1E1E] font-ibm">
                  <h2 className="font-clash text-2xl md:text-3xl">Compromisso com a Privacidade</h2>
                  <p>
                    A Improve Business AI (improvebusiness.ai), parte do grupo Improve Business (improve.business),
                    desenvolve soluções personalizadas em automação e inteligência artificial para empresas. Respeitamos
                    a privacidade e protegemos os dados pessoais conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD).
                  </p>

                  <h3 className="font-clash text-xl md:text-2xl">Dados que Podemos Tratar</h3>
                  <ul>
                    <li>Dados de contato: nome, e-mail, telefone, empresa e cargo.</li>
                    <li>Dados de uso do site: IP, dispositivo, navegador, páginas acessadas e interações.</li>
                    <li>Dados operacionais: informações necessárias para implementar e monitorar soluções contratadas.</li>
                  </ul>

                  <h3 className="font-clash text-xl md:text-2xl">Bases Legais e Finalidades</h3>
                  <ul>
                    <li>Execução de contrato e procedimentos preliminares (art. 7º, V): implantação e suporte das soluções.</li>
                    <li>Legítimo interesse (art. 7º, IX): aprimoramento de serviços, segurança, prevenção a fraudes.</li>
                    <li>Consentimento (art. 7º, I): comunicações de marketing e newsletters.</li>
                    <li>Cumprimento de obrigação legal/regulatória (art. 7º, II): guarda de registros, defesa em processos.</li>
                  </ul>

                  <h3 className="font-clash text-xl md:text-2xl">Compartilhamento</h3>
                  <p>
                    Compartilhamos dados com provedores essenciais à operação (hospedagem, e-mail, analytics, segurança),
                    parceiros do grupo Improve Business e, quando aplicável, com clientes contratantes das soluções (controladores).
                    Exigimos contratos e medidas de segurança adequadas, inclusive em transferências internacionais.
                  </p>

                  <h3 className="font-clash text-xl md:text-2xl">Segurança e Retenção</h3>
                  <p>
                    Adotamos medidas técnicas e administrativas de segurança proporcionais ao risco. Mantemos dados apenas pelo
                    tempo necessário às finalidades ou conforme exigido por lei. Implementamos controles de acesso, criptografia
                    quando aplicável e monitoramento contínuo.
                  </p>

                  <h3 className="font-clash text-xl md:text-2xl">Direitos do Titular</h3>
                  <ul>
                    <li>Confirmação e acesso; correção; anonimização, bloqueio ou eliminação; portabilidade; informação sobre compartilhamento; revogação do consentimento.</li>
                    <li>Para exercer direitos, contate: <a href="mailto:contato@improve.business" className="text-[#FF610B] underline">contato@improve.business</a>.</li>
                  </ul>

                  <h3 className="font-clash text-xl md:text-2xl">Cookies e Tecnologias de Rastreamento</h3>
                  <p>
                    Utilizamos cookies essenciais e, com consentimento, analíticos/marketing. Você pode gerenciar preferências
                    pelo navegador e por banners de consentimento quando aplicável.
                  </p>

                  <p className="text-sm text-[#4A5568]">Última atualização: {new Date().toLocaleDateString()}</p>
                </article>
              ) : (
                <article className="prose max-w-none text-[#1E1E1E] font-ibm">
                  <h2 className="font-clash text-2xl md:text-3xl">Termos de Uso</h2>
                  <p>
                    Estes Termos regulam o uso do site e a contratação de soluções da Improve Business AI. Ao acessar nossos serviços,
                    você concorda com estas condições.
                  </p>

                  <h3 className="font-clash text-xl md:text-2xl">Uso Aceitável</h3>
                  <ul>
                    <li>Não utilize os serviços para atividades ilícitas, violação de direitos ou engenharia reversa.</li>
                    <li>Respeite a segurança e a integridade dos sistemas de terceiros integrados pelas nossas soluções.</li>
                  </ul>

                  <h3 className="font-clash text-xl md:text-2xl">Propriedade Intelectual</h3>
                  <p>
                    O conteúdo, marcas e tecnologias exibidos são protegidos por direitos autorais e de propriedade intelectual.
                    Nenhuma licença é concedida sem autorização expressa.
                  </p>

                  <h3 className="font-clash text-xl md:text-2xl">Isenções e Limitação de Responsabilidade</h3>
                  <ul>
                    <li>Serviços “como estão”, sem garantias de disponibilidade ininterrupta.</li>
                    <li>Responsabilidade limitada a valores efetivamente pagos no período contratual, nos limites legais.</li>
                  </ul>

                  <h3 className="font-clash text-xl md:text-2xl">Dados e Conformidade</h3>
                  <p>
                    Em projetos para clientes, atuamos como operador ou controlador conjunto, conforme o caso, seguindo a LGPD.
                    Estabelecemos contratos com cláusulas de proteção de dados, confidencialidade e segurança da informação.
                  </p>

                  <h3 className="font-clash text-xl md:text-2xl">Suspensão e Encerramento</h3>
                  <p>
                    Podemos suspender o acesso em casos de violação destes Termos, riscos de segurança ou descumprimento legal.
                  </p>

                  <h3 className="font-clash text-xl md:text-2xl">Foro e Legislação</h3>
                  <p>Aplica-se a legislação brasileira; foro da Comarca de São Paulo/SP.</p>

                  <p className="text-sm text-[#4A5568]">Última atualização: {new Date().toLocaleDateString()}</p>
                </article>
              )}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}


