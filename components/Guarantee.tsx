import React from 'react';

export const Guarantee: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-[#f3ffe3]">
      <div className="max-w-2xl mx-auto text-center">
        <div className="relative inline-block w-48 h-48">
             <img 
                src="https://i.postimg.cc/JtwDCqx8/9s-MCGk-JE70Gr-IVjn-Duzn-YQ.webp" 
                alt="Garantia 15 dias" 
                className="w-full h-full object-contain drop-shadow-xl rounded-full"
                loading="lazy"
                decoding="async"
                width="192"
                height="192"
             />
        </div>

        <h3 className="text-2xl font-extrabold text-[#0f3460] mt-6 mb-3">
            Você tem tempo de usar no Carnaval e se não gostar, ou achar que não funciona, nós devolveremos 100% do seu dinheiro sem complicações.
        </h3>
        <h3 className="text-2xl font-extrabold text-[#0f3460] mb-3">
            Isso significa que você não tem risco.
        </h3>
        <h3 className="text-2xl font-extrabold text-[#0f3460]">
            Ou você ganha, ou você ganha.
        </h3>
      </div>
    </section>
  );
};