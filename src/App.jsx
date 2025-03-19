import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MultiAgentSection } from './components/MultiAgentSection';
import { ClientsSection } from './components/ClientsSection';
import { FeaturesSection } from './components/FeaturesSection';
import { BentoSection } from './components/BentoSection';

function App() {
    return (
        <div className="min-h-screen bg-white flex flex-col overflow-x-hidden">
            <Header />
            <Hero />
            <MultiAgentSection />
            <FeaturesSection />
            <ClientsSection />
            <BentoSection />
        </div>
    );
}

export default App; 