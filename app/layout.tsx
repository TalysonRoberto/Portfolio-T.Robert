"use client";

import { useState } from "react";

import "./globals.css";

import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";

import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";

//import ImagePreloader from "@/components/ImagePreloader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menus = [
    { name: "Home", path: "/" },
    { name: "Experiencia", path: "/experiencia" },
    { name: "Tecnologias", path: "/tecnologias" },
    { name: "Dev", path: "/codigos" },
    { name: "Sobre", path: "/sobre" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <html lang="pt-br">
      <body className="bg-[#110E12] text-white overflow-x-hidden font-sans">

        {/* PRELOAD DAS IMAGENS 
        <ImagePreloader /> */}

        <div className="flex flex-col min-h-screen p-6 md:p-10 relative">

          {/* HEADER */}
          <header className="flex justify-between items-center z-[100] relative">

            <Link href="/" className="flex items-center">
              <div className="w-[120px] md:w-[180px]">
                <Image
                  src="/Logo.png"
                  alt="Logo"
                  width={180}
                  height={50}
                  className="w-full h-auto"
                />
              </div>
            </Link>

            {/* NAVEGAÇÃO DESKTOP */}
            <nav className="hidden md:block">
              <ul className="flex gap-10">

                {menus.map((item) => (
                  <li key={item.name} className="relative py-1">

                    <Link href={item.path}>
                      <span
                        className={`text-lg font-medium transition-colors ${
                          pathname === item.path
                            ? "text-white"
                            : "text-gray-500 hover:text-gray-300"
                        }`}
                      >
                        {item.name}
                      </span>
                    </Link>

                    {pathname === item.path && (
                      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-600 shadow-[0_0_8px_#9333ea]" />
                    )}

                  </li>
                ))}

              </ul>
            </nav>

            {/* BOTÃO MOBILE */}
            <button
              className="md:hidden text-2xl text-white z-[110]"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

          </header>

          {/* MENU MOBILE */}
          <div
            className={`fixed inset-0 bg-[#110E12] z-[90] flex flex-col items-center justify-center transition-all duration-300 ${
              isMenuOpen
                ? "opacity-100 visible"
                : "opacity-0 invisible md:hidden"
            }`}
          >
            <ul className="flex flex-col gap-8 text-center">

              {menus.map((item) => (
                <li
                  key={item.name}
                  onClick={toggleMenu}
                  className="text-3xl font-bold"
                >
                  <Link
                    href={item.path}
                    className={
                      pathname === item.path
                        ? "text-purple-500"
                        : "text-white"
                    }
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

            </ul>
          </div>

          {/* SOCIAL */}
          <aside className="fixed left-6 md:left-10 bottom-32 md:bottom-24 flex flex-col gap-6 text-gray-400 z-50">

            <a
              href="https://github.com/talysonroberto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-5 h-5 md:w-6 md:h-6 hover:text-purple-500 duration-300" />
            </a>

            <a
              href="https://www.instagram.com/talysonroberto_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="w-5 h-5 md:w-6 md:h-6 hover:text-purple-500 duration-300" />
            </a>

            <a
              href="https://linkedin.com/in/talyson-roberto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-5 h-5 md:w-6 md:h-6 hover:text-purple-500 duration-300" />
            </a>

          </aside>

          {/* CONTEÚDO */}
          <main className="flex-1 flex items-center justify-center relative z-10">
            {children}
          </main>

          {/* INDICADORES */}
          <footer className="flex fixed justify-center gap-4 z-50 relative mt-auto">

            {menus.map((item) => (
              <Link key={item.name} href={item.path}>

                <div
                  className={`h-2.5 rounded-full transition-all duration-500 cursor-pointer ${
                    pathname === item.path
                      ? "w-10 bg-purple-600 shadow-[0_0_5px_#9333ea]"
                      : "w-5 bg-gray-800"
                  }`}
                />

              </Link>
            ))}

          </footer>

        </div>
      </body>
    </html>
  );
}