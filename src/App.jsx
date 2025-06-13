import { useState, useEffect } from 'react'
import './App.css'
import MovieList from './MovieList';
import SearchForm from './SearchForm.jsx';
import SortForm from './SortForm.jsx';
import Modal from './Modal.jsx';

const App = () => {
  const [movieData, setMovieData] = useState([])
  const [pageCount, setPageCount] = useState(1)
  const [sortChosenItem, setSortChosenItem] = useState("")
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalData, setModalData] = useState([])
  const [trailerData, setTrailerData] = useState([])

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

  const fetchModalData = async (chosenMovieId) => {
    try {
        handleModalOpen();
        const apiKey = import.meta.env.VITE_READ_API_KEY;

        const options = {
            method: 'GET',
            headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apiKey}`
            }
        };
        const modalResponse = await fetch(`https://api.themoviedb.org/3/movie/${chosenMovieId}`, options)
        if (!modalResponse.ok) {
            throw new Error('Failed to fetch movie data');
        }
        const initialModalData = await modalResponse.json();

        setModalData(initialModalData)
    } 
    catch (error) {
        console.error(error);
    }
  };

  const fetchTrailerData = async (chosenMovieId) => {
    try {
        const apiKey = import.meta.env.VITE_READ_API_KEY;

        const options = {
            method: 'GET',
            headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apiKey}`
            }
        };
        const trailerResponse = await fetch(`https://api.themoviedb.org/3/movie/${chosenMovieId}/videos?language=en-US`, options)
        if (!trailerResponse.ok) {
            throw new Error('Failed to fetch movie data');
        }
        const initialTrailerData = await trailerResponse.json();

        setTrailerData(initialTrailerData.results[0].key)
    } 
    catch (error) {
        console.error(error);
    }
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
