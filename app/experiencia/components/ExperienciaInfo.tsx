"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { FaBookmark, FaCode } from "react-icons/fa";

import ProjectModal from "./ProjectModal";
import ScrollIndicator from "@/components/ScrollIndicator";

interface Projeto {
  name: string;
  description: string | null;
  image: string | null;
  github: string;
  technologies: string[];
  updatedAt: string;
  isNew: boolean;
}

const CACHE_KEY = "github_projects_cache";
const CACHE_DURATION = 10 * 60 * 1000;

interface CacheData {
  projetos: Projeto[];
  timestamp: number;
}

const getCachedProjetos = (): CacheData | null => {
  try {
    const cached = localStorage.getItem(CACHE_KEY);

    if (!cached) return null;

    const data: CacheData = JSON.parse(cached);

    const now = Date.now();

    if (now - data.timestamp < CACHE_DURATION) {
      return data;
    }

    localStorage.removeItem(CACHE_KEY);

    return null;
  } catch {
    return null;
  }
};

const setCachedProjetos = (projetos: Projeto[]) => {
  try {
    const cacheData: CacheData = {
      projetos,
      timestamp: Date.now(),
    };

    localStorage.setItem(
      CACHE_KEY,
      JSON.stringify(cacheData)
    );
  } catch {}
};

const ExperienciaInfo = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [activeStep, setActiveStep] = useState(0);

  const [projetos, setProjetos] = useState<Projeto[]>([]);

  const [loading, setLoading] = useState(true);

  const [selectedProject, setSelectedProject] =
    useState<Projeto | null>(null);

  const itemsPerRow = 4;

  const totalRows = Math.ceil(
    projetos.length / itemsPerRow
  );

  useEffect(() => {
    const buscarProjetos = async () => {
      const cached = getCachedProjetos();

      if (cached) {
        setProjetos(cached.projetos);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          "/api/github/repos"
        );

        const data = await response.json();

        if (!Array.isArray(data)) {
          console.error(data);
          return;
        }

        const ordenados = data.sort(
          (a: Projeto, b: Projeto) =>
            new Date(b.updatedAt).getTime() -
            new Date(a.updatedAt).getTime()
        );

        setCachedProjetos(ordenados);

        setProjetos(ordenados);
      } catch (error) {
        console.error(
          "Erro ao buscar projetos",
          error
        );
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

    const scrollHeight =
      element.scrollHeight - element.clientHeight;

    const progress = scrollTop / scrollHeight;

    const currentRow = Math.min(
      totalRows - 1,
      Math.floor(progress * totalRows)
    );

    setActiveStep(currentRow);
  };

  return (
    <div className="relative w-full h-[80vh] md:h-[80vh] flex justify-center overflow-hidden">
      <ScrollIndicator
        activeStep={activeStep}
        totalSteps={Math.max(totalRows, 1)}
        position="right"
      />

      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="
          custom-scroll
          w-[60vw] md:w-full
          max-w-6xl
          h-[75vh] md:h-[71vh]
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
          Array.from({ length: 8 }).map(
            (_, index) => (
              <div
                key={index}
                className="
                  w-[60vw]
                  md:w-full
                  max-w-[320px]
                  md:max-w-full
                  h-[23vh]
                  md:h-[33vh]
                  bg-zinc-800
                  rounded-2xl
                  animate-pulse
                "
              />
            )
          )}

        {!loading &&
          projetos.map((projeto, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.96,}}
              animate={{ opacity: 1, y: 0, scale: 1, }}
              transition={{ duration: 0.8, delay: index * 0.08, ease: "easeOut", }}
              whileHover={{ y: -5, }}
              onClick={() =>
                setSelectedProject(projeto)
              }
              className="
                group
                relative
                w-[60vw]
                md:w-full
                max-w-[320px]
                md:max-w-full
                h-[23vh]
                md:h-[33vh]
                bg-[#18181B]
                border
                border-zinc-700
                rounded-2xl
                overflow-visible
                transition-all
                duration-300
                hover:border-purple-500
              "
            >
              {projeto.isNew && (
                <div className="absolute top-0 right-4 z-20">
                  <div className="relative flex justify-center">
                    <FaBookmark className="text-purple-600 text-[70px] group-hover:scale-110 transition-all duration-300 relative mt-[-5px]" />

                    <span className="absolute top-3 text-white text-xs font-bold tracking-wide">
                      NEW
                    </span>
                  </div>
                </div>
              )}

              <div className="relative w-full md:h-[60%] h-[50%] bg-zinc-900 overflow-hidden rounded-t-2xl">
                {projeto.image ? (
                  <img
                    src={projeto.image}
                    alt={projeto.name}
                    className="
                      w-full
                      h-full
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
                        md:w-20
                        w-10
                        md:h-20
                        h-10
                        md:rounded-2xl
                        rounded-lg
                        bg-zinc-800
                        border
                        border-zinc-700
                        flex
                        items-center
                        justify-center
                        md:text-4xl
                        text-2xl
                        text-purple-500
                      "
                    >
                      <FaCode />
                    </div>

                    <p className="text-zinc-500 font-medium">
                      Projeto sem preview
                    </p>
                  </div>
                )}
              </div>

              <div className="md:px-4 px-2 md:py-2 py-2 flex flex-col gap-2">
                <h2 className="text-white font-semibold text-[15px] md:text-lg line-clamp-1">
                  {projeto.name}
                </h2>

                <p className="text-zinc-400 text-[12px] md:text-sm line-clamp-2">
                  {projeto.description ||
                    "Projeto sem descrição."}
                </p>
              </div>
            </motion.div>
          ))}
      </div>

      <ProjectModal
        projeto={selectedProject}
        onClose={() =>
          setSelectedProject(null)
        }
      />
    </div>
  );
};

export default ExperienciaInfo;