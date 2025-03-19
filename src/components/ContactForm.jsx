import { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeSimple, User, Phone, Buildings } from '@phosphor-icons/react';
import { z } from 'zod';
import { sendContactEmail } from '../services/email';

const formSchema = z.object({
  name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(10, 'Telefone inválido'),
  company: z.string().min(2, 'Nome da empresa deve ter pelo menos 2 caracteres'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres')
});

export function ContactForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Limpa o erro do campo quando o usuário começa a digitar
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setSubmitMessage('');

    try {
      // Valida os dados do formulário
      formSchema.parse(formData);

      // Envia o email
      const result = await sendContactEmail(formData);

      if (!result.success) {
        throw new Error(result.error || 'Erro ao enviar mensagem');
      }

      // Limpa o formulário
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
      setStatus('success');
      setSubmitMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.');

      // Fecha o modal após 2 segundos
      setTimeout(() => {
        if (onClose) {
          onClose();
        }
      }, 2000);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors = {};
        error.errors.forEach(err => {
          newErrors[err.path[0]] = err.message;
        });
        setErrors(newErrors);
        setStatus('error');
        setSubmitMessage('Por favor, corrija os erros no formulário.');
      } else {
        setStatus('error');
        setSubmitMessage('Erro ao enviar mensagem. Tente novamente mais tarde.');
      }
    }
  };

  return (
    <div className="w-full bg-white p-8">
      <h2 className="text-2xl md:text-3xl font-clash font-bold text-[#1E1E1E] mb-6">
        Entre em Contato
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Seu nome"
              className={`w-full pl-12 pr-4 py-3 rounded-lg border ${
                errors.name ? 'border-red-500' : 'border-gray-200'
              } focus:outline-none focus:ring-2 focus:ring-[#FF610B] focus:border-transparent`}
            />
          </div>
          {errors.name && (
            <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
          )}
        </div>

        <div>
          <div className="relative">
            <EnvelopeSimple className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Seu email"
              className={`w-full pl-12 pr-4 py-3 rounded-lg border ${
                errors.email ? 'border-red-500' : 'border-gray-200'
              } focus:outline-none focus:ring-2 focus:ring-[#FF610B] focus:border-transparent`}
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div>
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Seu telefone"
              className={`w-full pl-12 pr-4 py-3 rounded-lg border ${
                errors.phone ? 'border-red-500' : 'border-gray-200'
              } focus:outline-none focus:ring-2 focus:ring-[#FF610B] focus:border-transparent`}
            />
          </div>
          {errors.phone && (
            <p className="mt-1 text-red-500 text-sm">{errors.phone}</p>
          )}
        </div>

        <div>
          <div className="relative">
            <Buildings className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Sua empresa"
              className={`w-full pl-12 pr-4 py-3 rounded-lg border ${
                errors.company ? 'border-red-500' : 'border-gray-200'
              } focus:outline-none focus:ring-2 focus:ring-[#FF610B] focus:border-transparent`}
            />
          </div>
          {errors.company && (
            <p className="mt-1 text-red-500 text-sm">{errors.company}</p>
          )}
        </div>

        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Sua mensagem"
            rows={4}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.message ? 'border-red-500' : 'border-gray-200'
            } focus:outline-none focus:ring-2 focus:ring-[#FF610B] focus:border-transparent`}
          />
          {errors.message && (
            <p className="mt-1 text-red-500 text-sm">{errors.message}</p>
          )}
        </div>

        <motion.button
          type="submit"
          disabled={status === 'loading'}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-4 rounded-full font-ibm font-semibold text-white transition-colors duration-300 ${
            status === 'loading'
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-[#FF610B] hover:bg-[#e65709]'
          }`}
        >
          {status === 'loading' ? 'Enviando...' : 'Enviar mensagem'}
        </motion.button>

        {submitMessage && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-center ${
              status === 'success' ? 'text-green-600' : 'text-red-500'
            }`}
          >
            {submitMessage}
          </motion.p>
        )}
      </form>
    </div>
  );
} 