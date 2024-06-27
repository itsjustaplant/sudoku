'use client';

import { ButtonTheme } from '@/types';

import { PropsWithChildren } from 'react';

interface IButtonProps {
  onClick: () => void,
  theme: ButtonTheme
}

const Button = (props: PropsWithChildren<IButtonProps>) => {
  const { onClick, children, theme } = props;

  return (
    <button className={`flex justify-center items-center w-10 h-10 rounded-md transition-all duration-300 ${theme === ButtonTheme.BLUE ? 'hover:bg-blue-button-hover' : 'hover:bg-red-button-hover'} text-cell-editable`} onClick={() => onClick()}>{children}</button>
  );
};

export default Button;
