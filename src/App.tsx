import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BoardScreen } from './views/BoardScreen';
import { Toolbar as _Toolbar, styled, Typography } from '@mui/material';

const Toolbar = styled(_Toolbar)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const themeOptions = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={themeOptions}>
      <CssBaseline />
      <Toolbar>
        <Typography>Football Squares</Typography>
      </Toolbar>
      <BoardScreen />
    </ThemeProvider>
  );
}

export default App;
