'use client';

import { ICellData } from '@/types';

import { useEffect } from 'react';

import useGameStore from '@/store/store';
import Row from './Row';

const Board = () => {
  const { board, answer, initBoard } = useGameStore();

  useEffect(() => {
    initBoard();
  }, [initBoard]);

  return (
    <div className="w-[405px] h-[405px]">
      {board.map((row: ICellData[], index: number) => (
        <Row key={index} rowNumber={index} rowData={row} answerData={answer[index]}/>
      ))}
    </div>
  );
};

export default Board;
