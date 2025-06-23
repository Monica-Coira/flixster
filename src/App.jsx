import { useState, useEffect } from 'react'
import './App.css'
import MovieList from './MovieList';
import SearchForm from './SearchForm.jsx';
import SortForm from './SortForm.jsx';
import Modal from './Modal.jsx';
import { API_KEY } from './utils/apiConfig.js'
import { API_ENDPOINT } from './utils/apiConfig.js'

const App = () => {
  const [movieData, setMovieData] = useState([])
  const [pageCount, setPageCount] = useState(1)
  const [sortChosenItem, setSortChosenItem] = useState("")
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalData, setModalData] = useState([])
  const [trailerData, setTrailerData] = useState([])

  const fetchMovieData = async (parameter) => {
    try {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${API_KEY}`
        }
      };
      const response = await fetch(`${API_ENDPOINT}${parameter}`, options)
      if (!response.ok) {
        throw new Error('Failed to fetch movie data');
      }
      const data = await response.json();
      return data;
    } 
    catch (error) {
      console.error(error);
    }
  };

  const fetchData = async () => {
    const data = await fetchMovieData(`/movie/now_playing?language=en-US&page=${pageCount}`);
    if (pageCount === 1){
      setMovieData((prev) => [...data.results]);
    }
    else {
      setMovieData((prev) => [...prev, ...data.results])
    }
  };

  const fetchSearchData = async (searchQuery) => {
    const searchData = await fetchMovieData(`/search/movie?query=${searchQuery}`);
    setMovieData(searchData.results)
  };

  const fetchModalData = async (chosenMovieId) => {
    handleModalOpen();
    const initialModalData = await fetchMovieData(`/movie/${chosenMovieId}`);
    setModalData(initialModalData)
  };

  const fetchTrailerData = async (chosenMovieId) => {
    const initialTrailerData = await fetchMovieData(`/movie/${chosenMovieId}/videos?language=en-US`);
    setTrailerData(initialTrailerData.results[0].key)
  };

  const handleModalOpen = () => {
    setModalIsOpen(true);
  }

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

  const revertPageCount = () => {
    setPageCount(1);
  }

  useEffect(() =>  {
      fetchData();
  }, [pageCount, sortChosenItem])
  
  return (
    <>
      <header className="app-header">
        <h1>Flixster</h1>
        <section className="form-section">
          <SearchForm fetchSearchData={fetchSearchData} fetchData={fetchData} revertPageCount={revertPageCount}/>
          <SortForm fetchSortData={fetchSortData}/>
        </section>
      </header>

      <main className="app-main">
        <MovieList data={movieData} sortChosenItem={sortChosenItem} fetchModalData={fetchModalData} fetchTrailerData={fetchTrailerData}/>
        <button onClick={incrementPageCount} className="load-more-button">Load More</button>
        <Modal modalIsOpen={modalIsOpen} onClose={setModalIsOpen} modalData={modalData} trailerData={trailerData}/>
      </main>

      <footer>
        <p>© Monica Coira. All Rights Reserved.</p>
      </footer>
    </>
  )
}

export default App
