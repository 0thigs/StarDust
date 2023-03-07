import { ThemeProvider } from 'styled-components';
import { Routes } from './routes/index.jsx';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme.js';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
