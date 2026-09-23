import React, { useState } from 'react';
import { BragHeader } from './components/BragHeader';
import { BragCraftSection } from './components/BragCraftSection';
import { BragGallery } from './components/BragGallery';
import { BragPackageSection } from './components/BragPackageSection';
import { BragOutro } from './components/BragOutro';
import { BragProjectModal } from './components/BragProjectModal';
import { BragContactModal } from './components/BragContactModal';
import { projects } from './data/portfolioData';
import { Project } from './types/portfolio';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [contactOpen, setContactOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-brag-hero text-brag-ink font-sans antialiased selection:bg-black selection:text-brag-accent w-full max-w-full overflow-x-hidden">
      {/* 1. Hero with Big Typography, Video & Terminal Stack */}
      <BragHeader onOpenContact={() => setContactOpen(true)} />

      <main className="w-full max-w-full overflow-x-hidden">
        {/* 2. Dedicated Craft & Engineering Principles Section */}
        <BragCraftSection />

        {/* 3. Gallery with 2-Column Dark Bento Grid & Striped CTA Card */}
        <BragGallery
          projects={projects}
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenContact={() => setContactOpen(true)}
        />

        {/* 4. Dedicated Open-Source Flutter Package Section */}
        <BragPackageSection />
      </main>

      {/* 5. Toned-Down Outro & Colophon */}
      <BragOutro onOpenContact={() => setContactOpen(true)} />

      {/* 6. Interactive Architecture & Multi-Screenshot Inspector Modal */}
      <BragProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* 7. Quick Contact Drawer */}
      <BragContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </div>
  );
}

export default App;
