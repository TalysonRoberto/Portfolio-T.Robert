"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section
      className="
        flex flex-col 
        md:flex-row 
        items-center 
        justify-between 
        w-full 
        max-w-7xl 
        px-6 
        md:px-10 
        gap-10 
        min-h-[calc(100vh-180px)] 
        py-8
      "
    >
      
      {/* TEXTO */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 space-y-6 text-center md:text-left z-10"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter text-white my-10 md:my-8"
        >
          Desenvolvedor <br />
          <span className="text-gray-300">Full Stack &</span> <br />
          <span className="text-gray-300">UX/UI Designer</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto md:mx-0 my-10 md:my-8"
        >
          Transformando ideias em produtos digitais de alta performance, 
          unindo arquitetura de software sólida com design minimalista.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Link
            href="/experiencia"
            className="
              inline-flex
              px-10
              py-3.5
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
            Acessar Portfólio
          </Link>
        </motion.div>
      </motion.div>

      {/* IMAGEM */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0 flex items-center justify-center md:justify-end"
      >
        <div className="relative w-full h-full max-w-[800px] z-20 md:mt-10">
          <Image
            src="/perfil.png"
            alt="Talyson Roberto"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain grayscale"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#110E12]/80 via-transparent to-[#110E12]/90 z-30 opacity-90"></div>

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#110E12_85%)] z-40 opacity-70"></div>
        </div>
      </motion.div>

    </section>
  );
}