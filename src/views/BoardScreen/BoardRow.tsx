import { Stack } from '@mui/material';
import { UserSquare } from './UserSquare';

const CELLS = [...new Array(10)];

interface BoardRowProps {
  rowIndex: number;
  rowData: string[];
  editable: boolean;
  onSquareClick: (rowIndex: number, colIndex: number) => void;
}

export const BoardRow = ({
  rowIndex,
  rowData,
  editable,
  onSquareClick,
}: BoardRowProps) => {
  return (
    <Stack flex={1} direction="row" width="100%">
      {CELLS.map((_, colIndex) => {
        return (
          <UserSquare
            key={`user_square_${colIndex}`}
            editable={editable}
            user={rowData[colIndex]}
            onClick={() => {
              onSquareClick(rowIndex, colIndex);
            }}
          />
        );
      })}
    </Stack>
  );
};
