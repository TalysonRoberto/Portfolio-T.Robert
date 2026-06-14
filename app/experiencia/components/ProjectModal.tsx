"use client";

import Image from "next/image";
import {motion,AnimatePresence} from "framer-motion";
import { FaCode } from "react-icons/fa";

interface Projeto {
  name: string;
  description: string | null;
  image: string | null;
  github: string;
  technologies: string[];
  createdAt: string;
  pageProj: string | null;
  linguagen: string | null;
}

interface Props {
  projeto: Projeto | null;
  onClose: () => void;
}

// 1. Dicionário de cores mapeando a tecnologia para classes específicas do Tailwind
const CORES_TECNOLOGIAS: Record<string, { bg: string; text: string; border: string }> = {
  typescript: { bg: "bg-blue-500/20", text: "text-blue-400", border: "border-blue-500/30" },
  javascript: { bg: "bg-yellow-500/20", text: "text-yellow-400", border: "border-yellow-500/30" },
  react: { bg: "bg-cyan-500/20", text: "text-cyan-400", border: "border-cyan-500/30" },
  nextjs: { bg: "bg-white/10", text: "text-white", border: "border-white/20" },
  node: { bg: "bg-green-500/20", text: "text-green-400", border: "border-green-500/30" },
  python: { bg: "bg-blue-600/20", text: "text-yellow-500", border: "border-blue-500/30" },
  tailwind: { bg: "bg-sky-500/20", text: "text-sky-400", border: "border-sky-500/30" },
  html: { bg: "bg-orange-500/20", text: "text-orange-400", border: "border-orange-500/30" },
  css: { bg: "bg-blue-500/20", text: "text-blue-400", border: "border-blue-500/30" }
  // Adicione quantas tecnologias precisar aqui...
};

// Função auxiliar para buscar a cor ou retornar um padrão (Roxo) caso não exista no mapa
const obterCorTecnologia = (tech: string | null) => {
  if (!tech) return { bg: "bg-purple-600/90", text: "text-white", border: "border-purple-400/30" };
  
  const techLower = tech.toLowerCase().trim();
  return CORES_TECNOLOGIAS[techLower] || { 
    bg: "bg-purple-600/90", 
    text: "text-white", 
    border: "border-purple-400/30" 
  };
};

const ProjectModal = ({
  projeto,
  onClose,
}: Props) => {
  const coresBadge = obterCorTecnologia(projeto?.linguagen || null);
  return (
    <AnimatePresence>
      {projeto && (
        <motion.div
          className="
            fixed
            inset-0
            z-[999]
            bg-black/70
            backdrop-blur-sm
            flex
            items-center
            justify-center
            px-4
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 30,
              scale: 0.95,
            }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
            className="
              relative
              w-[70vw]
              md:w-full
              max-w-5xl
              bg-[#18181B]
              border
              border-zinc-700
              rounded-2xl
              overflow-hidden
            "
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            <button
              onClick={onClose}
              className="
                absolute
                top-4
                right-4
                z-20
                w-10
                h-10
                rounded-full
                bg-black/50
                text-white
                hover:bg-purple-600
                transition-all
              "
            >
              ✕
            </button>

           <div className="relative w-full h-[200px] md:h-[250px] bg-zinc-900 overflow-hidden">

              {/* BADGE: Canto superior esquerdo */}
              {projeto.linguagen && (
                <div className={`
                  absolute 
                  bottom-4 
                  right-4 
                  z-20 
                  px-2
                  py-1
                  rounded-full
                  backdrop-blur-sm 
                  text-xs 
                  font-bold 
                  uppercase 
                  tracking-wider
                  border
                  shadow-lg
                  ${coresBadge.bg}
                  ${coresBadge.text}
                  ${coresBadge.border}
                `}>
                  {projeto.linguagen}
                </div>
              )}

              {projeto.image ? (
                <Image
                  src={projeto.image}
                  alt={projeto.name}
                  fill
                  unoptimized
                  className="object-cover"
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
                    gap-5
                    bg-gradient-to-br
                    from-[#1F1F23]
                    to-[#111318]
                    md:mt-0 mt-[-20px]
                  "
                >
                  <div
                    className="
                      w-15
                      h-15
                      rounded-xl
                      bg-zinc-800
                      border
                      border-zinc-700
                      flex
                      items-center
                      justify-center
                      text-[30px]
                      text-purple-600
                    "
                  >
                    <FaCode />
                  </div>

                  <div className="text-center px-4 md:mt-0 mt-[-20px]">
                    <p className="text-white text-lg font-semibold">
                      Projeto sem preview
                    </p>

                    <p className="text-zinc-500 text-sm mt-2">
                      Este projeto ainda não possui imagens.
                    </p>
                  </div>
                </div>
              )}

              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#18181B] via-transparent to-transparent" />
            </div>

            <div className="p-6 md:p-8 flex flex-col md:gap-4 gap-2 md:mt-0 mt-[-20px]">
              <div>
                <h2 className="text-xl md:text-3xl font-bold text-white mb-3">
                  {projeto.name}
                </h2>

                <p className="text-zinc-400 leading-relaxed text-sm md:text-base md:line-clamp-none line-clamp-4">
                  {projeto.description ||
                    "Projeto sem descrição."}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {projeto.technologies?.map(
                  (tech, index) => (
                    <div
                      key={index}
                      className="
                        px-4
                        py-2
                        rounded-full
                        bg-zinc-800
                        border
                        border-zinc-700
                        text-sm
                        text-zinc-300
                      "
                    >
                      {tech}
                    </div>
                  )
                )}
              </div>

              <div className="flex flex-col md:flex-row gap-4 pt-2">
                <a
                  href={projeto.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseDown={(e) =>
                    e.stopPropagation()
                  }
                  className="
                    inline-flex
                    align-center
                    justify-center
                    px-4
                    py-2
                    border
                    border-white
                    rounded-full
                    text-white
                    hover:bg-white
                    hover:text-black
                    transition-all
                    duration-300
                    font-semibold
                    text-ls
                  "
                >
                  Acessar Repositório
                </a>

                {/* O botão só aparece se pageProj não for nulo/vazio */}
                {projeto.pageProj && (
                  <a
                    href={projeto.pageProj}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseDown={(e) =>
                      e.stopPropagation()
                    }
                    className="
                      inline-flex
                      align-center
                      justify-center
                      px-4
                      py-2
                      border
                      border-white
                      rounded-full
                      text-white
                      hover:bg-white
                      hover:text-black
                      transition-all
                      duration-300
                      font-semibold
                      text-ls
                    "
                  >
                    Abrir projeto
                  </a>
                )}
              </div>
              
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;