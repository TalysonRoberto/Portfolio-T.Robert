"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaBookmark } from "react-icons/fa";
import Image from "next/image";
import ProjectModal from "@/components/ProjectModal";
import ScrollIndicator from "@/components/ScrollIndicator";
import { FaCode } from "react-icons/fa";

interface Projeto {
  name: string;
  description: string | null;
  image: string | null;
  github: string;
  technologies: string[];
  updatedAt: string;
}

const ExperienciaInfo = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [activeStep, setActiveStep] = useState(0);

  const [projetos, setProjetos] = useState<Projeto[]>([]);

  const [loading, setLoading] = useState(true);

  const [selectedProject, setSelectedProject] = useState<Projeto | null>(null);

  // projetos que terão badge NEW
  const novosProjetos = [
    "Gerenciador-de-Atividades-com-Alerta-Autom-tico",
    "Dev-Blog-Engine",
  ];

  // quantidade de cards por linha
  const itemsPerRow = 4;

  // quantidade total de linhas
  const totalRows = Math.ceil(projetos.length / itemsPerRow);

  useEffect(() => {

  const buscarProjetos = async () => {

    try {

      // verifica cache
      const cache = sessionStorage.getItem("github_projects");

      if (cache) {

        setProjetos(JSON.parse(cache));

        setLoading(false);

        return;
      }

      // busca api
      const response = await fetch("/api/github/repos");

      const data = await response.json();

      // ordena
      const ordenados = data.sort(
        (a: Projeto, b: Projeto) =>
          new Date(b.updatedAt).getTime() -
          new Date(a.updatedAt).getTime()
      );

      // salva cache
      sessionStorage.setItem(
        "github_projects",
        JSON.stringify(ordenados)
      );

      setProjetos(ordenados);

    } catch (error) {

      console.error("Erro ao buscar projetos");

    } finally {

      setLoading(false);

    }

  };

  buscarProjetos();

}, []);

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
    <div className="relative w-full h-[70vh] flex justify-center overflow-hidden">

    {/* indicador */}
    <ScrollIndicator
      activeStep={activeStep}
      totalSteps={Math.max(totalRows, 1)}
      position="right"
    />

      {/* grid */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="
          custom-scroll
          w-[60vw]
          md:w-full
          max-w-6xl
          h-[70vh]
          overflow-y-auto
          grid
          grid-cols-1
          md:grid-cols-4
          gap-4
          py-4
          justify-items-center
        "
      >
        {loading &&
          Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="
                w-[60vw]
                md:w-full
                max-w-[320px]
                md:max-w-full
                h-[33vh]
                md:h-[55vh]
                bg-zinc-800
                rounded-2xl
                animate-pulse
              "
            />
          ))}

        {!loading &&
          projetos.map((projeto, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(projeto)}
              className="
                group
                relative
                w-[60vw]
                md:w-full
                max-w-[320px]
                md:max-w-full
                h-[33vh]
                md:h-[55vh]
                bg-[#18181B]
                border
                border-zinc-700
                rounded-2xl
                overflow-visible
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-purple-500
              "
            >
              {/* BADGE NEW */}
              {novosProjetos.includes(projeto.name) && (
                <div className="absolute top-0 right-4 z-20">
                  
                  <div className="relative flex justify-center">
                    
                    <FaBookmark className="text-purple-600 text-[70px] group-hover:scale-110 transition-all duration-300 relative mt-[-5px]" />

                    <span
                      className="
                        absolute
                        top-3
                        text-white
                        text-xs
                        font-bold
                        tracking-wide
                      "
                    >
                      NEW
                    </span>

                  </div>

                </div>
              )}

              {/* imagem */}
              <div className="relative w-full h-[70%] bg-zinc-900 overflow-hidden rounded-t-2xl">

                {projeto.image ? (
                  <Image
                    src={projeto.image}
                    alt={projeto.name}
                    fill
                    unoptimized
                    className="
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />
                ) : (
                 <div
                    className="
                      w-full
                      h-full
                      flex
                      flex-col
                      items-center
                      justify-center
                      gap-4
                      bg-gradient-to-br
                      from-[#1F1F23]
                      to-[#111318]
                    "
                  >
                    <div
                      className="
                        w-20
                        h-20
                        rounded-2xl
                        bg-zinc-800
                        border
                        border-zinc-700
                        flex
                        items-center
                        justify-center
                        text-4xl
                        text-purple-500
                        shadow-[0_0_20px_rgba(168,85,247,0.25)]
                      "
                    >
                      <FaCode />
                    </div>

                    <div className="text-center">
                      <p className="text-white font-medium">
                        Projeto sem preview
                      </p>

                      <p className="text-zinc-500 text-sm mt-1">
                        Clique para visualizar detalhes
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* conteúdo */}
              <div className="p-4 flex flex-col gap-2">
                <h2 className="text-white font-semibold text-lg line-clamp-1">
                  {projeto.name}
                </h2>

                <p className="text-zinc-400 text-sm line-clamp-3">
                  {projeto.description || "Projeto sem descrição."}
                </p>
              </div>
            </div>
          ))}
      </div>

      <ProjectModal
        projeto={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default ExperienciaInfo;