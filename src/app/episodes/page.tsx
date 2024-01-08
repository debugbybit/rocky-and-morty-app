'use client';
import * as React from 'react';

import { PaginationProvider } from '@/hooks/PaginationContext';

import Episodes from '../components/EpisodeList';
import Navbar from '../components/Navbar';

export default function EpisodePage() {
  return (
    <PaginationProvider>
      <Navbar />
      <div>
        <Episodes />
      </div>
    </PaginationProvider>
  );
}
