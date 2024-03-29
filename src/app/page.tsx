'use client';
import * as React from 'react';

import { PaginationProvider } from '@/hooks/PaginationContext';

import CharacterList from '@/app/components/CharcterCard/CharacterList';

import Navbar from './components/Navbar';


export default function HomePage() {
  return (
    <PaginationProvider>
      <Navbar />
      <div>
        <CharacterList />
      </div>
    </PaginationProvider>
  );
}
