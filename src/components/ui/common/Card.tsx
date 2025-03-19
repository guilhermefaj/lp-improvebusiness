import { motion } from 'framer-motion';
import { CardProps } from '../../../types/components';

export function Card({ title, description, icon, className = '' }: CardProps) {
  return (
    <motion.div
      className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow ${className}`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      {icon && (
        <div className="mb-4">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
} 