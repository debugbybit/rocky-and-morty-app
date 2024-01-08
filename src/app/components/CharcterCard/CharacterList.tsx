import React, { useEffect, useState } from 'react';

import { usePagination } from '@/hooks/PaginationContext';

import Filter from '@/app/components/Filter/Filter';
import Pagination from '@/app/components/Pagination';
import Search from '@/app/components/Search';

import Character from './Character';
import Loader from '../Loader';

const CharacterList: React.FC = () => {
  const { page } = usePagination();
  const [pageNumber, updatePageNumber] = useState(1);
  const [status, updateStatus] = useState<string>('');
  const [gender, updateGender] = useState<string>('');
  const [species, updateSpecies] = useState<string>('');
  const [fetchedData, updateFetchedData] = useState<any>([]);
  const [search, setSearch] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { info, results } = fetchedData;

  const api = `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      setIsLoading(true);
      const data1 = await fetch(api).then((res) => res.json());
      updateFetchedData(data1);
      setIsLoading(false);
    })();
  }, [api]);

  return (
    <div className='container mx-auto mt-8 p-4'>
      <div className='mb-8 flex flex-col items-center md:flex-row justify-between'>
        
        <div className='flex items-center justify-center md:justify-end w-full'>
          <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
        </div>
      </div>
      <div className='flex flex-col-reverse md:flex-row'>
        <div className='md:flex-grow'>
          {isLoading ? (
            <Loader />
          ) : results && results.length > 0 ? (
            <>
              <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {results.map((item: any) => (
                  <Character item={item} key={item.id} />
                ))}
              </div>
              <div className='mt-4 flex justify-center'>
                <Pagination info={info} />
              </div>
            </>
          ) : (
            <div className='text-center text-gray-500'>No data available.</div>
          )}
        </div>
        <Filter
          pageNumber={pageNumber}
          updateStatus={updateStatus}
          updateGender={updateGender}
          updateSpecies={updateSpecies}
          updatePageNumber={updatePageNumber}
        />
      </div>
    </div>
  );
};

export default CharacterList;
