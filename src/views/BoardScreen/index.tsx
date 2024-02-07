import { Box, Stack, Typography, styled } from '@mui/material';
import { BoardRow } from './BoardRow';
import { SidePanel } from './SidePanel';
import { useState } from 'react';
import {
  ROWS,
  ROW_COUNT,
  COL_COUNT,
  SIDE_PANEL_WIDTH,
  TOOLBAR_HEIGHT,
} from './constants';
import { useLiveScores } from '../../hooks/useLiveScores';
import {
  BoardAxis,
  COL_WIDTH as BOARD_AXIS_COL_WIDTH,
  ROW_HEIGHT as BOARD_AXIS_ROW_HEIGHT,
} from './BoardAxis';
import { User } from './types';

const Page = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  height: `calc(100vh - ${TOOLBAR_HEIGHT}px)`,
  width: '100vw',
  backgroundColor: theme.palette.grey[900],
}));

const Board = styled(Stack)({
  // height: `calc(100% - ${BOARD_AXIS_ROW_HEIGHT * 2}px)`,
  width: `calc(100% - ${BOARD_AXIS_COL_WIDTH * 2}px)`,
});

// Creates an empty 10x10 array
const MATRIX = [...new Array(ROW_COUNT)].map(() => [...new Array(COL_COUNT)]);

export const BoardScreen = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [boardMatrix, setBoardMatrix] = useState<string[][]>(MATRIX);
  const [selectedUser, setSelectedUser] = useState<User>();

  const handleSquareClick = (rowIndex: number, colIndex: number) => {
    if (selectedUser === undefined) return;
    setBoardMatrix((matrix) => {
      const newMatrix = JSON.parse(JSON.stringify(matrix)) as string[][];
      newMatrix[rowIndex][colIndex] = selectedUser.name;
      return newMatrix;
    });
    return null;
  };

  // const data = useLiveScores();

  return (
    <Page direction="row">
      <SidePanel
        selectedUserId={selectedUser?.id}
        users={users}
        setUsers={setUsers}
        setSelectedUser={setSelectedUser}
      />
      <Box height="100%" width={`calc(100vw - ${SIDE_PANEL_WIDTH}px)`}>
        <BoardAxis orientation="horizontal" teamName="49ers" />
        <Stack
          direction="row"
          height={`calc(100% - ${BOARD_AXIS_ROW_HEIGHT * 2}px)`}
        >
          <BoardAxis orientation="vertical" teamName="Chiefs" />
          <Board>
            {ROWS.map((_, index) => {
              return (
                <BoardRow
                  key={`board_row_${index}`}
                  rowIndex={index}
                  rowData={boardMatrix[index]}
                  editable={selectedUser !== undefined}
                  onSquareClick={handleSquareClick}
                />
              );
            })}
          </Board>
        </Stack>
      </Box>
    </Page>
  );
};
