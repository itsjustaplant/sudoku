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

export default getBorderClassnameByRow;
