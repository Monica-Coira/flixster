import { useState, useEffect, useRef } from 'react'
import './App.css'
import MovieList from './MovieList';
import SearchForm from './SearchForm.jsx';

const App = () => {
  const [movieData, setMovieData] = useState([])
  const [pageCount, setPageCount] = useState(1)

  const fetchData = async () => {
    try {
      const apiKey = import.meta.env.VITE_READ_API_KEY;

      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${apiKey}`
        }
      };
      const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pageCount}`, options)
      if (!response.ok) {
        throw new Error('Failed to fetch movie data');
      }
      const data = await response.json();
      if (pageCount === 1){
        setMovieData((prev) => [...data.results]);
      }
      else {
        setMovieData((prev) => [...prev, ...data.results])
      }
    } 
    catch (error) {
      console.error(error);
    }
  };

  const incrementPageCount = () => {
    setPageCount((prev) => prev + 1);
  }

  useEffect(() =>  {
      fetchData();
  }, [pageCount])
  
  return (
    <>
      <header className="app-header">
        <h1>Flixster</h1>
        <SearchForm />
      </header>

      <main className="app-main">
        <MovieList data={movieData} />
        <button onClick={incrementPageCount} className="load-more-button">Load More</button>
      </main>

      <footer>
        <p>© Monica Coira. All Rights Reserved.</p>
      </footer>
    </>
  )
}

export default App
