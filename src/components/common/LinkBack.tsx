import {ArrowUturnLeftIcon} from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';

type Props = {
  link: string;
  text: string;
};

export const LinkBack = ({ link, text }: Props) => {
  return (
    <div className='mb-4 flex items-center justify-between'>
      <Link href={link} className=' text-primary-500 hover:text-primary-600'>
        <ArrowUturnLeftIcon className='h-5 w-5' />
        <span>{text}</span>
      </Link>
    </div>
  );
};
