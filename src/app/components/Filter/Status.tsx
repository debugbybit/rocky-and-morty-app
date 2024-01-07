import { Collapse } from '@mui/material';
import React, { useEffect, useRef,useState } from 'react';
import { ArrowDown, ArrowUp } from 'react-feather';

interface StatusProps {
  updateStatus: (input: string) => void;
  updatePageNumber: (pageNumber: number) => void;
}

const Status: React.FC<StatusProps> = ({ updateStatus, updatePageNumber }) => {
  const statusOptions = ['Alive', 'Dead', 'Unknown'];
  const [selectedStatus, setSelectedStatus] = useState('');
  const [expanded, setExpanded] = useState(false);
  const collapseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (collapseRef.current && !collapseRef.current.contains(event.target as Node)) {
        setExpanded(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleClick = (status: string) => {
    setSelectedStatus(status);
    updateStatus(status);
    updatePageNumber(1);
    setExpanded(false);
  };

  return (
    <div className='w-full mt-4'>
      <label className='mb-1 text-sm font-medium text-gray-700'>Status</label>
      <div className='relative' ref={collapseRef}>
        <button
          onClick={() => setExpanded(!expanded)}
          className='group flex w-full items-center justify-between rounded-md border border-blue-500 bg-white p-2 transition-all duration-300 hover:bg-blue-500 hover:text-white focus:border-blue-300 focus:outline-none focus:ring'
        >
          <span className='truncate'>
            {selectedStatus || 'Filter by Status...'}
          </span>
          <span className='ml-2'>
            {expanded ? (
              <ArrowUp
                size={16}
                className='text-gray-700 group-hover:text-white'
              />
            ) : (
              <ArrowDown
                size={16}
                className='text-gray-700 group-hover:text-white'
              />
            )}
          </span>
        </button>
        <Collapse
          in={expanded}
          timeout='auto'
          unmountOnExit
          className='absolute left-0 top-full z-50 w-full overflow-hidden rounded-md bg-white shadow-md transition-all duration-300'
        >
          <div className='border-t border-gray-300 p-2'>
            {statusOptions.map((item, index) => (
              <button
                key={index}
                onClick={() => handleClick(item)}
                className={`w-full cursor-pointer text-left ${
                  selectedStatus === item
                    ? 'font-bold text-blue-500'
                    : 'text-gray-700'
                } truncate p-2 transition-all duration-300 hover:bg-gray-100 focus:outline-none`}
              >
                {item}
              </button>
            ))}
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default Status;
