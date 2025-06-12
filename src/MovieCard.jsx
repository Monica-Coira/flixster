import './MovieCard.css';
import Modal from './Modal';
import { useState } from 'react';

function MovieCard({image, title, rating, openModal}) {
    const movieImageUrl = `https://image.tmdb.org/t/p/w500${image}`;
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [clickedMovie, setClickedMovie] = useState(null);

    function openModal(movieTitle){
        setClickedMovie(movieTitle);
        setModalIsOpen(true);
    }

    function closeModal(movieTitle){
        setClickedMovie(null);
        setModalIsOpen(false);
    }

    const handleCardClick = (event) => {
        openModal(event.target.querySelector('.movie-card-title').innerText);
    }

    return (
        <>
        <div className="movie-card" onClick={handleCardClick}>
            <img className="movie-card-image" src={movieImageUrl} alt={title} />
            <h3 className="movie-card-title">{title}</h3>
            <p className="movie-card-rating">Rating: {rating}</p>
            <Modal modalIsOpen={modalIsOpen} movieTitle={clickedMovie}/>
        </div>
        </>
    );
}

export default MovieCard;