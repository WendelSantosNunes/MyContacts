import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
// Estilos

import GlobalStyles from '../../assets/styles/global';
import DefaultTheme from '../../assets/styles/themes/default';
import { Container } from './styles';

// Componentes

import Header from '../Header/index';

// Pages

import Routes from '../../Routes';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={DefaultTheme}>
        <GlobalStyles />
        <Container>
          <Header />
          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
