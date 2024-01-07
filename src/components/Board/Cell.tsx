import useGameStore from '@/store/store';
import { getBorderClassnameByColumn, getBorderClassnameByRow } from './utils';

interface CellProps {
  rowNumber: number
  columnNumber: number
  value: number,
  isEditable: boolean
}

const Cell = (props: CellProps) => {
  const {
    rowNumber, columnNumber, value, isEditable
  } = props;
  const { selectedRow, selectedColumn, setSelectedCell } = useGameStore();

  const isSelected = rowNumber === selectedRow && selectedColumn === columnNumber;
  const rowClassname = getBorderClassnameByRow(rowNumber);
  const columnClassname = getBorderClassnameByColumn(columnNumber);
  const cellTextClassname = isEditable ? 'text-editable-cell' : 'text-non-editable-cell';
  const backgroundClassname = isSelected ? 'bg-key-hover' : 'bg-white';

  const handleClick = () => {
    setSelectedCell(rowNumber, columnNumber, isEditable);
  };

  return (
    <div
      onClick={handleClick}
      className={`text-3xl leading-[45px] text-center h-[45px] w-[45px] border-light-border border-solid cursor-pointer transition-all duration-300 ${cellTextClassname} ${rowClassname} ${columnClassname} ${backgroundClassname}`}
    >
      {value === 0 ? ' ' : value}
    </div>
  );
};

export default Cell;
