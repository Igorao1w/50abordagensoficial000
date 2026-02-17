import React from 'react';
import { ThumbsDown, ThumbsUp, Sparkles } from 'lucide-react';

export const Comparison: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-[#f0feff]">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-[#0f3460] mb-2">
          Esperar Nunca é
        </h2>
        <h2 className="text-3xl font-extrabold text-[#7ac70c] mb-10">
          a Melhor Opção
        </h2>

        <div className="text-left space-y-6 text-[#0f3460]">
          <div>
            <p className="font-bold flex items-center gap-2 mb-2">
              <span className="text-2xl">👎</span>
              Antes:
            </p>
            <p className="pl-9">
              Você ficava sem saber o que dizer, via outras pessoas se divertindo e terminava a noite sem um único beijo.
            </p>
          </div>

          <div>
            <p className="font-bold flex items-center gap-2 mb-2">
              <span className="text-2xl">👍</span>
              Depois:
            </p>
            <p className="pl-9">
              Você se torna um cara confiante, sabendo exatamente o que falar para abrir qualquer conversa e criar oportunidades de beijos sem parecer desesperado.
            </p>
          </div>

          <div className="pt-4 font-bold text-lg">
            <p className="flex items-start gap-2">
               <span className="text-xl text-red-500 mt-1">💥</span>
               <span>
                 <span className="text-[#0f3460]">A escolha é sua:</span> ficar assistindo ou finalmente APROVEITAR O CARNAVAL!
               </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};