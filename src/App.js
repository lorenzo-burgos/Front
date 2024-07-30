import './App.css';
import Footer from './components/footer';
import Navbar from './components/UI/Navbar/navbar';
import SearchBar from './components/UI/SearchBar/searchBar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchBar />
      <Footer />
    </div>
  );
}

export default App;
