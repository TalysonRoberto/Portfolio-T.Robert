'use client';
import { JetBrains_Mono } from 'next/font/google';

const jetbrains = JetBrains_Mono({
  subsets: ['Sans Code'],
  weight: ['400', '500', '700'],
});

const CodeCard = () => {
  return (
    // Adicionado md:flex-1 para fazer o card esticar e ocupar o espaço restante
    <div
      className="bg-[#111318] border border-zinc-700 rounded-2xl 
      px-4 md:px-6 
      py-4 
      w-[70vw] md:w-full md:flex-1
      h-full
    "
    >
      <div className="flex gap-2 mb-3">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>

      <pre
        className={`
        leading-5 md:leading-7
        text-[11px] md:text-[16px] xl:text-[18px] 
        whitespace-pre-wrap break-words ${jetbrains.className}`}
      >
        <span className="text-purple-500">class</span>{' '}
        <span className="text-yellow-400">DevProfile</span> {'{'}
        {'\n  '}
        <span className="text-yellow-500">String nome</span> =
        <span className="text-green-400"> "Talyson Roberto"</span>;{'\n  '}
        <span className="text-yellow-500">String cargo</span> =
        <span className="text-green-400"> "Dev Fullstack"</span>;{'\n  '}
        <span className="text-yellow-500">String formacao</span> =
        <span className="text-green-400">
          {' '}
          "Sistemas para Internet, Desenvolvedor Full Stack"
        </span>
        ;{'\n  '}
        <span className="text-yellow-500">String focus</span> =
        <span className="text-green-400">
          {' '}
          "HTML, CSS, JavaScript, React, Java, Node.js, MySQL, tailwind"
        </span>
        ;{'\n'}
        {'}'}
      </pre>
    </div>
  );
};

export default CodeCard;
