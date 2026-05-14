'use client';

import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const SocialButtons = () => {
  return (
    <div className="flex gap-4">
      <a
        href="https://github.com/talysonroberto"
        target="_blank"
        className="
          w-[70px]
          h-[70px]
          rounded-2xl
          border
          border-zinc-700
          bg-[#111318]
          flex
          items-center
          justify-center
          text-4xl
          text-white
          hover:border-purple-500
          hover:text-purple-500
          transition-all
          duration-300
        "
      >
        <FaGithub />
      </a>

      <a
        href="https://www.instagram.com/talysonroberto_"
        target="_blank"
        className="
          w-[70px]
          h-[70px]
          rounded-2xl
          border
          border-zinc-700
          bg-[#111318]
          flex
          items-center
          justify-center
          text-4xl
          text-white
          hover:border-purple-500
          hover:text-purple-500
          transition-all
          duration-300
        "
      >
        <FaInstagram />
      </a>

      <a
        href="https://linkedin.com/in/talyson-roberto"
        target="_blank"
        className="
          w-[70px]
          h-[70px]
          rounded-2xl
          border
          border-zinc-700
          bg-[#111318]
          flex
          items-center
          justify-center
          text-4xl
          text-white
          hover:border-purple-500
          hover:text-purple-500
          transition-all
          duration-300
        "
      >
        <FaLinkedin />
      </a>
    </div>
  );
};

export default SocialButtons;
