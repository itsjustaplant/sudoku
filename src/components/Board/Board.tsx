"use client"
import { useEffect } from "react";

import Row from "./Row";
import { useGameStore } from "@/store/store";
import { CellData } from "../types";

const Board = () => {
	const { board, initBoard, answer } = useGameStore();

	useEffect(() => {
		initBoard();
	}, [initBoard]);

	const handleSubmit = () => {

	}

	return (
		<div className="w-[405px] h-[405px]">
			{board.map((row: CellData[], index: number) => <Row key={index} rowNumber={index} rowData={row} />)}
		</div>
	)
}

export default Board;
