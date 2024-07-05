'use client';

import { ButtonTheme } from '@/types';

import { useEffect } from 'react';

import { useGameStore, useModalStore } from '@/store';
import { Button } from '@/components';
import { getFormattedDate } from '@/utils';
import { Flag } from '@/icons';

const Toolbar = () => {
  const {
    isGameOn, time, setTimer
  } = useGameStore();

  const { toggleModal } = useModalStore();

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
    toggleModal();
  };

  return (
    <div className="flex justify-between">
      <span>
        <Button onClick={handleReset} theme={ButtonTheme.RED}>
          <Flag />
        </Button>
      </span>
      <span className="tabular-nums text-3xl">{getFormattedDate(time || 0)}</span>
    </div>
  );
};

export default Toolbar;
