"use client"

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import ExperienciaInfo from "./components/ExperienciaInfo";

export default function Experiencia() {
  return (
    <div 
      className="relative w-full h-full flex flex-col items-center overflow-hidden"
    >
    <div
      className="relative w-full h-full flex flex-col items-center overflow-hidden"
    >
      <ExperienciaInfo />
      </div>
      <SectionHeader title="Experiência" />
    </div>
  );
}