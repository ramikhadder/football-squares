import { styled } from '@mui/material/styles';
import { Box, Stack } from '@mui/material';

const Square = styled(Stack)<{ editable: boolean }>(({ theme, editable }) => ({
  flex: 1,
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.default,
  boxSizing: 'border-box',
  alignItems: 'center',
  justifyContent: 'center',
  ...(editable && {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.grey[800],
    },
    '&:not(:hover)': {
      transition: 'background-color 250ms linear',
    },
  }),
}));

interface UserSquareProps {
  editable: boolean;
  user: string;
  onClick: () => void;
}

export const UserSquare = ({ editable, user, onClick }: UserSquareProps) => {
  return (
    <Square editable={editable} onClick={onClick}>
      {user}
    </Square>
  );
};
