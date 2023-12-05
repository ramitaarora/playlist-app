import { useState } from 'react'
import './App.css'
import Nav from './components/Nav';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';

function App() {

  return (
    <div>
      <Nav />
      <SearchBar />
      <div id="search-results">
        <SearchResults />
        <Playlist />
      </div>
    </div>
  )
}

export default App
