import './MovieCard.css';
import Modal from './Modal';
import { useState } from 'react';

function MovieCard({image, title, rating, id, onCardClick}) {
    const movieImageUrl = `https://image.tmdb.org/t/p/w500${image}`;

    return (
        <div className="movie-card" onClick={onCardClick}>
            <div className="movie-card-id">{id}</div>
            <img className="movie-card-image" src={movieImageUrl} alt={title} />
            <h3 className="movie-card-title">{title}</h3>
            <p className="movie-card-rating">Rating: {rating}</p>
        </div>
    );
}

export default MovieCard;