'use client';

const TerminalCard = () => {
  return (
    // Alterado para md:flex-[2] ou usar flex-1 para crescer junto com o layout
    <div className="bg-[#111318] border border-zinc-700 rounded-2xl overflow-hidden w-[70vw] md:w-full md:flex-1">
      {/* topo terminal */}
      <div className="bg-[#1a1d24] border-b border-zinc-700 px-4 py-1 flex items-center justify-between">
        <div className="flex items-center gap-2 text-zinc-400 text-sm">
          <span>{'< >'}</span>
        </div>

        <div className="bg-white text-black text-xs px-4 rounded-sm w-30 md:w-80 text-center">
          localhost:3000
        </div>

        <div className="flex items-center gap-3 text-zinc-400">
          <span>—</span>
          <span>□</span>
          <span>✕</span>
        </div>
      </div>

      {/* conteúdo */}
      <div
        className="
        px-6 py-4 text-white font-light text-[13px]
        leading-7
        md:text-[16px] xl:text-[18px]
        md:leading-6 xl:leading-7"
      >
        <p>
          Sou desenvolvedor Fullstack apaixonado por tecnologia, interfaces
          modernas e soluções criativas.
        </p>

        <br />

        <p>
          Atualmente foco em Front-end, Back-end e experiência do usuário,
          criando projetos reais e evoluindo constantemente.
        </p>

        <br />

        <p>
          Também possuo experiência em suporte técnico, o que fortaleceu minha
          visão prática sobre sistemas e usuários.
        </p>

        <div className="mt-1 text-center text-sm text-zinc-500">
          T.Robert © {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
};

export default TerminalCard;
