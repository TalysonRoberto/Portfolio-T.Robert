import Image from 'next/image';

export default function SectionHeader({ title }: { title: string }) {
  return (
    <div className="fixed 
                    bottom-15 md:bottom-10 left-1/2 md:left-auto md:right-10 -translate-x-1/2 md:translate-x-0
                    flex items-center gap-3 select-none pointer-events-none z-20">
      <h2 className="text-gray-500 text-3xl md:text-6xl font-black uppercase tracking-tighter opacity-20">
        {title}
      </h2>
      <div className="w-[30px] md:w-[50px]">
        <Image
          src="/figure.png"
          alt="figure"
          width={50}
          height={50}
          className="w-full h-auto"
        />
      </div>
    
    </div>
  );
}