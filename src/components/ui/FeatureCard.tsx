import { FeatureCardProps } from '../../types/components';
import { Card } from './common/Card';

export function FeatureCard({ title, description, imageUrl, className = '', icon }: FeatureCardProps) {
  return (
    <Card
      title={title}
      description={description}
      icon={
        imageUrl ? (
          <img
            src={imageUrl}
            alt=""
            className="w-12 h-12 object-contain"
            loading="lazy"
          />
        ) : icon
      }
      className={`hover:border-primary border-2 border-transparent ${className}`}
    />
  );
} 