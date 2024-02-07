import { Flex } from '../../components/Flex';
import { UserSquare } from './UserSquare';

const CELLS = [...new Array(10)];

interface BoardRowProps {
  rowIndex: number;
  rowData: string[];
  onSquareClick: (rowIndex: number, colIndex: number) => void;
}

export const BoardRow = ({
  rowIndex,
  rowData,
  onSquareClick,
}: BoardRowProps) => {
  return (
    <Flex>
      {CELLS.map((_, colIndex) => {
        return (
          <UserSquare
            key={`user_square_${colIndex}`}
            user={rowData[colIndex]}
            onClick={() => {
              onSquareClick(rowIndex, colIndex);
            }}
          />
        );
      })}
    </Flex>
  );
};
