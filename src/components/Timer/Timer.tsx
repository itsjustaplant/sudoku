"use client"

import { useEffect, useState } from "react";
import { useGameStore } from "@/store/store";
import { getFormattedDate } from './utils';

const Timer = () => {
  const [time, setTime] = useState(0);
  const { isGameOn, setTimer } = useGameStore();

  useEffect(() => {
    let interval: any = null;
    
    if (isGameOn) {
      interval = setInterval(() => {
        setTime(t => t + 1);
      }, 1000)
    }
    return () => clearInterval(interval);

  }, [isGameOn]);

  useEffect(() => {
    setTimer(time);
  }, [time, setTimer]);

  return (
    <div className="text-right tabular-nums">{getFormattedDate(time)}</div>
  )
}

export default Timer;
