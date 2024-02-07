import { Box } from '@mui/material';
import { BoardRow } from './BoardRow';
import { Flex } from '../../components/Flex';
import { SidePanel } from './SidePanel';
import { useState } from 'react';
import { ROW_COUNT, COL_COUNT } from './constants';

// Creates an empty 10x10 array
const MATRIX = [...new Array(ROW_COUNT)].map(() => [...new Array(COL_COUNT)]);
const ROWS = [...new Array(ROW_COUNT)];

export const BoardScreen = () => {
  const [users, setUsers] = useState<string[]>([]);
  const [boardMatrix, setBoardMatrix] = useState<string[][]>(MATRIX);
  const [selectedUser, setSelectedUser] = useState<string>();

  const handleSquareClick = (rowIndex: number, colIndex: number) => {
    if (selectedUser === undefined) return;
    setBoardMatrix((matrix) => {
      const newMatrix = JSON.parse(JSON.stringify(matrix)) as string[][];
      newMatrix[rowIndex][colIndex] = selectedUser;
      return newMatrix;
    });
    return null;
  };

  return (
    <Flex>
      <SidePanel
        users={users}
        setUsers={setUsers}
        setSelectedUser={setSelectedUser}
      />
      <Box>
        {ROWS.map((_, index) => {
          return (
            <BoardRow
              key={`board_row_${index}`}
              rowIndex={index}
              rowData={boardMatrix[index]}
              onSquareClick={handleSquareClick}
            />
          );
        })}
      </Box>
    </Flex>
  );
};
