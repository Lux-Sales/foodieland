import { BrowserRouter } from 'react-router-dom';
import RoutesComponent from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <RoutesComponent />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
