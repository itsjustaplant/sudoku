import { ICellData } from '@/types';

import { Cell } from '@/components';

interface IRowProps {
  rowNumber: number,
  rowData: ICellData[],
  answerData: number[]
}

const Row = (props: IRowProps) => {
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
