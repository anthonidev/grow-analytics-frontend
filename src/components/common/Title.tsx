import React from 'react';

type Props = {
  title: string;
  icon?: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
};

export const Title = ({ title, icon: Icon }: Props) => {
  return (
    <h1 className='mb-2 flex items-center border-b pb-1 font-serif text-xl font-bold  uppercase text-gray-900 dark:text-cla lg:text-3xl '>
      {Icon && (
        <div className='mr-2'>
          {<Icon className='h-5  w-5 lg:h-10  lg:w-10 ' />}
        </div>
      )}
      {title}
    </h1>
  );
};
