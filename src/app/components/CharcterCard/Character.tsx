import Image from 'next/image';
import React from 'react';

import { item } from '../stateTypes/characterTypes';

interface ICharacterProps {
  item: item;
}

const Character = ({ item }: ICharacterProps) => {
  return (
    <article className='cursor-default rounded-sm bg-white p-4 shadow-sm flex flex-col items-center' key={item.id}>
      <div className='overflow-hidden rounded-sm bg-gray-100 flex items-center justify-center w-full'>
        <Image
          src={item.image}
          alt={item.name}
          width={270}
          height={270}
          objectFit='cover'
          loading='lazy'
        />
      </div>
      <span className="block w-full h-[1px] my-4 bg-neutral-200"></span>
      <section className="flex flex-col gap-y-2 px-1 text-neutral-800 text-center">
        <h2 className="text-xl font-bold leading-none">{item.name}</h2>
        <div className="flex w-full items-center gap-x-2 text-sm capitalize">
          <div className="relative flex h-2.5 w-2.5 items-center justify-center">
            <span
              className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${
                (item.status.toLowerCase() === "unknown" && "bg-[#A8A8A8]") ||
                (item.status.toLowerCase() === "alive" && "bg-[#8FB073]") ||
                (item.status.toLowerCase() === "dead" && "bg-[#B9535D]")
              }`}
            ></span>
            <span
              className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
                (item.status.toLowerCase() === "unknown" && "bg-[#A8A8A8]") ||
                (item.status.toLowerCase() === "alive" && "bg-[#8FB073]") ||
                (item.status.toLowerCase() === "dead" && "bg-[#B9535D]")
              }`}
            ></span>
          </div>
          <span className="text-sm text-neutral-700">
            {item.status} - {item.species}
          </span>
        </div>
        <div className="text-sm">
          <span className="block font-bold text-neutral-700">Origin:</span>
          <span className="block capitalize">{item.origin.name}</span>
        </div>
        <div className="text-sm">
          <span className="block font-bold text-neutral-700">
            Last known location:
          </span>
          <span className="block capitalize">{item.location.name}</span>
        </div>
      </section>
    </article>
  );
};

export default Character;
