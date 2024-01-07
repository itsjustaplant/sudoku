'use client';

import useGameStore from '@/store/store';

interface KeyProps {
  value: number
}

const Key = (props: KeyProps) => {
  const { value } = props;
  const { setCellValue } = useGameStore();

  const handleClick = () => {
    setCellValue(value);
  };

  return (
    <button className='w-10 h-10 rounded-md transition-all duration-300 hover:bg-key-hover' onClick={handleClick}>{value}</button>
  );
};

export default Key;
