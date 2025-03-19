import { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
}

export interface CardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
}

export interface FeatureCardProps extends CardProps {
  imageUrl?: string;
}

export interface ExpandableCardProps extends CardProps {
  isExpanded?: boolean;
  onToggle?: () => void;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface HeaderProps {
  navItems?: NavItem[];
}

export interface FooterProps {
  className?: string;
} 