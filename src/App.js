import theme from './assets/styles/styles';
import { ThemeProvider } from '@mui/material/styles';
import ProdutorScreen from './pages/Produtor/produtorScreen';
import ProdutorDetails from './pages/Produtor/ProdutorDetails';
import LoginScreen from './pages/loginScreen';
import Background from './assets/background';
import './App.css';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App h-screen w-screen relative overflow-hidden">   
        <Background />
        <ProdutorScreen />
      </div>
    </ThemeProvider>
  );
}

export default App;
