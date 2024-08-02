import Footer from './components/footer';
import Navbar from './components/UI/Navbar/navbar';
import SearchBar from './components/UI/SearchBar/searchBar';
import theme from './assets/styles/styles';
import { ThemeProvider } from '@mui/material/styles';
import './App.css';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar className="Navbar" />
        <SearchBar />
        <Footer className="Footer" />
      </div>
    </ThemeProvider>
  );
}

export default App;
