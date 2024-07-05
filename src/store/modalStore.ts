import { TModalStore } from '@/types';

import { create } from 'zustand';

const useModalStore = create<TModalStore>((set, get) => ({
  isModalVisible: false,
  toggleModal: () => {
    const {
      isModalVisible
    } = get();
    set(() => ({ isModalVisible: !isModalVisible }));
  }
}));

export default useModalStore;
