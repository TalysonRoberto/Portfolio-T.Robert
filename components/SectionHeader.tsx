import Image from 'next/image';

export default function SectionHeader({ title }: { title: string }) {
  return (
    <div className="fixed 
                    bottom-15 md:bottom-15 left-1/2 md:left-auto md:right-10 -translate-x-1/2 md:translate-x-0
                    flex items-center gap-3 select-none pointer-events-none z-20">
      <h2 className="text-gray-500 text-3xl md:text-[45px] font-black uppercase tracking-tighter opacity-20">
        {title}
      </h2>
      <div className="w-[30px] md:w-[40px]">
        <Image
          src="/figure.png"
          alt="figure"
          width={40}
          height={40}
          className="w-full h-auto"
        />
      </div>
    
    </div>
  );
}