import React from 'react';

export interface IChildren {
  children: React.ReactNode;
}

export interface IParams {
  params: Promise<{ slug: string }>;
}

export interface IGlobalError {
  error: Error & { digest?: string };
  reset: () => void;
}
