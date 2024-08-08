import Navbar from './components/UI/Navbar/navbar';
import theme from './assets/styles/styles';
import { ThemeProvider } from '@mui/material/styles';
import ProdutorScreen from './pages/produtorScreen';
import './App.css';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar className="Navbar" />
        <ProdutorScreen />
      </div>
    </ThemeProvider>
  );
}

export default App;
