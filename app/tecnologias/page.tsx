"use client";

import { } from "framer-motion";

import SectionHeader from "@/components/SectionHeader";
import Tecnologiainfo from "./components/Tecnologiainfo";

export default function Tecnologias() {
  return (
    <div className="relative w-full h-full flex flex-col items-center overflow-hidden">
      <div className="relative w-full h-full flex flex-col items-center overflow-hidden">
        <Tecnologiainfo />
       </div>
      <SectionHeader title="Tecnologias" />
    </div>
  );
}