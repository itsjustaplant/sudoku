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

export default getBackgroundClassname;
