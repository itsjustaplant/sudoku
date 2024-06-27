'use client';

import { KeyTheme } from '@/types';

import useGameStore from '@/store/store';

import { Key } from '@/components';

const Keyboard = () => {
  const keys = Array.from(Array(9));
  const { setCellValue } = useGameStore();

  const handleClick = (value: number) => {
    setCellValue(value);
  };

  return (
    <div className="w-full flex flex-row justify-around text-3xl font-medium">
      {keys.map((_, i) => (
        <Key onClick={() => handleClick(i + 1)} key={i} theme={KeyTheme.BLUE}>
          <span>{i + 1}</span>
        </Key>
      ))}
    </div>
  );
};

export default Keyboard;
