import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { rateLimit } from './lib/rate-limit';

const limiter = rateLimit({
  interval: 60 * 1000, // 60 segundos
  uniqueTokenPerInterval: 500 // Máximo de tokens únicos por intervalo
});

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const url = request.nextUrl;

  // Configuração de headers de segurança
  const securityHeaders = {
    'X-DNS-Prefetch-Control': 'on',
    'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
    'X-Frame-Options': 'SAMEORIGIN',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    'X-XSS-Protection': '1; mode=block',
    'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_APP_URL || '*',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Security-Policy': `
      default-src 'self';
      img-src 'self' data: https://res.cloudinary.com;
      script-src 'self' 'unsafe-inline';
      style-src 'self' 'unsafe-inline';
      font-src 'self' data:;
      connect-src 'self' ${process.env.NEXT_PUBLIC_APP_URL};
    `.replace(/\s+/g, ' ').trim()
  };

  // Aplicar headers de segurança
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  // Rate Limiting apenas para proteção contra DDoS
  if (url.pathname.startsWith('/api')) {
    try {
      await limiter.check(response, 50, request.ip || '127.0.0.1'); // 50 requests por minuto
    } catch {
      return new NextResponse('Too Many Requests', { status: 429 });
    }
  }

  return response;
} 