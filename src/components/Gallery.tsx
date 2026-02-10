import { useEffect, useRef } from 'react';

const images = [
  'src/assets/galeria/1.png',
  'src/assets/galeria/2.png',
  'src/assets/galeria/3.png',
  'src/assets/galeria/4.png',
  'src/assets/galeria/5.png',
  'src/assets/galeria/6.png',
];

export const Gallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    let animationFrameId: number;

    const scroll = () => {
      scrollPosition += 0.5; // Velocidad del scroll

      // Cuando llegamos a la mitad (donde termina el primer set de imágenes), reseteamos
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    // Pausar el scroll cuando el usuario hace hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationFrameId);
    };

    const handleMouseLeave = () => {
      animationFrameId = requestAnimationFrame(scroll);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Duplicamos las imágenes para crear el efecto infinito
  const duplicatedImages = [...images, ...images];

  return (
    <section className="py-20 px-0 md:px-0 bg-[#FFF0F5] relative overflow-hidden" id="gallery">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif font-bold text-[#FF4D8D] inline-block relative">
          Nuestra Galería
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#4ED4E1] rounded-full"></span>
        </h2>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-hidden gap-6 px-6"
        style={{ scrollBehavior: 'auto' }}
      >
        {duplicatedImages.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[300px] h-[400px] transition-transform duration-300 hover:scale-105"
          >
            <img
              src={src}
              alt={`Gallery image ${(index % images.length) + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
