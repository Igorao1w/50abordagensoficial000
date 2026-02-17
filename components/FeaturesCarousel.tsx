import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Diamond } from 'lucide-react';
import { Button } from './Button';

const slides = [
  "https://i.postimg.cc/QCCkd0cB/gm-KK6FLEuhy7j4cwi-HAw.webp",
  "https://i.postimg.cc/28PFCdyk/Rw-QRBTZx-G0C26Vm-Xo-Jcg3Q.webp",
  "https://i.postimg.cc/25x4dPwj/c9Pk5lj-Dh-Er-DNNJic38GQ.webp",
  "https://i.postimg.cc/kg380nYX/Jcr-Mx5dp-EGRp-Bb-ZOb8Q.webp"
];

export const FeaturesCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () => setCurrent((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12 px-4 bg-[#f3ffe3] overflow-hidden">
      <div className="max-w-2xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-8 relative">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f3460] leading-tight mx-auto max-w-lg relative z-10">
               <span className="text-4xl absolute -left-4 -top-6 transform -rotate-12">🎭</span>
               50 Abordagens Infalíveis para Beijar no Carnaval
               <span className="text-4xl absolute -bottom-2 -left-2 transform rotate-12">🎭</span>
            </h2>
        </div>

        {/* Carousel Layout: Arrow - Image - Arrow */}
        <div className="flex items-center justify-center gap-2 md:gap-6 mb-8">
          
          {/* Left Arrow */}
          <button 
            type="button"
            onClick={prev}
            className="p-2 text-black hover:bg-black/5 rounded-full transition-colors focus:outline-none"
            aria-label="Anterior"
          >
            <ChevronLeft size={40} strokeWidth={1.5} />
          </button>

          {/* Image Display */}
          <div className="relative w-full max-w-[280px] md:max-w-[320px] aspect-[9/16] bg-transparent flex items-center justify-center">
             <div className="w-full h-full relative">
                {/* Key forces re-render for animation */}
                <img 
                  key={current}
                  src={slides[current]} 
                  alt={`Exemplo de conversa ${current + 1}`} 
                  className="w-full h-full object-contain drop-shadow-2xl animate-fade-slide"
                  loading="lazy"
                  decoding="async"
                  width="280"
                  height="498"
                />
             </div>
          </div>

          {/* Right Arrow */}
          <button 
            type="button"
            onClick={next}
            className="p-2 text-black hover:bg-black/5 rounded-full transition-colors focus:outline-none"
            aria-label="Próximo"
          >
            <ChevronRight size={40} strokeWidth={1.5} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-4 mb-10">
            {slides.map((_, idx) => (
              <button 
                type="button"
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3.5 h-3.5 rounded-full border border-black transition-all duration-300 ${
                  idx === current ? 'bg-black' : 'bg-transparent'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
        </div>

        {/* Features List */}
        <div className="space-y-4 text-[#0f3460] text-lg max-w-lg mx-auto px-2">
          <div className="flex items-start gap-3">
            <Diamond className="w-5 h-5 text-blue-600 mt-1.5 flex-shrink-0 fill-blue-600" />
            <p className="font-medium leading-snug">50 cantadas prontas para já chegar chegando e desenrolar logo de cara</p>
          </div>
          <div className="flex items-start gap-3">
            <Diamond className="w-5 h-5 text-blue-600 mt-1.5 flex-shrink-0 fill-blue-600" />
            <p className="font-medium leading-snug">Divididas em categorias para facilitar ainda mais a identificação do contexto certo</p>
          </div>
        </div>

        <div className="mt-10 px-2">
            <Button className="w-full shadow-lg" href="#pricing" onClick={scrollToPricing}>
                Acessar agora!
            </Button>
        </div>
      </div>
      
      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-slide {
          animation: fadeSlide 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>
    </section>
  );
};