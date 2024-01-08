import { Collapse } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUp } from 'react-feather';

interface InputGroupProps {
  name: string;
  changeID: (value: number) => void;
  total: number;
  selectedValue: any;
}

const InputGroup: React.FC<InputGroupProps> = ({
  name,
  changeID,
  total,
  selectedValue: initialSelectedValue, 
}) => {
  const [expanded, setExpanded] = useState(false);
  const [selectedValue, setSelectedValue] = useState(initialSelectedValue);
  const collapseRef = useRef<HTMLDivElement>(null);

  const handleItemClick = (value: string) => {
    setSelectedValue(value);
    changeID(Number(value));
    setExpanded(false);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      collapseRef.current &&
      !collapseRef.current.contains(event.target as Node)
    ) {
      setExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    setSelectedValue(initialSelectedValue);
  }, [total, initialSelectedValue]);

  return (
    <div className='relative mb-3'>
      <label className='text-sm font-medium text-gray-700'>{name}</label>
      <div className='relative' ref={collapseRef}>
        <button
          onClick={() => setExpanded(!expanded)}
          className='group flex w-full items-center justify-between rounded-md border border-gray-300 bg-white p-2 transition-all duration-300 hover:bg-gray-100 focus:border-blue-300 focus:outline-none focus:ring'
        >
          <span className='truncate'>
            {name} - {`${selectedValue}`}
          </span>
          <span className='ml-2'>
            {expanded ? (
              <ArrowUp size={16} className='text-gray-700' />
            ) : (
              <ArrowDown size={16} className='text-gray-700' />
            )}
          </span>
        </button>
        <Collapse
          in={expanded}
          timeout='auto'
          unmountOnExit
          className='absolute left-0 top-full z-50 w-full overflow-hidden rounded-md bg-white shadow-md transition-all duration-300'
        >
          <div className='border-t border-gray-300'>
            {Array.from({ length: total }).map((_, index) => (
              <button
                key={(index + 1).toString()} // Use a unique identifier for the key
                onClick={() => handleItemClick((index + 1).toString())}
                className={`w-full cursor-pointer text-left ${
                  selectedValue === (index + 1).toString()
                    ? 'font-bold text-blue-500'
                    : 'text-gray-700'
                } truncate p-2 transition-all duration-300 hover:bg-gray-100 focus:outline-none`}
              >
                {name} - {index + 1}
              </button>
            ))}
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default InputGroup;
