interface MenuCardProps {
  title: string;
  price: number | string;
  description: string;
  image: string;
  buttonText?: string;
}

export const MenuCard = ({ title, price, description, image, buttonText = "Pedir" }: MenuCardProps) => (
  <div className="bg-white rounded-[2.5rem] p-5 shadow-sm border border-pink-50 flex flex-col items-center text-center transition-transform hover:scale-105">
    <div className="w-full aspect-square bg-gray-50 rounded-3xl mb-4 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="flex justify-between w-full mb-2 px-1 items-center">
      <h3 className="font-bold text-gray-800 text-lg">{title}</h3>
      <span className="text-pink-500 font-extrabold text-xl whitespace-nowrap">S/ {price}</span>
    </div>
    <p className="text-gray-400 text-[11px] mb-5 leading-relaxed h-10 overflow-hidden">
      {description}
    </p> 
  </div>
);