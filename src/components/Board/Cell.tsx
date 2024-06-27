import useGameStore from '@/store/store';
import {
  getBorderClassnameByColumn,
  getBorderClassnameByRow,
  getBackgroundClassname,
  getColorClassname,
} from './utils';

interface CellProps {
  rowNumber: number;
  columnNumber: number;
  value: number;
  isEditable: boolean;
  answer: number;
}

const Cell = (props: CellProps) => {
  const {
    rowNumber, columnNumber, value, isEditable, answer
  } = props;
  const {
    selectedRow, selectedColumn, setSelectedCell, getSelectedCellValue
  } = useGameStore();

  const selectedCellValue = getSelectedCellValue();
  const isSelected = rowNumber === selectedRow && selectedColumn === columnNumber;
  const isBlushed = !isSelected
    && (rowNumber === selectedRow
      || columnNumber === selectedColumn
      || (!!value && selectedCellValue === value));
  const isErrored = !!value && value !== answer;

  const rowClassname = getBorderClassnameByRow(rowNumber);
  const columnClassname = getBorderClassnameByColumn(columnNumber);
  const cellTextClassname = getColorClassname(isErrored, isEditable);
  const backgroundClassname = getBackgroundClassname(isSelected, isBlushed);

  const handleClick = () => {
    setSelectedCell(rowNumber, columnNumber, isEditable);
  };

  return (
    <div
      onClick={handleClick}
      className={`text-3xl leading-[45px] text-center h-[45px] w-[45px] border-border-light border-solid cursor-pointer transition-all duration-300 ${cellTextClassname} ${rowClassname} ${columnClassname} ${backgroundClassname}`}
    >
      {value === 0 ? ' ' : value}
    </div>
  );
};

export default Cell;
