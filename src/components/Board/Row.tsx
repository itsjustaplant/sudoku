import Cell from './Cell';

import { CellData } from '../types';

interface RowProps {
  rowNumber: number,
  rowData: CellData[],
  answerData: number[]
}

const Row = (props: RowProps) => {
  const { rowNumber, rowData, answerData } = props;

  return (
    <div className="flex flex-row">
      {rowData.map((d, index) => (
        <Cell
          key={index}
          rowNumber={rowNumber}
          columnNumber={index}
          value={d.value}
          answer={answerData[index]}
          isEditable={d.isEditable}
        />
      ))}
    </div>
  );
};

export default Row;
