'use client';

import { KeyTheme } from '@/types';

import { useEffect } from 'react';

import useGameStore from '@/store/store';
import { Key } from '@/components';
import { getFormattedDate } from '@/utils';
import { Flag } from '@/icons';

const Toolbar = () => {
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

  const handleReset = () => {
    // TODO: add reset logic here
  };

  return (
    <div className="flex justify-between">
      <span>
        <Key onClick={handleReset} theme={KeyTheme.RED}>
          <Flag />
        </Key>
      </span>
      <span className="tabular-nums text-3xl">{getFormattedDate(time)}</span>
    </div>
  );
};

export default Toolbar;
