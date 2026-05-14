"use client";

import SectionHeader from "@/components/SectionHeader";
import ExperienciaInfo from "@/components/ExperienciaInfo";

export default function Experiencia() {
  return (
    <div className="relative w-full h-full flex flex-col items-center overflow-hidden">
      <ExperienciaInfo />
      <SectionHeader title="Experiência" />
    </div>
  );
}