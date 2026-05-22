'use client';

import Image from 'next/image';

const AboutProfile = () => {
  return (
    <div className="flex flex-col items-center">
      <div
        className="relative 
          w-[250px] h-[230px] 
          md:w-[180px] md:h-[200px] 
          overflow-hidden rounded-t-xl"
      >
        <Image
          src="/foto_perfil.png"
          alt="Perfil"
          fill
          className="object-cover"
        />
      </div>

      <div className="bg-purple-600 w-full text-center text-white text-[18px] md:text-lg font-medium rounded-b-xl">
        Talyson Roberto
      </div>
    </div>
  );
};

export default AboutProfile;
