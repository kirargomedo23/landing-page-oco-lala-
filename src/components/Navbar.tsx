
export const Navbar = () => {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="flex justify-between items-center px-6 md:px-20 py-4 sticky top-0 bg-white/90 backdrop-blur-sm z-50">
      <div className="flex items-center gap-3">
        <a href="/" className="flex items-center gap-3 no-underline">
          <div className="w-12 h-12 rounded-full bg-[#FF4D8D] flex items-center justify-center text-white text-lg font-bold shadow-lg ring-4 ring-white">
            O
          </div>
          <div className="text-[#FF4D8D] font-extrabold text-2xl md:text-3xl italic tracking-wide select-none">Oco LALA</div>
        </a>
      </div>
      <div className="hidden md:flex gap-10 text-[13px] font-medium text-gray-500">
        <a href="#" className="hover:text-pink-500 transition-colors">Inicio</a>
        <a onClick={scrollToMenu} className="hover:text-pink-500 cursor-pointer transition-colors">Menú</a>
        <a onClick={scrollToGallery} className="hover:text-pink-500 cursor-pointer transition-colors">Galería</a>
        <a onClick={scrollToContact} className="hover:text-pink-500  cursor-pointer transition-colors">Contacto</a>
      </div>
    </nav>
  )
}