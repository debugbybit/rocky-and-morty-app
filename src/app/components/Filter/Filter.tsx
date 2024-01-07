import React from 'react';
import { X } from 'react-feather';

import Gender from './Gender';
import Species from './Species';
import Status from './Status';

interface FilterProps {
  pageNumber: number;
  updatePageNumber: (pageNumber: number) => void;
  updateStatus: (input: string) => void;
  updateGender: (input: string) => void;
  updateSpecies: (input: string) => void;
}

const Filter: React.FC<FilterProps> = ({
  pageNumber,
  updatePageNumber,
  updateStatus,
  updateGender,
  updateSpecies,
}) => {
  const clear = () => {
    updateStatus('');
    updateGender('');
    updateSpecies('');
    updatePageNumber(1);
    window.location.reload(0);
  };

  return (
    <div className='container mx-auto mt-8 p-2 sm:p-4 lg:w-1/4'>
      <h3 className='text-primary-700 hover:text-primary-800 focus:ring-primary-300 dark:text-primary-600 dark:hover:text-primary-700 dark:focus:ring-primary-800 inline-flex items-center rounded-lg px-4 py-2.5 text-center text-sm font-medium focus:outline-none focus:ring-4 mb-3'>
        Filters
      </h3>

      <div
        style={{ cursor: 'pointer' }}
        onClick={clear}
        className='mt-2 sm:mt-3 flex cursor-pointer items-center justify-center rounded-md border border-teal-500 bg-teal-500 px-3 sm:px-4 py-2 text-white transition-all duration-300 hover:bg-teal-600 mb-2 sm:mb-4'
      >
        <span className='mr-2'>Clear Filters</span>
        <X size={18} className='text-white' />
      </div>
      <div className='accordion'>
        <Status
          updatePageNumber={updatePageNumber}
          updateStatus={updateStatus}
        />
        <Species
          updatePageNumber={updatePageNumber}
          updateSpecies={updateSpecies}
        />
        <Gender
          updatePageNumber={updatePageNumber}
          updateGender={updateGender}
        />
      </div>
    </div>
  );
};

export default Filter;
