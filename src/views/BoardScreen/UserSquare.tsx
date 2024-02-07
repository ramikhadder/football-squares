import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const Square = styled(Box)(({ theme }) => ({
  width: 80,
  height: 80,
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.grey[900],
}));

interface UserSquareProps {
  user: string;
  onClick: () => void;
}

export const UserSquare = ({ user, onClick }: UserSquareProps) => {
  return <Square onClick={onClick}>{user}</Square>;
};
