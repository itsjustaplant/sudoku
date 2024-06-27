import { ButtonTheme } from '@/types';

const getButtonClassname = (theme: ButtonTheme): string => {
  switch (theme) {
    case ButtonTheme.BLUE:
      return 'hover:bg-blue-button-hover text-cell-editable';
    case ButtonTheme.RED:
      return 'hover:bg-red-button-hover';
    case ButtonTheme.GHOST:
      return 'hover:bg-neutral-800 bg-black text-white';
    default:
      return '';
  }
};

export default getButtonClassname;
