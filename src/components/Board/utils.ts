const getBorderClassnameByRow = (r: number) => {
  switch (true) {
    case r === 0:
      return 'border-t-2 border-t-border-dark';
    case (r + 1) % 3 === 0 || r === 8:
      return 'border-t-[1px] border-b-2 border-b-border-dark';
    case r % 3 === 0:
      return '';
    default:
      return 'border-t-[1px]';
  }
};

const getBorderClassnameByColumn = (c: number) => {
  switch (true) {
    case c === 0:
      return 'border-l-2 border-l-border-dark';
    case (c + 1) % 3 === 0 || c === 8:
      return 'border-l-[1px] border-r-border-dark border-r-2';
    case c % 3 === 0:
      return '';
    default:
      return 'border-l-[1px]';
  }
};

const getBackgroundClassname = (isSelected: boolean, isBlushed: boolean) => {
  switch (true) {
    case isSelected:
      return 'bg-cell-selected';
    case isBlushed:
      return 'bg-key-hover';
    default:
      return 'bg-white';
  }
};

const getColorClassname = (isErrored: boolean, isEditable: boolean) => {
  switch (true) {
    case isErrored:
      return 'text-cell-error';
    case isEditable:
      return 'text-cell-editable';
    default:
      return 'text-cell-non-editable';
  }
};

export {
  getBorderClassnameByColumn,
  getBorderClassnameByRow,
  getBackgroundClassname,
  getColorClassname
};
