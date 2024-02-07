import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BoardScreen } from './views/BoardScreen';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

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
      <BoardScreen />
    </ThemeProvider>
  );
}

export default App;
