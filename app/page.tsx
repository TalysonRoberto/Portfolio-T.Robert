// app/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="
            flex flex-col 
            md:flex-row 
            items-center 
            justify-between 
            w-full 
            max-w-7xl 
            px-6 
            md:px-10 
            gap-10 
            min-h-[calc(100vh-180px)] 
            py-8">
      
      {/* TEXTO DE APRESENTAÇÃO */}
      <div className="flex-1 space-y-6 text-center md:text-left z-10">
        <h2 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter text-white my-10 md:my-8">
          Desenvolvedor <br />
          <span className="text-gray-300">Full Stack &</span> <br />
          <span className="text-gray-300">UX/UI Designer</span>
        </h2>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto md:mx-0 my-10 md:my-8">
          Especialista em transformar ideias em produtos digitais de alta performance, 
          unindo arquitetura de software sólida com design minimalista.
        </p>

        <Link
          href="/experiencia"
          className="
            inline-flex
            px-10
            py-3.5
            border
            border-white
            rounded-full
            text-white
            hover:bg-white
            hover:text-black
            transition-all
            duration-300
            font-semibold
            text-lg
          "
        >
          Acessar Portfólio
        </Link>
      </div>

      {/* CONTAINER DA IMAGEM */}
     <div className="absolute inset-0 z-0 flex items-center justify-center md:justify-end">
        <div className="relative w-full h-full max-w-[800px] z-20 md:mt-10">
          <Image
  src="/Perfil.png"
  alt="Talyson Roberto"
  fill
  priority
  sizes="(max-width: 768px) 100vw, 50vw"
  className="object-contain grayscale"
/>
          <div className="absolute inset-0 bg-gradient-to-b from-[#110E12]/80 via-transparent to-[#110E12]/90 z-30 opacity-90"></div>
          {/* Suavização radial para os cantos e topo */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#110E12_85%)] z-40 opacity-70"></div>
        </div>
      </div>

    </section>
  );
}