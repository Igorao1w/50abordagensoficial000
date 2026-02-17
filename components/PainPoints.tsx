import React from 'react';
import { MinusCircle, Pin } from 'lucide-react';
import { Button } from './Button';

export const PainPoints: React.FC = () => {
  const scrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-extrabold text-[#0f3460] mb-8 text-left">
          Já aconteceu com você?
        </h2>

        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <MinusCircle className="w-6 h-6 text-[#ff4d6d] mt-1 flex-shrink-0 fill-[#ff4d6d] text-white" />
            <p className="text-[#0f3460] text-lg">
              Você vê aquela mulher incrível no bloco, mas não sabe o que dizer...
            </p>
          </div>

          <div className="flex items-start gap-3">
            <MinusCircle className="w-6 h-6 text-[#ff4d6d] mt-1 flex-shrink-0 fill-[#ff4d6d] text-white" />
            <p className="text-[#0f3460] text-lg">
              Solta um "Oi, tudo bem?" e recebe um sorriso sem graça (ou pior, nada)...
            </p>
          </div>

          <div className="flex items-start gap-3">
            <MinusCircle className="w-6 h-6 text-[#ff4d6d] mt-1 flex-shrink-0 fill-[#ff4d6d] text-white" />
            <p className="text-[#0f3460] text-lg">
              Fica observando os outros caras levando as melhores garotas enquanto você só assiste...
            </p>
          </div>
        </div>

        <div className="mt-8 mb-6">
          <h3 className="font-bold text-[#0f3460] text-xl uppercase">CHEGA DISSO!</h3>
        </div>

        <div className="text-[#0f3460] space-y-4 text-lg">
          <p>
            O Carnaval é o momento perfeito para aumentar a sua lista de contatos e beijar MUITO. Mas se você não souber o que falar e como se destacar, pode acabar indo pra casa sozinho.
          </p>
          
          <div className="flex items-start gap-2 font-medium">
            <Pin className="w-6 h-6 text-[#e11d48] flex-shrink-0 rotate-45" />
            <span className="underline">A boa notícia?</span>
          </div>
          
          <p>
            Agora você tem um atalho para aumentar suas chances de sucesso!
          </p>
        </div>

        <div className="mt-8">
          <Button href="#pricing" onClick={scrollToPricing}>
            Gostei! Quero entender!
          </Button>
        </div>
      </div>
    </section>
  );
};