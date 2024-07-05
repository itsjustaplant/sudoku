export interface ICellData {
  value: number;
  isEditable: boolean;
}

export enum ButtonTheme {
  RED,
  BLUE,
  GHOST,
}

export enum GAME_STATUS {
  INITIALIZED,
  WIN,
  LOSS,
}

export type TGameStore = {
  board: ICellData[][];
  answer: number[][];
  time: number;
  selectedRow: number;
  selectedColumn: number;
  isEditable: boolean;
  isGameOn: boolean;
  gameStatus: GAME_STATUS;
  initBoard: (r: boolean) => void;
  setSelectedCell: (r: number, c: number, f: boolean) => void;
  setCellValue: (v: number) => void;
  setGameStatus: (s: GAME_STATUS) => void;
  setTimer: (t: number) => void;
  getSelectedCellValue: () => number;
};

export type TGameDB = Partial<Pick<TGameStore, 'board' | 'answer'>> & {
  id?: string | number
};

export type TModalStore = {
  isModalVisible: boolean;
  toggleModal: () => void;
}
