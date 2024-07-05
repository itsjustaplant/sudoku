import { GAME_STATUS, TGameStore } from '@/types';

import { create } from 'zustand';

import Sudoku from '@/game/Sudoku';
import { getGame, addGame, updateGame } from '@/db/actions';

// TODO: separate into 3 parts and remove global isEditable and add typings for board and answer
const useGameStore = create<TGameStore>((set, get) => ({
  board: [...Array(9)].map((e) => Array(9).fill({ value: 0, isEditable: true })),
  time: 0,
  selectedRow: 0,
  selectedColumn: 0,
  isEditable: false,
  isGameOn: false,
  answer: [...Array(9)].map((e) => Array(9).fill(' ')),
  gameStatus: GAME_STATUS.INITIALIZED,
  initBoard: async (reset: boolean = false) => {
    const lastGame = await getGame();

    // visit again
    if (!reset && lastGame) {
      const { board, answer, time } = lastGame;
      set(() => ({
        board,
        answer,
        time,
        isEditable: board && board[0][0].isEditable,
        isGameOn: false,
        gameStatus: GAME_STATUS.INITIALIZED,
      }));
    } else {
      const game = new Sudoku();
      // eslint-disable-next-line max-len
      const tempBoard = game?.mat?.map((row) => row.map((v) => ({ value: v, isEditable: v === 0 })));

      set(() => ({
        board: tempBoard,
        answer: game?.answer,
        isEditable: !game.mat[0][0],
        isGameOn: false,
        gameStatus: GAME_STATUS.INITIALIZED,
        time: 0
      }));

      if (reset) { // reset
        updateGame({ board: tempBoard, answer: game?.answer, time: lastGame?.time || 0 });
      } else { // first time
        addGame({ board: tempBoard, answer: game?.answer, time: 0 });
      }
    }
  },
  setSelectedCell: (r: number, c: number, f: boolean) => {
    set(() => ({ selectedRow: r, selectedColumn: c, isEditable: f }));
  },
  setCellValue: (v: number) => {
    const {
      board, selectedRow, selectedColumn, isEditable, answer, time
    } = get();
    if (isEditable) {
      const tempBoard = structuredClone(board);
      tempBoard[selectedRow][selectedColumn].value = v;
      set(() => ({ board: tempBoard, isGameOn: true }));
      updateGame({ board: tempBoard, answer, time });
    }
  },
  setGameStatus: (newStatus: GAME_STATUS) => {
    set(() => ({ gameStatus: newStatus, isGameOn: false }));
  },
  setTimer: (t: number) => {
    set(() => ({ time: t }));
  },
  getSelectedCellValue: () => {
    const { board, selectedRow, selectedColumn } = get();
    return board[selectedRow][selectedColumn]?.value || 0;
  }
}));

export default useGameStore;
