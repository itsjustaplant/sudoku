import { create } from 'zustand';

import { Sudoku, GAME_STATUS } from '@/game/Sudoku';

type TGameStore = {
  board: any,
  answer: number[][],
  time: number,
  selectedRow: number,
  selectedColumn: number,
  isEditable: boolean,
  isGameOn: boolean,
  gameStatus: GAME_STATUS,
  initBoard: () => void,
  setSelectedCell: (r: number, c: number, f: boolean) => void,
  setCellValue: (v: number) => void,
  setGameStatus: (s: GAME_STATUS) => void,
  setTimer: (t: number) => void,
  getSelectedCellValue: () => number
}

const useGameStore = create<TGameStore>((set, get) => ({
  board: [...Array(9)].map((e) => Array(9).fill(' ')),
  time: 0,
  selectedRow: 0,
  selectedColumn: 0,
  isEditable: false,
  isGameOn: false,
  answer: [...Array(9)].map((e) => Array(9).fill(' ')),
  gameStatus: GAME_STATUS.INITIALIZED,
  initBoard: () => {
    const Game = new Sudoku();
    const tempBoard = Game?.mat?.map((row) => row.map((v) => ({ value: v, isEditable: v === 0 })));
    set(() => ({
      board: tempBoard,
      answer: Game?.answer,
      isEditable: !Game.mat[0][0],
      isGameOn: false,
      gameStatus: GAME_STATUS.INITIALIZED
    }));
  },
  setSelectedCell: (r: number, c: number, f: boolean) => {
    set(() => ({ selectedRow: r, selectedColumn: c, isEditable: f }));
  },
  setCellValue: (v: number) => {
    const {
      board, selectedRow, selectedColumn, isEditable
    } = get();
    if (isEditable) {
      const tempBoard = structuredClone(board);
      tempBoard[selectedRow][selectedColumn].value = v;
      set(() => ({ board: tempBoard, isGameOn: true }));
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
