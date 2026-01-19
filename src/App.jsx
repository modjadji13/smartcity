import React, { useState } from 'react';
import { useScroll } from './hooks/useScroll';
import './styles/main.css'; // Import the extracted CSS

// Components
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import Footer from './components/layout/Footer';
import DownloadModal from './components/ui/DownloadModal';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  
  // Custom Hook
  const scrolled = useScroll(20);

  // Handlers
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const openDownload = () => setShowDownloadModal(true);
  const closeDownload = () => setShowDownloadModal(false);

  return (
    <div className="font-sans bg-white text-slate-900 min-h-screen flex flex-col antialiased selection:bg-blue-600 selection:text-white overflow-x-hidden">
      
      <Navbar 
        scrolled={scrolled} 
        isOpen={isMenuOpen} 
        onToggle={toggleMenu} 
        onDownload={openDownload} 
      />

      <main>
        <Hero onDownload={openDownload} />
        <Features />
      </main>

      <Footer />

      {showDownloadModal && (
        <DownloadModal onClose={closeDownload} />
      )}
      
    </div>
  );
}
