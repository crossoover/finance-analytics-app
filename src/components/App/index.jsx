import NavBar from "../NavBar";
import { GlobalStyle, darkTheme, lightTheme } from './styles';
import { ThemeProvider } from 'styled-components';
import Background from '../UI/Background/'
import { useState } from 'react';
import { ThemeTrigger } from "../UI/ThemeTrigger";

function App() {
  const [themeState, setThemeState] = useState(darkTheme)

  const trigger = () => {
    if (themeState === darkTheme) {
      setThemeState(lightTheme)
    } else {
      setThemeState(darkTheme)
    }
  }

  return (
    <ThemeProvider theme={themeState}>
      <div className="App">
        <GlobalStyle />
        <Background />
        <NavBar element={<ThemeTrigger onChange={trigger}/>}/>
      </div>
    </ThemeProvider>
  );
}

export default App;
