import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeSimple, User, Phone, Buildings } from '@phosphor-icons/react';
import { z } from 'zod';
import { sendEmail } from '../services/email';

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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await sendEmail(formData);
      
      if (result.error) {
        setSubmitStatus({ type: 'error', message: 'Não foi possível enviar sua mensagem agora. Por favor, tente novamente mais tarde.' });
        return;
      }

      setSubmitStatus({ type: 'success', message: 'Mensagem enviada com sucesso!' });
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Ocorreu um erro. Por favor, tente novamente.' });
    } finally {
      setIsSubmitting(false);
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
                submitStatus && submitStatus.type === 'error' && submitStatus.path === 'name' ? 'border-red-500' : 'border-gray-200'
              } focus:outline-none focus:ring-2 focus:ring-[#FF610B] focus:border-transparent`}
            />
          </div>
          {submitStatus && submitStatus.type === 'error' && submitStatus.path === 'name' && (
            <p className="mt-1 text-red-500 text-sm">{submitStatus.message}</p>
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
                submitStatus && submitStatus.type === 'error' && submitStatus.path === 'email' ? 'border-red-500' : 'border-gray-200'
              } focus:outline-none focus:ring-2 focus:ring-[#FF610B] focus:border-transparent`}
            />
          </div>
          {submitStatus && submitStatus.type === 'error' && submitStatus.path === 'email' && (
            <p className="mt-1 text-red-500 text-sm">{submitStatus.message}</p>
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
                submitStatus && submitStatus.type === 'error' && submitStatus.path === 'phone' ? 'border-red-500' : 'border-gray-200'
              } focus:outline-none focus:ring-2 focus:ring-[#FF610B] focus:border-transparent`}
            />
          </div>
          {submitStatus && submitStatus.type === 'error' && submitStatus.path === 'phone' && (
            <p className="mt-1 text-red-500 text-sm">{submitStatus.message}</p>
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
                submitStatus && submitStatus.type === 'error' && submitStatus.path === 'company' ? 'border-red-500' : 'border-gray-200'
              } focus:outline-none focus:ring-2 focus:ring-[#FF610B] focus:border-transparent`}
            />
          </div>
          {submitStatus && submitStatus.type === 'error' && submitStatus.path === 'company' && (
            <p className="mt-1 text-red-500 text-sm">{submitStatus.message}</p>
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
              submitStatus && submitStatus.type === 'error' && submitStatus.path === 'message' ? 'border-red-500' : 'border-gray-200'
            } focus:outline-none focus:ring-2 focus:ring-[#FF610B] focus:border-transparent`}
          />
          {submitStatus && submitStatus.type === 'error' && submitStatus.path === 'message' && (
            <p className="mt-1 text-red-500 text-sm">{submitStatus.message}</p>
          )}
        </div>

        {submitStatus && (
          <div className={`p-3 rounded-md ${
            submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            {submitStatus.message}
          </div>
        )}

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-4 rounded-full font-ibm font-semibold text-white transition-colors duration-300 ${
            isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#FF610B] hover:bg-[#e65709]'
          }`}
        >
          {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
        </motion.button>
      </form>
    </div>
  );
} 