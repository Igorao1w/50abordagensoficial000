import React from 'react';
import { ShieldCheck, Trophy, Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f0f9ff] py-12 px-4 border-t border-gray-100">
      <div className="max-w-2xl mx-auto text-center">
        
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-gray-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6" />
            <span className="font-semibold text-sm">Compra<br/>Segura</span>
          </div>
          <div className="flex items-center gap-2">
            <Trophy className="w-6 h-6" />
            <span className="font-semibold text-sm">Satisfação<br/>Garantida</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="w-6 h-6" />
            <span className="font-semibold text-sm">Privacidade<br/>Protegida</span>
          </div>
        </div>

        {/* Links */}
        <div className="space-y-2 mb-8 text-[#0f3460]">
          <p className="cursor-pointer hover:underline">Termos & Condições</p>
          <p className="cursor-pointer hover:underline">Política de Privacidade</p>
          <p className="cursor-pointer hover:underline">Termos de Uso</p>
        </div>

        {/* Copyright */}
        <div className="text-[#0f3460] font-medium text-sm">
          <p>Powered By Methodos Agência! Copyright by Methodos 2021!</p>
        </div>
      </div>
    </footer>
  );
};