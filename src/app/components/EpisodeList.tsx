import React, { ChangeEvent,useEffect, useState } from 'react';

import Character from './CharcterCard/Character';
import InputGroup from './helpers/InputGroup';
import Loader from './Loader';

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
}

const Episodes: React.FC = () => {
  const [results, setResults] = useState<Character[]>([]);
  const [info, setInfo] = useState<any>({});
  const { air_date, episode, name } = info;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [id, setID] = useState<number>(1);

  const api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      setIsLoading(true);
      const data = await fetch(api).then((res) => res.json());
      setInfo(data);

      const characterData = await Promise.all(
        data.characters.map((x: string) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setIsLoading(false);
      setResults(characterData);
    })();
  }, [api]);

  return (
    <div className='container mx-auto mt-8 p-4'>
      <div className='mb-3 text-center'>
        <h1 className='mb-3 text-3xl font-bold'>
          Episode Name:{' '}
          <span className='text-primary'>{name === '' ? 'Unknown' : name}</span>
        </h1>
        <h5 className='text-lg font-semibold'>
          Air Date: {air_date === '' ? 'Unknown' : air_date}
        </h5>
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <div className='flex flex-wrap'>
          <div className='w-full md:w-9/12'>
            <div className='md:flex-grow'>
              {results && results.length > 0 ? (
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                  {results.map((item: any) => (
                    <Character item={item} key={item.id} />
                  ))}
                </div>
              ) : (
                <div className='text-center text-gray-500'>
                  No data available.
                </div>
              )}
            </div>
          </div>

          <div className='container mx-auto mt-8 p-2 sm:p-2 lg:w-1/4'>
            <div className='mb-2 text-center'>
              <h4 className='text-lg font-semibold'>Pick Episode</h4>
            </div>
            <InputGroup selectedValue={id} name='Episode' changeID={setID} total={51} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Episodes;
