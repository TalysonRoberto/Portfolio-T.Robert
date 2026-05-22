'use client';

import { useMemo, useEffect, useState } from 'react';

export default function BackgroundGrid() {
  const [isClient, setIsClient] = useState(false);
  const horizontalGlows = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => {
      const top = `${(i + 1) * 12.5}%`;
      return (
        <div
          key={`h-glow-${i}`}
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
          style={{ top }}
        />
      );
    });
  }, []);

  // Garante que as partículas só renderizam no cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-gradient-to-br from-[#0a0a0f] via-[#110E12] to-[#0a0a0f]">
      {/* GRID XADREZ DE FUNDO */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #c084fc 1px, transparent 1px),
            linear-gradient(to bottom, #c084fc 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* GLOW PRINCIPAL - CENTRO */}
      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[800px]
          h-[800px]
          bg-purple-600/10
          rounded-full
          blur-[150px]
        "
      />

      {/* GLOW SECUNDÁRIO - CANTOS ESTRATÉGICOS */}
      <div
        className="
          absolute
          top-[5%]
          left-[5%]
          w-[400px]
          h-[400px]
          bg-violet-700/10
          rounded-full
          blur-[100px]
        "
      />

      <div
        className="
          absolute
          bottom-[5%]
          right-[5%]
          w-[450px]
          h-[450px]
          bg-fuchsia-600/10
          rounded-full
          blur-[120px]
        "
      />

      <div
        className="
          absolute
          top-[30%]
          right-[15%]
          w-[300px]
          h-[300px]
          bg-indigo-700/10
          rounded-full
          blur-[90px]
        "
      />

      <div
        className="
          absolute
          bottom-[20%]
          left-[10%]
          w-[350px]
          h-[350px]
          bg-purple-800/10
          rounded-full
          blur-[100px]
        "
      />

      {/* LINHAS HORIZONTAIS DE LUZ */}
      {horizontalGlows}

      {/* PARTÍCULAS DINÂMICAS - SÓ RENDERIZA NO CLIENTE */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 40 }).map((_, i) => {
            const randomLeft = `${Math.random() * 100}%`;
            const randomTop = `${Math.random() * 100}%`;
            const duration = 10 + Math.random() * 20;
            const delay = Math.random() * 5;

            return (
              <div
                key={`particle-${i}`}
                className="absolute w-[2px] h-[2px] bg-purple-400/40 rounded-full"
                style={{
                  left: randomLeft,
                  top: randomTop,
                  animation: `float ${duration}s linear infinite`,
                  animationDelay: `${delay}s`,
                }}
              />
            );
          })}
        </div>
      )}

      {/* NOISE TEXTURIZADO */}
      <div
        className="
          absolute inset-0
          opacity-[0.03]
          mix-blend-soft-light
          pointer-events-none
        "
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
        }}
      />

      {/* VINHETA MAIS SUTIL */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-t from-[#0a0a0f] via-transparent to-[#0a0a0f]/50
          pointer-events-none
        "
      />

      {/* ESCURECIMENTO NAS BORDAS */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(ellipse_at_center,transparent_40%,#0a0a0f_100%)]
          pointer-events-none
        "
      />

      {/* STYLE PARA ANIMAÇÃO DAS PARTÍCULAS */}
      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0px) translateX(0px);
              opacity: 0;
            }
            10% {
              opacity: 0.6;
            }
            90% {
              opacity: 0.6;
            }
            100% {
              transform: translateY(-100px) translateX(50px);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
}
