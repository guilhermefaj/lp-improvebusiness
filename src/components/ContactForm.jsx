import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeSimple, User, Phone, Buildings } from '@phosphor-icons/react';
import { z } from 'zod';
import useWeb3Forms from '@web3forms/react';

// Obtendo a chave de acesso da variável de ambiente de forma segura
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || process.env.WEB3FORMS_ACCESS_KEY || '';

// Validação do formulário
const formSchema = z.object({
  name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(10, 'Telefone inválido').max(15, 'Telefone muito longo'),
  company: z.string().min(2, 'Nome da empresa deve ter pelo menos 2 caracteres'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres').max(500, 'Mensagem muito longa')
});

const formatPhone = (value) => {
  // Remove tudo que não é número
  const numbers = value.replace(/\D/g, '');
  
  // Aplica a máscara (XX) XXXXX-XXXX
  if (numbers.length <= 11) {
    return numbers.replace(/(\d{2})(\d{0,5})(\d{0,4})/, (_, ddd, first, second) => {
      if (second) return `(${ddd}) ${first}-${second}`;
      if (first) return `(${ddd}) ${first}`;
      if (ddd) return `(${ddd}`;
      return '';
    });
  }
  
  return value.slice(0, 15);
};

export function ContactForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const botcheckRef = useRef("");  // Referência para o campo botcheck

  useEffect(() => {
    // Detectar se é dispositivo móvel
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Verificar inicialmente
    checkMobile();
    
    // Adicionar listener para redimensionamento
    window.addEventListener('resize', checkMobile);
    
    // Limpar listener
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Log para debug - removendo exposição da chave
  useEffect(() => {
    console.log("Modo dispositivo:", isMobile ? "Mobile" : "Desktop");
    console.log("API Key configurada:", WEB3FORMS_ACCESS_KEY ? "Sim" : "Não");
    
    // Verificar se há problemas com a chave no carregamento
    if (!WEB3FORMS_ACCESS_KEY) {
      console.warn("Chave de API Web3Forms não encontrada. Verifique o arquivo .env");
    }
  }, [isMobile]);

  // Configuração do Web3Forms
  const { submit } = useWeb3Forms({
    access_key: WEB3FORMS_ACCESS_KEY,
    settings: {
      from_name: 'Formulário ImproveAI',
      subject: 'Nova mensagem do site ImproveAI',
      botcheck: true,
    },
    onSuccess: (message, data) => {
      console.log("Sucesso no envio:", message);
      setSubmitStatus({ 
        type: 'success', 
        message: 'Mensagem enviada com sucesso! Em breve entraremos em contato.' 
      });
      // Limpar formulário após sucesso
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
      setTimeout(() => {
        onClose();
      }, 3000);
    },
    onError: (message, data) => {
      console.error('Erro no formulário Web3Forms:', message, data);
      
      // Verificar se o erro está relacionado à chave de API
      if (message && message.toLowerCase().includes("api key")) {
        setSubmitStatus({
          type: 'error',
          message: 'Erro de configuração no formulário. Por favor, entre em contato pelo email contato@improve.business.'
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: 'Não foi possível enviar sua mensagem. Por favor, tente novamente mais tarde ou entre em contato diretamente pelo email contato@improve.business.'
        });
      }
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Aplica a máscara apenas para o campo de telefone
    const formattedValue = name === 'phone' ? formatPhone(value) : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: formattedValue
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      console.log("Iniciando envio do formulário");
      console.log("Dados do formulário:", JSON.stringify(formData));
      
      // Verifica se a chave API está configurada
      if (!WEB3FORMS_ACCESS_KEY) {
        console.error("Erro de configuração: Chave API do Web3Forms não encontrada");
        setSubmitStatus({ 
          type: 'error', 
          message: 'Erro de configuração no formulário. Por favor, entre em contato pelo email contato@improve.business.' 
        });
        throw new Error("API key não configurada");
      }
      
      // Validando os dados com Zod antes de enviar
      const validation = formSchema.safeParse(formData);
      
      if (!validation.success) {
        const error = validation.error.issues[0];
        console.error("Erro de validação:", error);
        setSubmitStatus({ 
          type: 'error', 
          path: error.path[0],
          message: error.message 
        });
        throw new Error(error.message);
      }

      // Preparando dados para envio
      const submitData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        message: formData.message,
        botcheck: botcheckRef.current,
        'h-captcha-response': '',
        subject: `Contato de ${formData.name} - ${formData.company}`,
        replyTo: formData.email,
        from_name: formData.name,
        from_origin: window.location.href,
        device: isMobile ? 'mobile' : 'desktop',
        user_agent: navigator.userAgent
      };

      console.log("Dados a serem enviados:", JSON.stringify(submitData));

      // Enviando dados usando Web3Forms
      await submit(submitData);

    } catch (error) {
      console.error('Erro detalhado ao enviar formulário:', error);
      if (!submitStatus) {
        setSubmitStatus({ 
          type: 'error', 
          message: 'Não foi possível enviar sua mensagem agora. Por favor, tente novamente mais tarde.' 
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-white p-4 sm:p-6 md:p-8 overflow-y-auto max-h-[90vh] md:max-h-[80vh]">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-clash font-bold text-[#1E1E1E] mb-4 sm:mb-6">
        Entre em Contato
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        {/* Campo oculto para botcheck */}
        <input 
          type="checkbox" 
          name="botcheck" 
          className="hidden" 
          onChange={(e) => botcheckRef.current = e.target.value}
          style={{ display: 'none' }} 
        />

        <div>
          <div className="relative">
            <User className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Seu nome"
              className={`w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-lg border text-sm sm:text-base ${
                submitStatus && submitStatus.type === 'error' && submitStatus.path === 'name' ? 'border-red-500' : 'border-gray-200'
              } focus:outline-none focus:ring-2 focus:ring-[#FF610B] focus:border-transparent`}
            />
          </div>
          {submitStatus && submitStatus.type === 'error' && submitStatus.path === 'name' && (
            <p className="mt-1 text-red-500 text-xs sm:text-sm">{submitStatus.message}</p>
          )}
        </div>

        <div>
          <div className="relative">
            <EnvelopeSimple className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Seu email"
              className={`w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-lg border text-sm sm:text-base ${
                submitStatus && submitStatus.type === 'error' && submitStatus.path === 'email' ? 'border-red-500' : 'border-gray-200'
              } focus:outline-none focus:ring-2 focus:ring-[#FF610B] focus:border-transparent`}
            />
          </div>
          {submitStatus && submitStatus.type === 'error' && submitStatus.path === 'email' && (
            <p className="mt-1 text-red-500 text-xs sm:text-sm">{submitStatus.message}</p>
          )}
        </div>

        <div>
          <div className="relative">
            <Phone className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Seu telefone"
              className={`w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-lg border text-sm sm:text-base ${
                submitStatus && submitStatus.type === 'error' && submitStatus.path === 'phone' ? 'border-red-500' : 'border-gray-200'
              } focus:outline-none focus:ring-2 focus:ring-[#FF610B] focus:border-transparent`}
            />
          </div>
          {submitStatus && submitStatus.type === 'error' && submitStatus.path === 'phone' && (
            <p className="mt-1 text-red-500 text-xs sm:text-sm">{submitStatus.message}</p>
          )}
        </div>

        <div>
          <div className="relative">
            <Buildings className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Sua empresa"
              className={`w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-lg border text-sm sm:text-base ${
                submitStatus && submitStatus.type === 'error' && submitStatus.path === 'company' ? 'border-red-500' : 'border-gray-200'
              } focus:outline-none focus:ring-2 focus:ring-[#FF610B] focus:border-transparent`}
            />
          </div>
          {submitStatus && submitStatus.type === 'error' && submitStatus.path === 'company' && (
            <p className="mt-1 text-red-500 text-xs sm:text-sm">{submitStatus.message}</p>
          )}
        </div>

        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Sua mensagem"
            rows={3}
            className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border text-sm sm:text-base ${
              submitStatus && submitStatus.type === 'error' && submitStatus.path === 'message' ? 'border-red-500' : 'border-gray-200'
            } focus:outline-none focus:ring-2 focus:ring-[#FF610B] focus:border-transparent`}
          />
          <div className="flex justify-between items-center mt-1">
            <span className="text-xs sm:text-sm text-gray-500">
              {formData.message.length} / 500 caracteres
            </span>
            {submitStatus && submitStatus.type === 'error' && submitStatus.path === 'message' && (
              <p className="text-red-500 text-xs sm:text-sm">{submitStatus.message}</p>
            )}
          </div>
        </div>

        {submitStatus && submitStatus.type && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-3 sm:p-4 rounded-lg ${
              submitStatus.type === 'success' 
                ? 'bg-green-100 text-green-700 border border-green-200' 
                : 'bg-red-100 text-red-700 border border-red-200'
            }`}
          >
            <div className="flex items-center">
              {submitStatus.type === 'success' ? (
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              )}
              <span className="text-xs sm:text-sm">{submitStatus.message}</span>
            </div>
          </motion.div>
        )}

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-3 sm:py-4 rounded-full font-ibm font-semibold text-white transition-colors duration-300 text-sm sm:text-base ${
            isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#FF610B] hover:bg-[#e65709]'
          }`}
        >
          {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
        </motion.button>
        
        <div className="text-center text-[10px] sm:text-xs text-gray-400 mt-2 sm:mt-4">
          Protegido por Web3Forms. Não enviamos spam.
        </div>
      </form>
    </div>
  );
} 