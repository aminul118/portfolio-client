import { Children } from '@/types';
import React from 'react';

type classNameProps = Children & {
  className?: string;
  id?: string;
  backgroundColor?: string;
};

const SectionContainer = ({
  children,
  className,
  backgroundColor,
  id,
}: classNameProps) => {
  return (
    <section id={id} className={backgroundColor}>
      <div
        className={`py-8 lg:py-14 xl:py-16 2xl:py-24 px-2 mx-auto  ${className}`}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
