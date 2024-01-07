import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import { usePagination } from '@/hooks/PaginationContext';

interface PaginationProps {
  info: { pages?: number };
}

const Pagination: React.FC<PaginationProps> = ({ info }) => {
  const { page, setPage } = usePagination();

  const pageChange = (data: { selected: number }) => {
    setPage(data.selected + 1);
  };

  const [width, setWidth] = useState(window.innerWidth);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const isMobile = width <= 500;

  return (
    <div className='my-4 flex justify-center'>
      <ReactPaginate
        containerClassName={`flex ${isMobile ? 'flex-col' : 'space-x-4'}`}
        pageClassName='rounded-full cursor-pointer transition-all duration-300 hover:bg-blue-500 hover:text-white flex items-center justify-center'
        previousClassName={`rounded-full cursor-pointer transition-all duration-300 ${
          page === 1 ? 'bg-gray-300 text-gray-500' : 'bg-blue-500 text-white'
        } px-4 py-2 ${isMobile ? 'mb-2' : ''}`}
        nextClassName={`rounded-full cursor-pointer transition-all duration-300 ${
          page === info?.pages
            ? 'bg-gray-300 text-gray-500'
            : 'bg-blue-500 text-white'
        } px-4 py-2 ${isMobile ? 'mt-2' : ''}`}
        activeClassName='bg-blue-500 text-white'
        pageLinkClassName={`px-4 py-2 flex items-center justify-center ${
          isMobile ? 'mb-2' : ''
        }`}
        previousLabel={isMobile ? '<' : 'Prev'}
        forcePage={page === 1 ? 0 : page - 1}
        nextLabel={isMobile ? '>' : 'Next'}
        pageCount={info?.pages || 0}
        onPageChange={pageChange}
      />
    </div>
  );
};

export default Pagination;
