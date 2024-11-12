import {PhotoIcon} from '@heroicons/react/24/outline';

import React from 'react';

type Props = {
  title: string;
  id: string;
  children: React.ReactNode;
};

export const InputFile = ({ children, id, title }: Props) => {
  return (
    <div className='w-full   pb-3 '>
      <span className='text-sm text-gray-700 dark:text-gray-400'>{title}</span>
      <label
        htmlFor={id}
        className=' flex py-12 h-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 dark:border-osc-200'
      >
        <PhotoIcon className='h-5 w-5' />
        <span className='text-sm'>Seleccionar archivo</span>
      </label>
      {children}
    </div>
  );
};
