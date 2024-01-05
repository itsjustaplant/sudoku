'use client';

import { useEffect } from 'react';

import useGameStore from '@/store/store';
import Row from './Row';
import { CellData } from '../types';

const Board = () => {
  const { board, initBoard } = useGameStore();

  useEffect(() => {
    initBoard();
  }, [initBoard]);

  return (
    <div className="w-[405px] h-[405px]">
      {board.map((row: CellData[], index: number) => (
        <Row key={index} rowNumber={index} rowData={row} />
      ))}
    </div>
  );
};

export default Board;
