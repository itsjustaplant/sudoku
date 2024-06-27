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

export default getBorderClassnameByColumn;
