'use client';

import { FaWhatsapp } from 'react-icons/fa';
import { IoDocumentTextOutline } from 'react-icons/io5';

import Link from 'next/link';

const ActionButtons = () => {
  const whatsappMessage =
    'Olá! Vi seu portfólio e gostaria de conversar sobre uma projeto. Você estaria disponível para um bate-papo?';

  const whatsappLink = `https://wa.me/5585986741486?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  const buttonStyle = `
    flex items-center justify-center gap-2
    px-4 py-3 md:px-8 md:py-4
    rounded-full
    border border-white
    text-white
    text-[11px] md:text-lg
    font-medium
    hover:bg-purple-600
    hover:border-purple-600
    transition-all duration-300
    hover:scale-[1.03]
  `;

  return (
    <div className="flex flex-row md:flex-col gap-2 mb-2">
      {/* WHATSAPP */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonStyle}
      >
        <FaWhatsapp className="text-lg md:text-xl" />
        <span>WhatsApp</span>
      </a>

      {/* CURRÍCULO  href="/Curriculo Talyson Roberto.pdf" */}
      <Link href="/curriculo" rel="noopener noreferrer" className={buttonStyle}>
        <IoDocumentTextOutline className="text-sm md:text-base" />
        <span>Currículo Virtual</span>
      </Link>
    </div>
  );
};

export default ActionButtons;
