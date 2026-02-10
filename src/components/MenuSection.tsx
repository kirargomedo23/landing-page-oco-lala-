 
import menuData from '../data/menu';
import { MenuCard } from './MenuCard';

 

export const MenuSection = () => (
  <section className="py-20 px-6 max-w-6xl mx-auto" id="menu">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-serif font-bold text-[#FF4D8D] inline-block relative">
        Nuestro Menú
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#4ED4E1] rounded-full"></span>
      </h2>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
      {menuData.map((item, idx) => (
        <MenuCard key={idx} {...item} />
      ))}
    </div>
  </section>
);