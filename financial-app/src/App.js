import logo from './logo.svg';
import './App.css';
import SideBar from './components/sideBar/sideBar.js';
import AllRoutes from './components/routes';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );
  return (
    <div className="App">
          <ThemeProvider theme={theme}>
          <CssBaseline />
      {/* <AllRoutes /> */}
      <SideBar/>
      </ThemeProvider>
    </div>
  );
}

export default App;
