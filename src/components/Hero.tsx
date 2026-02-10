 
export const Hero = () => {
  
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
  <section className="relative bg-[#FFF0F5] pt-12 pb-20 px-6 md:px-20 overflow-hidden"> 
    <div className="absolute inset-0 opacity-20 pointer-events-none" 
         style={{ background: 'repeating-conic-gradient(from 0deg, #FFB6C1 0deg 15deg, transparent 15deg 30deg)' }}>
    </div>
    
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center relative z-10">
      <div className="flex-1 text-center md:text-left">
        <span className="text-[#2CBAC7] font-bold text-[11px] tracking-widest uppercase">¡Lo más dulce de Sausal!</span>
        <h1 className="text-5xl md:text-[85px] font-serif font-black text-[#FF4D8D] leading-[0.9] mt-6 mb-8">
          Está bien <br /> darse un <br /> <span className="italic font-normal text-[#4ED4E1]">Gustito</span>
        </h1>
        <p className="text-gray-500 text-sm md:text-base max-w-[300px] mb-10 leading-relaxed">
          Frappes cremosos, crepes irresistibles y las mini donas más divertidas te esperan en Oco LALA.
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <button onClick={scrollToMenu} className="bg-[#FF4D8D] text-white px-8 py-3 rounded-full font-bold text-sm shadow-lg shadow-pink-200">Ver la Carta</button>
          <a href="https://maps.app.goo.gl/w6sBtvF1B3mmLJuP6" target="_blank" rel="noopener noreferrer" className="border-2 border-pink-200 text-[#FF4D8D] px-8 py-3 rounded-full font-bold text-sm bg-white">
            Ubicación
            </a>
        </div>
      </div>
      
      <div className="flex-1 mt-12 md:mt-0 relative">
        <div className="bg-white p-4 rounded-[2rem] shadow-2xl rotate-2 max-w-[320px] mx-auto border-8 border-white">
          <img src="https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=500" alt="Frappe" className="rounded-2xl w-full" />
          <div className="absolute -top-4 -right-4 bg-[#4ED4E1] text-white w-14 h-14 rounded-full flex items-center justify-center font-bold border-4 border-white shadow-lg">
            S/ 12
          </div>
          <div className="absolute -bottom-4 -left-4 bg-white p-2 rounded-xl shadow-md">
            <div className="flex text-yellow-400">{'★'.repeat(5)}</div>
            <p className="text-[10px] font-bold text-gray-700">¡El favorito de todos!</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};