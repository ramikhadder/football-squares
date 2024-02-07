import { Box, Stack, Typography } from '@mui/material';
import { ROWS } from './constants';

export const COL_WIDTH = 20;
export const ROW_HEIGHT = 20;

interface BoardAxisProps {
  teamName: string;
  orientation: 'horizontal' | 'vertical';
}

export const BoardAxis = ({ teamName, orientation }: BoardAxisProps) => {
  if (orientation === 'horizontal') {
    return (
      <Stack width="100%">
        <Box alignSelf="center" height={ROW_HEIGHT}>
          <Typography>{teamName}</Typography>
        </Box>
        <Stack direction="row" height={ROW_HEIGHT}>
          <Box width={COL_WIDTH * 2} />
          {ROWS.map((_, index) => (
            <Stack flex={1} alignItems="center" justifyContent="center">
              <Typography>{index}</Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    );
  }
  return (
    <Stack direction="row">
      <Stack width={COL_WIDTH} alignSelf="center" alignItems="center">
        <Typography
          width={COL_WIDTH / 2}
          textAlign="center"
          sx={{ overflowWrap: 'break-word', wordWrap: 'break-word' }}
        >
          {teamName}
        </Typography>
      </Stack>
      <Stack width={COL_WIDTH}>
        {ROWS.map((_, index) => (
          <Stack flex={1} alignItems="center" justifyContent="center">
            <Typography>{index}</Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};
