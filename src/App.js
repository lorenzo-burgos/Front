import theme from './assets/styles/styles';
import { ThemeProvider } from '@mui/material/styles';
import ProdutorScreen from './pages/produtorScreen';
import LoginScreen from './pages/loginScreen';
import './App.css';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">   
        <ProdutorScreen />
      </div>
    </ThemeProvider>
  );
}

export default App;
