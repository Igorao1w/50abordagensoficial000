import React from 'react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  const scrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-[#7ac70c] p-4 md:p-6 pb-8">
      {/* Inner Card Container to create the "bordered" effect */}
      <div className="bg-[#f0feff] rounded-[2rem] p-6 md:p-10 max-w-2xl mx-auto shadow-2xl text-center space-y-6">
        
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#0f3460] leading-tight tracking-tight">
          BEIJE A MULHER QUE QUISER <span className="text-[#7ac70c]">NESTE CARNAVAL</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed">
          <span className="underline decoration-1 underline-offset-4">Quer pegar várias neste Carnaval?</span> As 50 melhores abordagens para pegar qualquer mulher!! Não espere o carnaval acabar para ter acesso!
        </p>

        <div className="py-2 w-full">
            <Button href="#pricing" onClick={scrollToPricing} fullWidth className="text-xl py-5 shadow-lg">
            ACESSAR AGORA!
            </Button>
        </div>

        <div className="mt-8 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
          <img 
            src="https://i.postimg.cc/T3L79YLL/WQ6o4XSMa-UGDg-YTrwx-SQ.webp" 
            alt="Casal se beijando no carnaval" 
            className="w-full h-auto object-cover"
            fetchPriority="high"
            width="800"
            height="450"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};