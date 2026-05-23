import { useState } from 'react';
import HubHero from './components/HubHero';
import HubOverview from './components/HubOverview';
import HubResources from './components/HubResources';
import HubWearable from './components/HubWearable';
import HubTeam from './components/HubTeam';
import HubCTA from './components/HubCTA';
import PrototypeNotice from './components/PrototypeNotice';
import SimulationNotice from './components/SimulationNotice';
import TechnicalDocs from './components/TechnicalDocs';
import PitchPresentation from './components/PitchPresentation';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'notice' | 'simNotice' | 'docs' | 'presentation'>('home');

  if (currentPage === 'notice') {
    return (
      <div className="min-h-screen">
        <PrototypeNotice 
          onBack={() => setCurrentPage('home')} 
          onOpenSimNotice={() => setCurrentPage('simNotice')}
          onOpenDocs={() => setCurrentPage('docs')}
        />
      </div>
    );
  }

  if (currentPage === 'simNotice') {
    return (
      <div className="min-h-screen">
        <SimulationNotice 
          onBack={() => setCurrentPage('home')} 
          onOpenDocs={() => setCurrentPage('docs')}
        />
      </div>
    );
  }

  if (currentPage === 'docs') {
    return (
      <div className="min-h-screen animate-fade-in">
        <TechnicalDocs onBack={() => setCurrentPage('home')} />
      </div>
    );
  }

  if (currentPage === 'presentation') {
    return (
      <div className="min-h-screen animate-fade-in">
        <PitchPresentation onBack={() => setCurrentPage('home')} />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <main className="flex flex-col gap-24 font-sans">
        <HubHero />
        <HubOverview />
        <HubResources 
          onOpenNotice={() => setCurrentPage('notice')} 
          onOpenSimNotice={() => setCurrentPage('simNotice')} 
          onOpenDocs={() => setCurrentPage('docs')}
          onOpenPresentation={() => setCurrentPage('presentation')}
        />
        <HubWearable />
        <HubTeam />
        <HubCTA />
      </main>
    </div>
  );
}

