import { useState } from 'react'
import './App.css'
import Nav from './components/Nav';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState();

  return (
    <div>
      <Nav />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchResults={searchResults} setSearchResults={setSearchResults} />
      <div id="search-results">
        <SearchResults  />
        <Playlist />
      </div>
    </div>
  )
}

export default App
