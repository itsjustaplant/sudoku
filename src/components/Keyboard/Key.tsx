"use client"
import { useGameStore } from "@/store/store";

interface KeyProps {
  value: number
}

const Key = (props: KeyProps) => {
  const { value } = props;
  const { setCellValue } = useGameStore();

  const handleClick = () => {
    setCellValue(value);
  }

  return (
    <button onClick={handleClick}>{value}</button>
  )
}

export default Key;
