'use client';

import Image from 'next/image';

const AboutProfile = () => {
  return (
    <div className="flex flex-col items-center">
      <div
        className="relative 
          w-[140px] h-[150px] 
          md:w-[180px] md:h-[190px] 
          overflow-hidden rounded-sm"
      >
        <Image src="/perfil.png" alt="Perfil" fill className="object-cover" />
      </div>

      <div className="bg-purple-700 w-full text-center text-white text-sm md:text-lg font-medium">
        Talyson Roberto
      </div>
    </div>
  );
};

export default AboutProfile;
