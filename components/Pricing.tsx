import React from 'react';
import { CheckCircle2, Flame } from 'lucide-react';
import { Button } from './Button';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-8 px-4 bg-[#f3ffe3]">
      <div className="max-w-xl mx-auto">
        {/* Pricing Card Wrapper to mimic the rounded border effect */}
        <div className="border border-[#7ac70c] rounded-3xl p-5 bg-[#f7fee7] relative shadow-sm">
            
            {/* Price Header */}
            <div className="mb-5">
                {/* Previous Price Section */}
                <div className="flex flex-col mb-1">
                    <h3 className="text-[#555] font-bold text-4xl line-through decoration-4 decoration-[#555] opacity-80">R$17</h3>
                    <p className="text-[#666] text-sm font-medium mt-1">
                        Primeiros 100 compradores
                    </p>
                </div>

                {/* Current Price Section */}
                <div className="mt-4">
                    <h3 className="text-[#0f3460] font-extrabold text-6xl tracking-tight">R$27</h3>
                    <p className="text-gray-500 text-sm leading-snug mt-3 max-w-sm">
                        De 09 a 11 de fevereiro o valor será R$37. A partir de 11 de fevereiro, R$47.
                    </p>
                </div>
            </div>

            {/* Offer Highlight */}
            <div className="mb-5">
                <div className="flex items-center gap-2 mb-1">
                     <span className="text-lg">🔥</span>
                     <h4 className="text-[#0f3460] font-bold text-lg uppercase">OFERTA</h4>
                </div>
                <h4 className="text-[#0f3460] font-bold text-xl uppercase leading-tight">
                    ESPECIAL DE PRÉ-CARNAVAL <span className="text-lg">🔥</span>
                </h4>
                <p className="text-gray-500 text-base mt-2 leading-snug">
                    Estilo aprimorado com seleções exclusivas da coleção.
                </p>
            </div>

            {/* Features List in Card */}
            <div className="space-y-3 mb-6">
                {[
                    "Acesso imediato sem burocracia",
                    "Material prático e aplicável",
                    "Garantia incondicional de 15 dias",
                    "Bônus para ter assunto infinito com qualquer mulher"
                ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                        <div className="bg-[#0f3460]/10 rounded-full p-0.5 mt-0.5 min-w-[20px] min-h-[20px] flex items-center justify-center">
                            <CheckCircle2 className="w-4 h-4 text-[#0f3460]" />
                        </div>
                        <span className="text-gray-600 text-base">{item}</span>
                    </div>
                ))}
            </div>

            {/* Button */}
            <div className="mt-6">
                <Button href="https://www.ggcheckout.com/checkout/v5/9iTPHd41yCaJ2VRUxIlE" className="w-full text-lg py-3 bg-[#7ac70c] hover:bg-[#6ab30a] shadow-lg">
                    COMPRAR AGORA
                </Button>
            </div>
        </div>

        {/* Guarantee Badge Section */}
        <div className="mt-12 text-center">
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
      </div>
    </section>
  );
};