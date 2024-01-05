"use client"

import { useGameStore } from "@/store/store";
import { submit } from "@/app/actions";
import { GAME_STATUS } from "@/game/Sudoku";

import { CellData } from "../types";

const SubmitButton = () => {
	const { board, answer, timer, setGameStatus } = useGameStore();

	const handleSubmit = async () => {
		const sanitizedBoard = board.map((row: CellData[]) => {
			return row.map(r => r.value)
		})
		const isFinished = !sanitizedBoard.some((row: number[]) => {
			return row.some(r => r === 0);
		});
		if (isFinished) {
			const isWin = JSON.stringify(sanitizedBoard) === JSON.stringify(answer);
			const newGameStatus = isWin ? GAME_STATUS.WIN : GAME_STATUS.LOSS;
  
			setGameStatus(newGameStatus);
			await submit({timer, isWin});
		}
	}

	return (
		<button onClick={handleSubmit}>
      Submit
		</button>
	)
}

export default SubmitButton;
