'use client';

import { ButtonTheme } from '@/types';

import { PropsWithChildren } from 'react';

import { getButtonClassname } from '@/utils';

interface IButtonProps {
  onClick?: () => void,
  theme?: ButtonTheme,
  className?: string
}

const Button = (props: PropsWithChildren<IButtonProps>) => {
  const {
    onClick = () => {}, children, theme = ButtonTheme.BLUE, className = ''
  } = props;

  const buttonBackgroundClass = getButtonClassname(theme);

  return (
    <button className={`flex justify-center items-center w-10 h-10 rounded-md transition-all duration-300 ${buttonBackgroundClass} ${className}`} onClick={() => onClick()}>{children}</button>
  );
};

export default Button;
