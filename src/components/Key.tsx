'use client';

import { KeyTheme } from '@/types';

import { PropsWithChildren } from 'react';

interface IKeyProps {
  onClick: () => void,
  theme: KeyTheme
}

const Key = (props: PropsWithChildren<IKeyProps>) => {
  const { onClick, children, theme } = props;

  return (
    <button className={`flex justify-center items-center w-10 h-10 rounded-md transition-all duration-300 ${theme === KeyTheme.BLUE ? 'hover:bg-blue-key-hover' : 'hover:bg-red-key-hover'} text-cell-editable`} onClick={() => onClick()}>{children}</button>
  );
};

export default Key;
