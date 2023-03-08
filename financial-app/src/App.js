// import logo from './logo.svg';
import './App.css';
import SignInForm from './components/SignInForm/SignInForm';
// import AllRoutes from './components/routes';
// import { ThemeProvider } from '@mui/material/styles';
import { ColorModeContext, useMode } from "./theme";
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const [theme, colorMode] = useMode();

  // useEffect(() => {
  //   const mode = localStorage.getItem("colorMode");
  //   if (mode) {
  //     colorMode.toggle();
  //   }
  // }, []);
  
  return (
    <div className="App">
          <ColorModeContext.Provider value={colorMode}>
          {/* <ThemeProvider theme={theme}> */}
          <CssBaseline />
      {/* <AllRoutes /> */}
      <SignInForm />
      {/* </ThemeProvider> */}
      </ColorModeContext.Provider>
    </div>
  );
}

export default App;
