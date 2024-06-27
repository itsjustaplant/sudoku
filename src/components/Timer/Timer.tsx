'use client';

import { useEffect } from 'react';
import useGameStore from '@/store/store';
import { getFormattedDate } from './utils';

const Timer = () => {
  const { isGameOn, time, setTimer } = useGameStore();

  useEffect(() => {
    let interval: any = null;

    if (isGameOn) {
      interval = setInterval(() => {
        setTimer(time + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isGameOn, time, setTimer]);

  return (
    <div className="text-right tabular-nums">{getFormattedDate(time)}</div>
  );
};

export default Timer;
