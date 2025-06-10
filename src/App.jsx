import { useState } from 'react'
import './App.css'
import MovieList from './MovieList';
import movieData from './data/data.js'
import SearchForm from './SearchForm.jsx';

const App = () => {
  //const apiKey = import.meta.env.VITE_API_KEY;

  return (
    <>
      <header className="app-header">
        <h1>Flixster</h1>
        <SearchForm />
      </header>

      <main className="app-main">
        <MovieList data={movieData} />
        <button className="load-more-button">Load More</button>
      </main>

      <footer>
        <p>© Monica Coira. All Rights Reserved.</p>
      </footer>
    </>
  )
}

export default App
