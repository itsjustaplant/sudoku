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

export default getColorClassname;
