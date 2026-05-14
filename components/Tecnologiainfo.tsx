"use client";
import ScrollIndicator from "@/components/ScrollIndicator";
import React, { useRef, useState } from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaGitAlt, FaFigma,} from "react-icons/fa";

import {
  SiNextdotjs,
  SiGamemaker,
  SiVite,
  SiMysql,
} from "react-icons/si";

const tecnologias = [
  { nome: "React", descricao: "Desenvolvimento de interfaces modernas, reutilizáveis e altamente dinâmicas utilizando componentização.", icon: <FaReact />,},
  { nome: "Next.js", descricao:  "Criação de aplicações web performáticas com renderização otimizada, rotas dinâmicas e SEO avançado.", icon: <SiNextdotjs />,},
  { nome: "JavaScript", descricao: "Construção de aplicações interativas e funcionais com lógica moderna para web e sistemas.", icon: <FaJsSquare />,},
  { nome: "Git", descricao: "Controle de versão, gerenciamento de código e colaboração em projetos utilizando Git e GitHub.", icon: <FaGitAlt />,},
  { nome: "Figma", descricao: "Criação de interfaces, protótipos e experiências visuais focadas em UI/UX moderno.", icon: <FaFigma />,},
  {nome: "Vite", descricao: "Ferramenta moderna de build focada em velocidade, desenvolvimento otimizado e experiência fluida.",
  icon: <SiVite />,},
  {nome: "MySQL",descricao: "Gerenciamento de bancos de dados relacionais com foco em performance, organização e persistência de dados.",
  icon: <SiMysql />,},
  { nome: "GameMaker", descricao: "Desenvolvimento de jogos 2D com sistemas interativos, lógica de gameplay e prototipação rápida.", icon: <SiGamemaker />,},
  { nome: "HTML5", descricao: "Estruturação semântica de páginas web modernas com foco em acessibilidade e organização.", icon: <FaHtml5 />,},
  { nome: "CSS3", descricao: "Estilização responsiva com animações, efeitos visuais e layouts modernos adaptáveis.", icon: <FaCss3Alt />,},
];

const Tecnologiainfo = () => {
  const scrollRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const itemsPerRow = 4;
  const totalRows = Math.ceil(tecnologias.length / itemsPerRow);

  const handleScroll = () => {
    const element = scrollRef.current;
    if (!element) return;
    const scrollTop = element.scrollTop;
    const scrollHeight = element.scrollHeight - element.clientHeight;
    const progress = scrollTop / scrollHeight;
    const currentRow = Math.min(
      totalRows - 1,
      Math.floor(progress * totalRows)
    );
    setActiveStep(currentRow);
  };

  return (
    <div className="relative w-full h-[70vh] flex justify-center px-4  overflow-hidden">

      {/* indicador lateral */}
      <ScrollIndicator
        activeStep={activeStep}
        totalSteps={totalRows}
        position="right"
      />

      {/* conteúdo */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className=" custom-scroll grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-[65vw] md:w-full overflow-y-auto pl-2 pr-2">
        {tecnologias.map((tech, index) => (
          <div
            key={index}
            className=" relative flex items-start gap-4 border-t-[5px] border-zinc-700 min-h-[150px] overflow-hidden group transition-all duration-300 hover:border-white hover:-translate-y-1">
            {/* detalhe */}
            <div className="absolute top-0 right-0 w-4 h-4 bg-zinc-700 group-hover:bg-white duration-300" />

            {/* icone */}
            <div
              className=" 
              md:min-w-[150px]  min-w-[80px]
              md:h-[150px] h-[150px] 
              bg-zinc-700 flex items-center justify-center text-5xl text-zinc-300 transition-all duration-300 group-hover:scale-105 group-hover:bg-white group-hover:text-purple-500">
              {tech.icon}
            </div>

            {/* conteúdo */}
            <div className="flex flex-col">
              <h2 className="text-white text-[15px] md:text-lg mt-1 font-semibold mb-2">
                {tech.nome}
              </h2>

              <p className="text-zinc-400 text-[12px] md:text-sm leading-relaxed max-w-[300px]">
                {tech.descricao}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tecnologiainfo;