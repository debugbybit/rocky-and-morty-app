import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import EpisodeCard from './EpisodeCard';
import Loader from '../Loader';

const CharacterDetails = () => {
  const { id } = useParams();

  const [fetchedData, updateFetchedData] = useState<any>({});
  const [isFetchDataIsLoading, setIsFetchDataIsLoading] =
    useState<boolean>(true);
  const [episodeInfoArray, setEpisodeInfoArray] = useState<any[] | null>(null);
  const { name, location, origin, gender, image, status, species, episode } =
    fetchedData;

  const api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      setIsFetchDataIsLoading(true);
      try {
        const response = await fetch(api);
        const data = await response.json();
        updateFetchedData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setIsFetchDataIsLoading(false);
    };

    if (id) {
      fetchData();
    }
  }, [api, id]);

  useEffect(() => {
    const fetchEpisodeData = async () => {
      const episodeDataPromises = episode.map(async (episodeUrl: string) => {
        try {
          const episodeResponse = await fetch(episodeUrl);
          const episodeData = await episodeResponse.json();
          return episodeData;
        } catch (error) {
          console.error(
            `Error fetching episode data from ${episodeUrl}:`,
            error
          );
          return null;
        }
      });

      const resolvedEpisodeDataArray = await Promise.all(episodeDataPromises);
      console.log('Fetched Episode Data:', resolvedEpisodeDataArray);

      setEpisodeInfoArray(resolvedEpisodeDataArray);
    };

    if (episode && episode.length > 0) fetchEpisodeData();
  }, [episode]);

  console.log(episodeInfoArray);

  return (
    <div className='container mx-auto my-8'>
      <div className='flex flex-col items-center gap-8'>
        {isFetchDataIsLoading ? (
          <Loader />
        ) : (
          <>
            <h1 className='text-3xl font-bold'>{name}</h1>
            <div className='relative h-40 w-40'>
              <Image
                src={image}
                alt={name}
                layout='fill'
                objectFit='cover'
                className='rounded-full'
              />
            </div>
            <div>
              {status === 'Dead' && (
                <div className='rounded bg-red-500 p-2 text-center text-lg text-white'>
                  {status}
                </div>
              )}
              {status === 'Alive' && (
                <div className='rounded bg-green-500 p-2 text-center text-lg text-white'>
                  {status}
                </div>
              )}
              {status !== 'Dead' && status !== 'Alive' && (
                <div className='rounded bg-gray-500 p-2 text-center text-lg text-white'>
                  {status}
                </div>
              )}
            </div>

            <div className='text-lg'>
              <span className='font-bold'>Gender: </span>
              {gender}
            </div>
            <div className='text-lg'>
              <span className='font-bold'>Location: </span>
              {location?.name}
            </div>
            <div className='text-lg'>
              <span className='font-bold'>Origin: </span>
              {origin?.name}
            </div>
            <div className='text-lg'>
              <span className='font-bold'>Species: </span>
              {species}
            </div>
          </>
        )}
        {/* Display Episode Cards */}
        {episodeInfoArray && episodeInfoArray.length > 0 && (
          <div className='episode-list mt-8'>
            <h2 className='mb-4 text-2xl font-bold'>
              Episodes: {episodeInfoArray.length}
            </h2>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
              {episodeInfoArray.map((episodeData: any, index: number) => (
                <EpisodeCard key={index} episodeData={episodeData} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CharacterDetails;
