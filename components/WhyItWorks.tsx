import React from 'react';
import { CheckSquare, Sparkles, Check, Lock } from 'lucide-react';
import { Button } from './Button';

export const WhyItWorks: React.FC = () => {
  const scrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12 px-4 bg-[#e9ffce]"> {/* Fundo verde claro conforme a imagem */}
      <div className="max-w-2xl mx-auto space-y-12">
        
        {/* Seção: Por que funciona? */}
        <div>
            <h2 className="text-4xl font-extrabold text-[#0f3460] mb-6 text-left">
              Por que funciona?
            </h2>

            <div className="space-y-4 text-[#0f3460] text-lg">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                   <CheckSquare className="w-6 h-6 text-[#4ade80] fill-[#4ade80] text-white" />
                </div>
                <p className="leading-snug">
                  Criado a partir das melhores abordagens testadas e aprovadas nos blocos de todo o Brasil!
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                   <CheckSquare className="w-6 h-6 text-[#4ade80] fill-[#4ade80] text-white" />
                </div>
                <p className="leading-snug">
                  Inspirado nas estratégias que mais funcionam na psicologia da conquista e na arte da sedução.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                   <CheckSquare className="w-6 h-6 text-[#4ade80] fill-[#4ade80] text-white" />
                </div>
                <p className="leading-snug">
                  Simples, prático e direto ao ponto: sem enrolação, apenas o que realmente dá resultado.
                </p>
              </div>

              <div className="flex items-start gap-3 font-medium">
                <div className="mt-1 flex-shrink-0">
                   <Sparkles className="w-6 h-6 text-red-500 fill-red-500" />
                </div>
                <p className="leading-snug">
                  Funciona para qualquer situação: seja em bloquinhos, festas ou na rua.
                </p>
              </div>
            </div>
        </div>

        {/* Seção: O que você vai receber */}
        <div>
            <h2 className="text-4xl font-extrabold text-[#0f3460] mb-6 text-left">
              O que você vai receber:
            </h2>

            <div className="space-y-4 text-[#0f3460] text-lg">
              <div className="flex items-start gap-3">
                 <div className="mt-1 flex-shrink-0">
                    <Check className="w-6 h-6 text-[#7c3aed] stroke-[4]" />
                 </div>
                <p className="leading-snug">
                  <strong>Cantadas Engraçadas</strong> – Para conquistar pelo riso e quebrar o gelo sem esforço.
                </p>
              </div>

              <div className="flex items-start gap-3">
                 <div className="mt-1 flex-shrink-0">
                    <Check className="w-6 h-6 text-[#7c3aed] stroke-[4]" />
                 </div>
                <p className="leading-snug">
                  <strong>Elogios Criativos</strong> – Para marcar presença e impressionar sem parecer forçado.
                </p>
              </div>

              <div className="flex items-start gap-3">
                 <div className="mt-1 flex-shrink-0">
                    <Check className="w-6 h-6 text-[#7c3aed] stroke-[4]" />
                 </div>
                <p className="leading-snug">
                  <strong>Abordagens Contextuais</strong> – Para adaptar ao momento e ser mais natural.
                </p>
              </div>

              <div className="flex items-start gap-3 mt-6">
                <div className="mt-1 flex-shrink-0">
                    <Lock className="w-6 h-6 text-orange-400 fill-orange-400 text-white" />
                </div>
                <p className="leading-snug">
                  <strong>Bônus Especial:</strong> Liberação imediata de uma dos nossos campeões de venda! O Protocolo para ter assunto infinito com qualquer mulher!
                </p>
              </div>
            </div>

            {/* Botão de Ação */}
            <div className="mt-10">
              <Button href="#pricing" onClick={scrollToPricing}>
                Gostei! Quero entender!
              </Button>
            </div>
        </div>

      </div>
    </section>
  );
};