import React from 'react';
import { Check, Lock } from 'lucide-react';
import { Button } from './Button';

export const Deliverables: React.FC = () => {
  const scrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12 px-4 bg-[#f3ffe3]">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-extrabold text-[#0f3460] mb-8">
          O que você vai receber:
        </h2>

        <div className="space-y-4 text-[#0f3460] text-lg">
          <div className="flex items-start gap-3">
             <div className="mt-1 bg-purple-600 rounded-sm p-0.5">
                <Check className="w-4 h-4 text-white" strokeWidth={4} />
             </div>
            <p>
              <strong>Cantadas Engraçadas</strong> – Para conquistar pelo riso e quebrar o gelo sem esforço.
            </p>
          </div>

          <div className="flex items-start gap-3">
             <div className="mt-1 bg-purple-600 rounded-sm p-0.5">
                <Check className="w-4 h-4 text-white" strokeWidth={4} />
             </div>
            <p>
              <strong>Elogios Criativos</strong> – Para marcar presença e impressionar sem parecer forçado.
            </p>
          </div>

          <div className="flex items-start gap-3">
             <div className="mt-1 bg-purple-600 rounded-sm p-0.5">
                <Check className="w-4 h-4 text-white" strokeWidth={4} />
             </div>
            <p>
              <strong>Abordagens Contextuais</strong> – Para adaptar ao momento e ser mais natural.
            </p>
          </div>

          <div className="flex items-start gap-3 mt-6">
            <div className="mt-1">
                <span className="text-2xl">🔒</span>
            </div>
            <p>
              <strong>Bônus Especial:</strong> Liberação imediata de uma dos nossos campeões de venda! O Protocolo para ter assunto infinito com qualquer mulher, em qualquer local a qualquer hora!
            </p>
          </div>
        </div>

        <div className="mt-10">
          <Button href="#pricing" onClick={scrollToPricing}>
            Gostei! Quero entender!
          </Button>
        </div>
      </div>
    </section>
  );
};