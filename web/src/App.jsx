import { ThemeProvider } from 'styled-components';
import { Router } from './routes/index.jsx';
import { AuthProvider } from './contexts/AuthContext';
import { DashboardProvider } from './contexts/DashboardContext';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme.js';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <DashboardProvider>
          <GlobalStyles />
          <Router />
        </DashboardProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
