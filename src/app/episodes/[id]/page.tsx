"use client"
import * as React from 'react';

import { PaginationProvider } from '@/hooks/PaginationContext';

import CharacterDetails from '@/app/components/CharcterCard/CharacterDetails';
import Navbar from '@/app/components/Navbar';


const CharacterDetailsPage: React.FC = () => {

  return (
    <PaginationProvider>
      <Navbar />
      <div>
        <CharacterDetails />
      </div>
    </PaginationProvider>
  );
};

export default CharacterDetailsPage;
