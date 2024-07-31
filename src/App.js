import Footer from './components/footer';
import Navbar from './components/UI/Navbar/navbar';
import SearchBar from './components/UI/SearchBar/searchBar';
import './assets/styles/global.css';

function App() {
  return (
    <div className="App">
      <Navbar className="Navbar" />
      <SearchBar />
      <Footer className="Footer" />
    </div>
  );
}

export default App;
