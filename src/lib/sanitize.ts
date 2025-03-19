import DOMPurify from 'isomorphic-dompurify';
import { escape } from 'html-escaper';

export function sanitizeInput(input: string): string {
  // Primeiro escapa caracteres HTML
  const escaped = escape(input);
  // Depois sanitiza contra XSS
  return DOMPurify.sanitize(escaped);
}

export function sanitizeHTML(html: string): string {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br'],
    ALLOWED_ATTR: ['href', 'target', 'rel'],
  });
}

export function sanitizeObject<T extends object>(obj: T): T {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (typeof value === 'string') {
      return { ...acc, [key]: sanitizeInput(value) };
    }
    if (typeof value === 'object' && value !== null) {
      return { ...acc, [key]: sanitizeObject(value) };
    }
    return { ...acc, [key]: value };
  }, {} as T);
}

// Validador de URLs
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

// Sanitizador de URLs
export function sanitizeUrl(url: string): string {
  if (!url) return '';
  
  const sanitized = sanitizeInput(url);
  return isValidUrl(sanitized) ? sanitized : '';
} 