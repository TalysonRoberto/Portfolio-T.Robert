"use client";

import SectionHeader from "@/components/SectionHeader";

import AboutProfile from "./components/AboutProfile";
import CodeCard from "./components/CodeCard";
import TerminalCard from "./components/TerminalCard";
import SocialButtons from "./components/SocialButtons";
import ActionButtons from "./components/ActionButtons";

export default function Sobre() {
  return (
    <div
        className="
          relative
          w-full
          h-[75vh]
          mb-20
          md:mb-0
          md:min-h-[70vh]
          flex
          items-start
          md:items-center
          justify-center
          overflow-y-auto
          md:overflow-hidden
          custom-scroll
          px-4
          py-10
        "
      >
        <div className="flex flex-col gap-6 md:gap-4">

          {/* TOPO */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">

            <AboutProfile />

            <CodeCard />

          </div>

          {/* BAIXO */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">

            <TerminalCard />

            <div className="hidden md:flex flex-col gap-6 justify-center h-full">

              <SocialButtons />

              <ActionButtons />

            </div>

            {/* MOBILE */}
            <div className="flex md:hidden w-full justify-center">
              <ActionButtons />
            </div>

          </div>

        </div>

        <SectionHeader title="Sobre" />
      </div>
  );
}