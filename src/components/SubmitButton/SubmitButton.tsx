'use client';

import useGameStore from '@/store/store';
import { submit } from '@/app/actions';
import { GAME_STATUS } from '@/game/Sudoku';

import { CellData } from '../types';

const SubmitButton = () => {
  const {
    board, answer, timer, setGameStatus
  } = useGameStore();

  const handleSubmit = async () => {
    const sanitizedBoard = board.map((row: CellData[]) => row.map((r) => r.value));
    const isFinished = !sanitizedBoard.some((row: number[]) => row.some((r) => r === 0));
    if (isFinished) {
      const isWin = JSON.stringify(sanitizedBoard) === JSON.stringify(answer);
      const newGameStatus = isWin ? GAME_STATUS.WIN : GAME_STATUS.LOSS;

      setGameStatus(newGameStatus);
      await submit({ timer, isWin });
    }
  };

  return (
  <button onClick={handleSubmit} className='text-white bg-editable-cell rounded py-2 mt-2 hover:bg-dark-non-editable-cell transition-all duration-300 border-0'>
    Submit
  </button>
  );
};

export default SubmitButton;
