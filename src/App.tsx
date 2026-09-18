import React, { useState } from 'react';
import { BragHeader } from './components/BragHeader';
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
    <div className="min-h-screen bg-brag-orange text-brag-ink font-sans antialiased selection:bg-black selection:text-brag-accent">
      {/* 1. Hero with Big Typography, Video & Terminal Stack (matching latent-spaces/brag) */}
      <BragHeader onOpenContact={() => setContactOpen(true)} />

      {/* 2. Gallery with 2-Column Dark Bento Grid & Striped CTA Card */}
      <main>
        <BragGallery
          projects={projects}
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenContact={() => setContactOpen(true)}
        />

        {/* 3. Dedicated Open-Source Flutter Package Section */}
        <BragPackageSection />
      </main>

      {/* 4. Bold Orange Outro & Colophon */}
      <BragOutro onOpenContact={() => setContactOpen(true)} />

      {/* 5. Interactive Architecture & Multi-Screenshot Inspector Modal */}
      <BragProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* 6. Quick Contact Drawer */}
      <BragContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </div>
  );
}

export default App;
