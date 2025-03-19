import { LayoutProps } from '../../types/components';
import { Header } from './Header';
import { Footer } from './Footer';

export function RootLayout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
} 