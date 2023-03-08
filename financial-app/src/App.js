import logo from './logo.svg';
import './App.css';
import SideBar from './components/sideBar/sideBar.js';
import AllRoutes from './components/routes';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  const [theme, colorMode] = useMode();
  
  useEffect(() => {
    const mode = localStorage.getItem("colorMode");
    if (mode) {
      colorMode.toggle();
    }
  }, []);
  
  return (
    <div className="App">
          <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
          <CssBaseline />
      <AllRoutes />
      <SideBar/>
      </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
}

export default App;
