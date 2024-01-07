// CharacterList.tsx
import React, { useEffect, useState } from 'react';

import { usePagination } from '@/hooks/PaginationContext';

import Filter from '@/app/components/Filter';
import Pagination from '@/app/components/Pagination';

import Character from './Character';
import Loader from './Loader';

const CharacterList: React.FC = () => {
  const { page, setPage } = usePagination();
  const [pageNumber, updatePageNumber] = useState(1);
  const [status, updateStatus] = useState<string>('');
  const [gender, updateGender] = useState<string>('');
  const [species, updateSpecies] = useState<string>('');
  const [fetchedData, updateFetchedData] = useState<any>([]);
  const [search, setSearch] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { info, results } = fetchedData;

  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      setIsLoading(true);
      const data1 = await fetch(api).then((res) => res.json());
      updateFetchedData(data1);
      setIsLoading(false);
    })();
  }, [api]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Filter
            pageNumber={pageNumber}
            updateStatus={updateStatus}
            updateGender={updateGender}
            updateSpecies={updateSpecies}
            updatePageNumber={updatePageNumber}
          />
          <section className='mx-auto w-[90%] max-w-[1440px]'>
            <div className='my-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
              {results?.map((item: any) => (
                <Character item={item} key={item.id} />
              ))}
            </div>
          </section>
          <div className='mt-4 flex justify-center'>
            <Pagination
              info={info}
              pageNumber={pageNumber}
              updatePageNumber={updatePageNumber}
            />
          </div>
        </>
      )}
    </>
  );
};

export default CharacterList;
