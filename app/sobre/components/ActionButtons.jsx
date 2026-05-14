'use client';

import { FaArrowDown } from 'react-icons/fa';

const ActionButtons = () => {
  return (
    <div className="flex flex-row md:flex-col gap-4">
      <button
        className="
          px-3 py-3 md:px-8 md:py-4
          rounded-full
          border
          border-white
          text-white
          text-sm md:text-lg
          hover:bg-purple-600
          hover:border-purple-600
          transition-all
          duration-300
        "
      >
        ↓ Cell Whatsapp
      </button>

      <button
        className="
          px-3 py-3 md:px-8 md:py-4
          rounded-full
          border
          border-white
          text-white
          text-sm md:text-lg
          hover:bg-purple-600
          hover:border-purple-600
          transition-all
          duration-300
        "
      >
        ↓ Baixar Currículo
      </button>
    </div>
  );
};

export default ActionButtons;
