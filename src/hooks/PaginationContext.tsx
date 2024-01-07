import React, { createContext, useContext, useState } from 'react';

import { PaginationProviderProps } from './stateTypes/paginationTypes';

interface PaginationContextType {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const PaginationContext = createContext<PaginationContextType | null>(null);

export const PaginationProvider = ({ children }:PaginationProviderProps) => {
    const [page, setPage] = useState<number>(1);
  
    const value: PaginationContextType = {
      page,
      setPage,
    };
  
    return (
      <PaginationContext.Provider value={value}>
        {children}
      </PaginationContext.Provider>
    );
  };

export const usePagination = (): PaginationContextType => {
  const context = useContext(PaginationContext);
  if (!context) {
    throw new Error('usePagination must be used within a PaginationProvider');
  }
  return context;
};
