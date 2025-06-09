import { useState } from 'react'
import './App.css'
import MovieList from './MovieList';
import movieData from './data/data.js'

const App = () => {
  //const apiKey = import.meta.env.VITE_API_KEY;

  return (
    <>
      <header className="app-header">
        <h1>Flixster</h1>
      </header>

      <main>
        <MovieList data={movieData} />
      </main>
    </>
  )
}

export default App
