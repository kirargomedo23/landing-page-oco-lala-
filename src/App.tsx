
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MessageCircle } from 'lucide-react';

import './App.css';
import { Footer } from './components/Footer';
import { MenuSection } from './components/MenuSection';
import INFO from './data/const';


function App() {
  const phone = INFO.PHONE_LINK;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      <MenuSection />
      <Footer />

      <a href={`https://wa.me/${phone}?text=Hola%20quiero%20hacer%20un%20pedido`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="Whatsapp" className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50">
        <MessageCircle fill="currentColor" />
      </a>
    </div>
  );
}

export default App;