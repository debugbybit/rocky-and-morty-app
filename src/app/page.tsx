'use client';
import * as React from 'react';

import { PaginationProvider } from '@/hooks/PaginationContext';

import CharacterList from '@/app/components/CharcterCard/CharacterList';

export default function HomePage() {
  return (
    <PaginationProvider>
      <div>
        <CharacterList />
      </div>
    </PaginationProvider>
  );
}
