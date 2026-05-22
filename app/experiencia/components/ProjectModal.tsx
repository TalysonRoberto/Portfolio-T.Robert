"use client";

import Image from "next/image";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import { FaCode } from "react-icons/fa";

interface Projeto {
  name: string;
  description: string | null;
  image: string | null;
  github: string;
  technologies: string[];
  updatedAt: string;
}

interface Props {
  projeto: Projeto | null;
  onClose: () => void;
}

const ProjectModal = ({
  projeto,
  onClose,
}: Props) => {
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
                  "
                >
                  <div
                    className="
                      w-24
                      h-24
                      rounded-3xl
                      bg-zinc-800
                      border
                      border-zinc-700
                      flex
                      items-center
                      justify-center
                      text-5xl
                      text-purple-600
                    "
                  >
                    <FaCode />
                  </div>

                  <div className="text-center px-4">
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

            <div className="p-6 md:p-8 flex flex-col gap-4">
              <div>
                <h2 className="text-xl md:text-3xl font-bold text-white mb-3">
                  {projeto.name}
                </h2>

                <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
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
                    text-lg
                  "
                >
                  Acessar Repositório
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;