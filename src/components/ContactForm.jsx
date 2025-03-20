import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeSimple, User, Phone, Buildings, CheckCircle, Warning } from '@phosphor-icons/react';
import { z } from 'zod';

// Chave de acesso da Web3Forms
const WEB3FORMS_ACCESS_KEY = "7302a07f-6708-4ce9-86eb-38780c6249fd";

// Schema de validação unificado
const formSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(8, 'Telefone inválido').max(15, 'Telefone muito longo'),
  company: z.string().min(2, 'Nome da empresa deve ter pelo menos 2 caracteres'),
  message: z.string().min(5, 'Mensagem deve ter pelo menos 5 caracteres').max(500, 'Mensagem muito longa')
});

// Formatar telefone com máscara brasileira
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

// Logger simples
const logInfo = (message, data) => {
  console.log(`📨 ${message}`, data);
};

export function ContactForm({ onClose, onMobileFormFailure }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const [failureCount, setFailureCount] = useState(0);

  // Detectar se é dispositivo móvel
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Monitorar número de falhas para dispositivos móveis
  useEffect(() => {
    if (failureCount >= 2 && isMobile && onMobileFormFailure) {
      onMobileFormFailure();
    }
  }, [failureCount, isMobile, onMobileFormFailure]);

  // Fechar o formulário após sucesso
  useEffect(() => {
    if (isSuccess && onClose) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [isSuccess, onClose]);

  // Handler para atualização dos campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Remove erro do campo quando usuário começa a editar
    if (fieldErrors[name]) {
      setFieldErrors(prev => ({ ...prev, [name]: '' }));
    }
    
    // Limpa mensagem de erro geral quando usuário interage com o form
    if (errorMessage) {
      setErrorMessage('');
    }
    
    // Aplica a máscara apenas para o campo de telefone
    const formattedValue = name === 'phone' ? formatPhone(value) : value;
    
    setFormData(prev => ({ ...prev, [name]: formattedValue }));
  };

  // Enviar formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Evita múltiplas submissões
    if (isSubmitting || isSuccess) return;
    
    setIsSubmitting(true);
    setErrorMessage('');
    setFieldErrors({});
    
    try {
      // Validar formulário
      const validationResult = formSchema.safeParse(formData);
      
      if (!validationResult.success) {
        // Mapear erros para os campos específicos
        const errors = {};
        validationResult.error.issues.forEach(issue => {
          errors[issue.path[0]] = issue.message;
        });
        
        setFieldErrors(errors);
        throw new Error('Formulário com erros de validação');
      }
      
      logInfo('Enviando formulário', {
        formData,
        device: isMobile ? 'mobile' : 'desktop',
        userAgent: navigator.userAgent,
        url: window.location.href
      });
      
      // Preparar dados para envio
      const submitData = {
        access_key: WEB3FORMS_ACCESS_KEY,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        message: formData.message,
        subject: `Contato de ${formData.name} - ${formData.company}`,
        from_name: "Site ImproveAI"
      };
      
      // Enviar dados via fetch API
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(submitData)
      });
      
      const responseData = await response.json();
      
      logInfo('Resposta da API', { responseData, status: response.status });
      
      if (responseData.success) {
        // Sucesso no envio
        setIsSuccess(true);
        
        // Resetar o formulário
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        });
      } else {
        // Erro retornado pela API
        throw new Error(responseData.message || 'Erro ao enviar o formulário');
      }
    } catch (error) {
      logInfo('Erro na submissão', { 
        error: error.toString(),
        userAgent: navigator.userAgent,
        online: navigator.onLine,
        isMobile
      });
      
      // Incrementar contador de falhas
      if (isMobile) {
        setFailureCount(prev => prev + 1);
      }
      
      // Exibir mensagem de erro (apenas se não for erro de validação de campo)
      if (Object.keys(fieldErrors).length === 0) {
        setErrorMessage(
          'Não foi possível enviar sua mensagem. Por favor, tente novamente ou entre em contato diretamente pelo email contato@improve.business.'
        );
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
        {/* Campo Nome */}
        <div>
          <div className="relative">
            <User className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Seu nome"
              disabled={isSubmitting || isSuccess}
              className={`w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-lg border text-sm sm:text-base ${
                fieldErrors.name ? 'border-red-500' : 'border-gray-200'
              } focus:outline-none focus:ring-2 focus:ring-[#FF610B] focus:border-transparent`}
            />
          </div>
          {fieldErrors.name && (
            <p className="mt-1 text-red-500 text-xs sm:text-sm">{fieldErrors.name}</p>
          )}
        </div>

        {/* Campo Email */}
        <div>
          <div className="relative">
            <EnvelopeSimple className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Seu email"
              disabled={isSubmitting || isSuccess}
              className={`w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-lg border text-sm sm:text-base ${
                fieldErrors.email ? 'border-red-500' : 'border-gray-200'
              } focus:outline-none focus:ring-2 focus:ring-[#FF610B] focus:border-transparent`}
            />
          </div>
          {fieldErrors.email && (
            <p className="mt-1 text-red-500 text-xs sm:text-sm">{fieldErrors.email}</p>
          )}
        </div>

        {/* Campo Telefone */}
        <div>
          <div className="relative">
            <Phone className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Seu telefone"
              disabled={isSubmitting || isSuccess}
              className={`w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-lg border text-sm sm:text-base ${
                fieldErrors.phone ? 'border-red-500' : 'border-gray-200'
              } focus:outline-none focus:ring-2 focus:ring-[#FF610B] focus:border-transparent`}
            />
          </div>
          {fieldErrors.phone && (
            <p className="mt-1 text-red-500 text-xs sm:text-sm">{fieldErrors.phone}</p>
          )}
        </div>

        {/* Campo Empresa */}
        <div>
          <div className="relative">
            <Buildings className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Sua empresa"
              disabled={isSubmitting || isSuccess}
              className={`w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-lg border text-sm sm:text-base ${
                fieldErrors.company ? 'border-red-500' : 'border-gray-200'
              } focus:outline-none focus:ring-2 focus:ring-[#FF610B] focus:border-transparent`}
            />
          </div>
          {fieldErrors.company && (
            <p className="mt-1 text-red-500 text-xs sm:text-sm">{fieldErrors.company}</p>
          )}
        </div>

        {/* Campo Mensagem */}
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Sua mensagem"
            rows={3}
            disabled={isSubmitting || isSuccess}
            className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border text-sm sm:text-base ${
              fieldErrors.message ? 'border-red-500' : 'border-gray-200'
            } focus:outline-none focus:ring-2 focus:ring-[#FF610B] focus:border-transparent`}
          />
          <div className="flex justify-between items-center mt-1">
            <span className="text-xs sm:text-sm text-gray-500">
              {formData.message.length} / 500 caracteres
            </span>
            {fieldErrors.message && (
              <p className="text-red-500 text-xs sm:text-sm">{fieldErrors.message}</p>
            )}
          </div>
        </div>

        {/* Mensagem de Erro */}
        {errorMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3 sm:p-4 rounded-lg bg-red-100 text-red-700 border border-red-200"
          >
            <div className="flex items-center">
              <Warning className="w-4 h-4 sm:w-5 sm:h-5 mr-2" weight="fill" />
              <span className="text-xs sm:text-sm">{errorMessage}</span>
            </div>
          </motion.div>
        )}

        {/* Mensagem de Sucesso */}
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3 sm:p-4 rounded-lg bg-green-100 text-green-700 border border-green-200"
          >
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" weight="fill" />
              <span className="text-xs sm:text-sm">
                Mensagem enviada com sucesso! Em breve entraremos em contato.
              </span>
            </div>
          </motion.div>
        )}

        {/* Botão de Submissão */}
        <motion.button
          type="submit"
          disabled={isSubmitting || isSuccess}
          whileHover={{ scale: isSubmitting || isSuccess ? 1 : 1.02 }}
          whileTap={{ scale: isSubmitting || isSuccess ? 1 : 0.98 }}
          className={`w-full py-3 sm:py-4 rounded-full font-ibm font-semibold text-white transition-colors duration-300 text-sm sm:text-base ${
            isSuccess 
              ? 'bg-green-500 cursor-not-allowed'
              : isSubmitting 
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-[#FF610B] hover:bg-[#e65709]'
          }`}
        >
          {isSuccess 
            ? 'Enviado com sucesso!' 
            : isSubmitting 
              ? 'Enviando...' 
              : 'Enviar mensagem'}
        </motion.button>
        
        {/* Rodapé do Formulário */}
        <div className="text-center text-[10px] sm:text-xs text-gray-400 mt-2 sm:mt-4">
          Protegido por Web3Forms. Não enviamos spam.
        </div>
      </form>
    </div>
  );
} 