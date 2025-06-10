import { useState, useEffect } from 'react'
import './App.css'
import MovieList from './MovieList';
import SearchForm from './SearchForm.jsx';
import MovieCard from './MovieCard.jsx';

const App = () => {
  const [movieData, setMovieData] = useState([])

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

      const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
        // .then(res => res.json())
        // .then(res => console.log(res))
        // .catch(err => console.error(err));
      console.log(response)
      if (!response.ok) {
        throw new Error('Failed to fetch movie data');
      }
      // console.log(response)
      const data = await response.json();
      console.log(data)
      setMovieData((prev) => [...data.results]);
      console.log(movieData)
    } 
    catch (error) {
      console.error(error);
    }
  };

  useEffect(() =>  {
    fetchData();
  }, [])
  

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
