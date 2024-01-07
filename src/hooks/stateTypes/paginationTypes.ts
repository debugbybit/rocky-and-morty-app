import { ReactNode } from 'react';

export interface PaginationProviderProps {
  children: ReactNode;
}

export interface PaginationContextType {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}
