const getBorderClassnameByRow = (r: number) => {
  switch(true) {
    case r === 0:
      return 'border-t-2 border-t-dark-border';
    case (r + 1) % 3 === 0 || r === 8:
      return 'border-t-[1px] border-b-2 border-b-dark-border';
    case r % 3 === 0:
      return '';  
    default:
      return 'border-t-[1px]'  
  }
}

const getBorderClassnameByColumn = (c: number) => {
  switch(true) {
    case c === 0:
      return 'border-l-2 border-l-dark-border';
    case (c + 1) % 3 === 0 || c === 8:
      return 'border-l-[1px] border-r-dark-border border-r-2';
    case c % 3 === 0:
      return '';  
    default:
      return 'border-l-[1px]';    
  }
}

export {
  getBorderClassnameByColumn,
  getBorderClassnameByRow
}