"use client";

import { motion } from "framer-motion";

import SectionHeader from "@/components/SectionHeader";

import AboutProfile from "./components/AboutProfile";
import CodeCard from "./components/CodeCard";
import TerminalCard from "./components/TerminalCard";
import SocialButtons from "./components/SocialButtons";
import ActionButtons from "./components/ActionButtons";

export default function Sobre() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="
        relative
        w-full
        min-h-[75vh]
        mb-20
        md:mb-0
        flex
        items-start
        md:items-center
        justify-center
        overflow-y-auto
        md:overflow-hidden
        custom-scroll
        border-zinc-700
        rounded-2xl
        px-4
        py-6
      "
    >
      <div className="flex flex-col gap-4 w-full h-[75vh] md:h-full max-w-5xl xl:max-w-6xl 2xl:max-w-7xl rounded-2xl">

        {/* TOPO */}
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-6 md:gap-8">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
          >
            <AboutProfile />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
          >
            <CodeCard />
          </motion.div>

        </div>

        {/* BAIXO */}
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-6 md:gap-8">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
            }}
          >
            <TerminalCard />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.4,
            }}
            className="hidden md:flex flex-col gap-6 justify-center"
          >
            <SocialButtons />
            <ActionButtons />
          </motion.div>

          {/* MOBILE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.4,
            }}
            className="flex md:hidden w-full justify-center"
          >
            <ActionButtons />
          </motion.div>

        </div>

      </div>

      <SectionHeader title="Sobre" />
    </motion.div>
  );
}