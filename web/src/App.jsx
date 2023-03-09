import { ThemeProvider } from 'styled-components';
import { Router } from './routes/index.jsx';
import { AuthContextProvider } from './contexts/AuthContext';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme.js';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <GlobalStyles />
        <Router />
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
