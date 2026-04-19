import React from "react";
import Image from "next/image"; // Importante para otimização!

export default function Hero() {
  return (
    <section className="relative w-full bg-[#EBF8FF] py-16 md:py-24 overflow-hidden z-0">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 items-center gap-12">
        
        {/* Texto e Botão à Esquerda */}
        <div className="z-10 text-center md:text-left">
          <h1 className="text-[#1A365D] text-5xl lg:text-6xl font-black leading-tight">
            Sua Casa Brilhando,<br /> 
            <span className="text-[#3182CE]">Mais Leveza!</span>
          </h1>
          <p className="text-[#1A365D]/80 mt-6 text-lg max-w-md mx-auto md:mx-0">
            A tecnologia que você precisa para uma limpeza profunda e rápida. Experimente nossa linha premium de amaciantes!
          </p>
          <button className="mt-10 bg-[#3182CE] text-white px-10 py-4 rounded-full font-black hover:bg-[#1A365D] transition-all shadow-lg shadow-[#3182CE]/30">
            COMPRAR AGORA
          </button>
        </div>
        
        {/* Imagem Real à Direita */}
        <div className="flex justify-center md:justify-end relative h-[350px] md:h-[450px]">
          {/* Fundo decorativo sutil (opcional) */}
          <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-white rounded-full opacity-40 blur-3xl z-0"></div>

          {/* O componente Image do Next.js carrega e otimiza sua imagem */}
          <Image 
            src="/amacianteshero.png" // Caminho relativo à pasta public/
            alt="Linha Premium de Amaciantes CleanClick"
            width={700} // Largura original da imagem
            height={500} // Altura original da imagem
            priority // Diz ao Next para carregar essa imagem o mais rápido possível
            className="object-contain z-10 drop-shadow-2xl" // Sombras projetadas dão profundidade
          />
        </div>

      </div>
    </section>
  );
}