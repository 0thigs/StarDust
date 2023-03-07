import { ThemeProvider } from 'styled-components';
import { Routes } from './routes/index.jsx';
import { AuthContextProvider } from './contexts/AuthContext';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme.js';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <GlobalStyles />
        <Routes />
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
