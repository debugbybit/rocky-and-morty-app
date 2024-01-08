import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { ItemObj } from '../stateTypes/characterTypes';

interface ICharacterProps {
  item: ItemObj;
  page: string;
}

const Character = ({ item, page }: ICharacterProps) => {
  const { id } = item;

  return (
    <Link className='cursor-pointer' href={`${page}${id}`}>
      <div className='col-lg-4 col-md-6 col-sm-6 col-12 position-relative text-dark mb-4 transition-transform transform hover:scale-105'>
        <article
          className='flex cursor-default flex-col items-center rounded-sm bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md'
          key={item.id}
        >
          <div className='flex w-full items-center justify-center overflow-hidden rounded-sm bg-gray-100 transition-all duration-300 hover:bg-gray-200'>
            <Image
              src={item.image}
              alt={item.name}
              width={270}
              height={270}
              objectFit='cover'
              loading='lazy'
            />
          </div>
          <span className='my-4 block h-[1px] w-full bg-neutral-200'></span>
          <section className='flex flex-col gap-y-2 px-1 text-center text-neutral-800'>
            <h2 className='text-xl font-bold leading-none'>{item.name}</h2>
            <div className='flex w-full items-center gap-x-2 text-sm capitalize'>
              <div className='relative flex h-2.5 w-2.5 items-center justify-center'>
                <span
                  className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${
                    (item.status.toLowerCase() === 'unknown' && 'bg-[#A8A8A8]') ||
                    (item.status.toLowerCase() === 'alive' && 'bg-[#8FB073]') ||
                    (item.status.toLowerCase() === 'dead' && 'bg-[#B9535D]')
                  }`}
                ></span>
                <span
                  className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
                    (item.status.toLowerCase() === 'unknown' && 'bg-[#A8A8A8]') ||
                    (item.status.toLowerCase() === 'alive' && 'bg-[#8FB073]') ||
                    (item.status.toLowerCase() === 'dead' && 'bg-[#B9535D]')
                  }`}
                ></span>
              </div>
              <span className='text-sm text-neutral-700'>
                {item.status} - {item.species}
              </span>
            </div>
            <div className='text-sm'>
              <span className='block font-bold text-neutral-700'>Origin:</span>
              <span className='block capitalize'>{item.origin.name}</span>
            </div>
            <div className='text-sm'>
              <span className='block font-bold text-neutral-700'>
                Last known location:
              </span>
              <span className='block capitalize'>{item.location.name}</span>
            </div>
          </section>
        </article>
      </div>
    </Link>
  );
};

export default Character;
