import { useState, useEffect } from 'react'
import './App.css'
import MovieList from './MovieList';
import SearchForm from './SearchForm.jsx';
import SortForm from './SortForm.jsx';

const App = () => {
  const [movieData, setMovieData] = useState([])
  const [pageCount, setPageCount] = useState(1)
  const [sortChosenItem, setSortChosenItem] = useState("")

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

  const fetchSearchData = async (searchQuery) => {
    try {
        const apiKey = import.meta.env.VITE_READ_API_KEY;

        const options = {
            method: 'GET',
            headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apiKey}`
            }
        };
        const searchResponse = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}`, options)
        if (!searchResponse.ok) {
            throw new Error('Failed to fetch movie data');
        }
        const searchData = await searchResponse.json();
        setMovieData(searchData.results)
    } 
    catch (error) {
        console.error(error);
    }
  };

  const fetchSortData = async (chosenValue) => {
    try {
      setSortChosenItem(chosenValue);
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
  }, [pageCount, sortChosenItem])
  
  return (
    <>
      <header className="app-header">
        <h1>Flixster</h1>
        <section className="form-section">
          <SearchForm fetchSearchData={fetchSearchData} fetchData={fetchData}/>
          <SortForm fetchSortData={fetchSortData}/>
        </section>
      </header>

      <main className="app-main">
        <MovieList data={movieData} sortChosenItem={sortChosenItem}/>
        <button onClick={incrementPageCount} className="load-more-button">Load More</button>
      </main>

      <footer>
        <p>© Monica Coira. All Rights Reserved.</p>
      </footer>
    </>
  )
}

export default App
