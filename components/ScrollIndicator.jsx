'use client';

import React from 'react';

const ScrollIndicator = ({
  activeStep = 0,
  totalSteps = 1,
  position = 'right',
}) => {
  const start = Math.max(0, activeStep - 1);

  const visibleSteps = Array.from({ length: 3 }, (_, i) => start + i).filter(
    (step) => step < totalSteps,
  );

  return (
    <div
      className={`
        absolute
        top-1/2
        -translate-y-1/2
        flex
        flex-col
        items-center
        gap-4
        z-20
        transition-all
        duration-300
        ${position === 'right' ? 'right-4' : 'left-4'}
      `}
    >
      {visibleSteps.map((step, index) => (
        <React.Fragment key={step}>
          <span
            className={`
              text-xl
              md:text-3xl
              font-bold
              transition-all
              duration-300
              ${
                activeStep === step
                  ? 'text-purple-600 scale-110'
                  : 'text-zinc-700'
              }
            `}
          >
            {String(step + 1).padStart(2, '0')}
          </span>

          {index !== visibleSteps.length - 1 && (
            <div className="flex flex-col gap-2">
              <div className="w-1 h-1 rounded-full bg-zinc-600" />
              <div className="w-1 h-1 rounded-full bg-zinc-600" />
              <div className="w-1 h-1 rounded-full bg-zinc-600" />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ScrollIndicator;
