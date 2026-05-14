"use client";
import { useRef, useState, useEffect } from "react";
import SectionHeader from "@/components/SectionHeader";
import Tecnologiainfo from "@/components/Tecnologiainfo";

export default function Tecnologias() {
return(
  <div className="relative w-full h-full flex flex-col items-center overflow-hidden">
    <Tecnologiainfo/>
    <SectionHeader title="Tecnologias" />
  </div>
);}