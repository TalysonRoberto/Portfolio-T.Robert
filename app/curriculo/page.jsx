'use client';

import {} from 'framer-motion';

import SectionHeader from '@/components/SectionHeader';
import CurriculoPage from './components/CurriculoPage';

export default function Curriculo() {
  return (
    <div className="relative w-full h-full flex flex-col items-center overflow-hidden">
      <div className="relative w-full h-full flex flex-col items-center overflow-hidden">
        <CurriculoPage />
      </div>
      <SectionHeader title="Currículo" />
    </div>
  );
}
