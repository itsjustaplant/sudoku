export type TGame = {
  time: number,
  isWin: boolean,
  date: string
}

export interface ICellData {
  value: number,
  isEditable: boolean
}

export enum ButtonTheme {
  RED,
  BLUE
}
