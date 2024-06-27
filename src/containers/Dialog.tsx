'use client';

import { ButtonTheme } from '@/types';

import React from 'react';

import useGameStore from '@/store/store';
import { Button } from '@/components';

const Dialog = () => {
  const { isModalVisible, toggleModal, initBoard } = useGameStore();

  const handleClose = () => {
    toggleModal();
  };

  const handleConfirm = () => {
    initBoard();
    handleClose();
  };

  return (
    <div onClick={handleClose} className={`bg-overlay top-0 left-0 h-full absolute transition-opacity ${isModalVisible ? 'w-full' : 'w-0'} ${isModalVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div onClick={(e: React.MouseEvent) => e.stopPropagation()} className="flex flex-col w-[360px] fixed translate-y-[-50%] translate-x-[-50%] top-2/4 left-2/4 bg-white rounded-md border-[1px] border-border-dark p-4">
        <h2 className='font-bold'>Surrender?</h2>
        <p className='text-sm text-neutral-700'>Get back here!</p>
        <Button onClick={handleConfirm} theme={ButtonTheme.GHOST} className="w-[auto] ml-auto mt-4 px-6 py-2 text-sm">
          Surrender
        </Button>
      </div>
    </div>
  );
};

export default Dialog;
