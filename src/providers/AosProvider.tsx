'use client';

import { IChildren } from '@/types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

const AosProvider = ({ children }: IChildren) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  if (!isClient) return null;

  return <>{children}</>;
};

export default AosProvider;
