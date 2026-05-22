'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaFigma,} from 'react-icons/fa';
import { SiNextdotjs, SiVite, SiMysql, SiGamemaker } from 'react-icons/si';


function calculateAge(birthDate: string) {
  const birth = new Date(birthDate);
  const now = new Date();

  let age = now.getFullYear() - birth.getFullYear();

  const monthDiff = now.getMonth() - birth.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birth.getDate())) {
    age--;
  }

  return age;
}

export default function CurriculoPage() {
  const age = calculateAge('1997-04-05');

  const experiencia = [
    {
      cargo: 'Programador Junior',
      empresa: 'Lanlink',
      descricao: 'Atuo no desenvolvimento full stack utilizando React, Next.js, JavaScript, Python e Tailwind CSS. \n\nDesenvolvo sistemas web, extensões e integrações com APIs. \n\nTambém trabalho com automações utilizando Power Automate e n8n.',
      periodo: '2020 - 2021',
      Tempo: '1 Ano'
    },
    {
      cargo: 'Projeto Pessoal',
      empresa: 'Lanlink',
      descricao: 'Mesmo atuando oficialmente no Analista técnico, busquei contribuir com o desenvolvimento de ferramentas, sistemas e automações para facilitar atividades internas da empresa. Essa iniciativa me ajudou a ganhar reconhecimento e ampliar minha experiência prática em desenvolvimento de software',
      periodo: '2025 - 2026',
      Tempo: '1 Ano'
    },
  ];
  const formacao = [
    { instituicao: 'Geração Tech 3.0', curso: 'Desenvolvedor Full Stack', ano: '2026'},
    { instituicao: 'Udemy', curso: 'Curso - JavaScript', ano: '2025'},
    { instituicao: 'Unigrande', curso: 'Graduação - Sistemas para Internet', ano: '2020'},
  ];
  const tecnologias = [
    {
      title: 'Linguagens Web',
      icons: [ <FaHtml5 key="html" />, <FaCss3Alt key="css" />, <FaJsSquare key="js" />,],
    },
    {
      title: 'Frameworks Front-end',
      icons: [ <FaReact key="react" />, <SiVite key="vite" />, <SiNextdotjs key="next" />,],
    },
    {
      title: 'Design & Prototipação',
      icons: [<FaFigma key="figma" />],
    },
    {
      title: 'Banco de Dados & Dev. de Jogos',
      icons: [ <SiMysql key="mysql" />, <SiGamemaker key="gamemaker" />,],
    },
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
      className=" relative w-[80vw] md:w-full h-[80vh] md:h-[80vh] flex justify-center overflow-hidden p-4 ">
      <div className=" max-w-7xl mx-auto h-[75vh] md:h-[70vh] w-full space-y-4 overflow-y-auto custom-scroll p-2">
        {/* TOPO - FOTO + SOBRE */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4"
        >
          {/* FOTO */}
          <div className="rounded-3xl border border-zinc-800 bg-black/40 overflow-hidden">
            <div className="relative w-full h-[250px]">
              <Image
                src="/foto_perfil.png"
                alt="Perfil"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* SOBRE */}
          <div className="space-y-4">
            <div className="rounded-3xl border border-zinc-800 bg-black/40 p-6">
              <h2 className="text-lg text-zinc-300 mb-4">Hello World !</h2>
              <p className="text-zinc-400 leading-relaxed">
                Sou desenvolvedor Full Stack com experiência em React, Next.js,
                JavaScript, Python e Tailwind CSS. Também possuo conhecimentos
                em automação com Power Automate e n8n, sempre buscando evolução
                profissional e novas tecnologias.
              </p>
            </div>

            {/* PERFIL */}
            <div className="rounded-3xl border border-zinc-800 bg-black/40 p-6">
              <div className="flex flex-wrap gap-4">
                <div className="border border-zinc-700 rounded-xl px-5 py-2">
                  Perfil
                </div>
                <div className="border border-zinc-700 rounded-xl px-5 py-2">
                  Talyson Roberto
                </div>
                <div className="border border-zinc-700 rounded-xl px-5 py-2">
                  {age} Anos
                </div>
                <div className="border border-zinc-700 rounded-xl px-5 py-2">
                  Caucaia / CE
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* EXPERIÊNCIAS */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* CARD */}
          {experiencia.map((item, index) => (
            <div key={index} className="rounded-3xl border border-zinc-800 bg-black/40 p-6 group hover:border-purple-500 transition-all duration-300">
              <div className="md:flex items-start justify-between">
                <div>
                  <h2 className="text-3xl font-bold">{item.cargo}</h2>
                  <p className="text-zinc-500 mt-1">{item.empresa}</p>
              </div>
              <div className="text-right ">
                <div className="border border-zinc-700 rounded-xl px-4 py-1 text-sm group-hover:border-purple-500 transition-all text-center">
                  {item.periodo}
                </div>
                <p className="text-zinc-600 text-sm mt-2 md:text-end text-center">{item.Tempo}</p>
              </div>
            </div>
            <div className="mt-8 text-zinc-400 leading-relaxed space-y-4">
              <p className="whitespace-pre-line" >{item.descricao}</p>
            </div>
          </div>))}
        </motion.section>

        {/* TECNOLOGIAS + FORMAÇÃO */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* TECNOLOGIAS */}
          <div className="space-y-4">
            {tecnologias.map((item, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-zinc-800 bg-black/40 p-5 md:flex items-center justify-between group hover:border-purple-500 transition-all duration-300"
              >
                <div className="md:w-[45%] md:border-r border-zinc-800 pr-4 md:pb-0 pb-4">
                  <h3 className="font-semibold leading-tight">{item.title}</h3>
                </div>
                <div className="flex items-center gap-5 text-3xl md:text-5xl text-zinc-400 group-hover:text-purple-400 transition-all">
                  {item.icons}
                </div>
              </div>
            ))}
          </div>

          {/* FORMAÇÃO */}
          <div className="rounded-3xl border border-zinc-800 bg-black/40 p-6 group hover:border-purple-500 transition-all duration-300">
            <div className="space-y-4">
              {formacao.map((form,index) => (
                 <div key={index}>
                  <div className="md:flex items-center justify-between flex-wrap gap-2">
                    <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-0">{form.instituicao}</h2>
                    <div className="text-center border border-zinc-700 rounded-xl px-5 py-1 group-hover:border-purple-500 transition-all">
                      {form.ano}
                    </div>
                  </div>
                  <p className="text-zinc-500 text-xl mt-4">
                    {form.curso}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* PORTFÓLIO */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="rounded-3xl border border-zinc-800 bg-black/40 p-6 group hover:border-purple-500 transition-all duration-300"
        >
          <div className="grid grid-cols-1 md:grid-cols-[120px_1fr_1fr] gap-4 items-center">
            <div className="md:border-r border-zinc-800 pr-4 font-semibold">
              Portfólio
            </div>

            <a
              href="https://github.com/talysonroberto"
              target="_blank"
              className="border border-zinc-700 rounded-xl px-4 py-3 flex items-center gap-4 hover:border-purple-500 hover:bg-purple-500/10 transition-all"
            >
              <i className="devicon-github-original text-4xl"></i>
              <span className="text-zinc-400">https://github.com</span>
            </a>

            <a
              href="https://gx.games/pt-br/games/111zaz/cangarcero-vs-alien-2-0/tracks/0f076798-49af-4bd3-ae8b-295d8be890d6/"
              target="_blank"
              className="border border-zinc-700 rounded-xl px-4 py-3 flex items-center gap-4 hover:border-purple-500 hover:bg-purple-500/10 transition-all"
            >
              <i className="devicon-unity-original text-4xl"></i>
              <span className="text-zinc-400">https://gx.games</span>
            </a>
          </div>
        </motion.section>

        {/* CONTATO */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="rounded-3xl border border-zinc-800 bg-black/40 p-6 group hover:border-purple-500 transition-all duration-300"
        >
          <div className="grid grid-cols-1 md:grid-cols-[120px_1fr_1fr_1fr] gap-4 items-center">
            <div className="md:border-r border-zinc-800 pr-4 font-semibold">
              Contato
            </div>

            <a
              href={`https://wa.me/5585986741486?text=${encodeURIComponent(
                'Olá! Vi seu currículo virtual pelo seu portfólio, podemos marcar uma conversa?'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                border border-zinc-700 rounded-xl px-4 py-3 text-center
                hover:border-purple-500 hover:bg-purple-500/10
                transition-all duration-300
              "
            >
              (85) 98674-1486
            </a>

            <a
              href="mailto:talysonroberto.05@gmail.com"
              target="_blank"
              className="
                border border-zinc-700 rounded-xl px-4 py-3 text-center
                hover:border-purple-500 hover:bg-purple-500/10
                transition-all duration-300 truncate
              "
            >
              talysonroberto.05@gmail.com
            </a>

            <a
              href="https://linkedin.com/in/talyson-roberto"
              target="_blank"
              className="border border-zinc-700 rounded-xl px-4 py-3 text-center hover:border-purple-500 hover:bg-purple-500/10 transition-all"
            >
              https://www.linkedin.com
            </a>
          </div>
        </motion.section>

        {/* BOTÃO PDF */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center pt-4 mb-10"
        >
          <a
            href="/Curriculo Talyson Roberto.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-8 py-4
              rounded-2xl
              border border-purple-500
              bg-purple-600/20
              hover:bg-purple-600
              transition-all
              duration-300
              text-white
              font-semibold
              hover:scale-105
              shadow-lg shadow-purple-500/20
            "
          >
            Baixar PDF
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}
