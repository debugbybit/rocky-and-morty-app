import React, { useEffect, useState } from 'react';

import Loader from '../Loader';

const EpisodeCard = ({ episodeData }: { episodeData: any }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (episodeData) {
      setLoading(false);
    }
  }, [episodeData]);

  return (
    <div className='episode-card max-h-96 overflow-y-auto rounded-md border border-gray-300 p-4 shadow-md'>
      {loading ? (
        <div className='loader'>
          <Loader />
        </div>
      ) : (
        <>
          <h2 className='mb-2 text-xl font-bold'>{episodeData.name}</h2>
          <p className='mb-2 text-gray-600'>{episodeData.air_date}</p>
          <p className='mb-4 text-gray-600'>{episodeData.episode}</p>
        </>
      )}
    </div>
  );
};

export default EpisodeCard;
