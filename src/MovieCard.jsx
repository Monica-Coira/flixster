import './MovieCard.css';
import Modal from './Modal';
import { useState } from 'react';

function MovieCard({image, title, rating, id, onCardClick}) {
    const movieImageUrl = `https://image.tmdb.org/t/p/w500${image}`;
    const [favoriteButton, setFavoriteButton] = useState(false)
    const [favoriteButtonUrl, setFavoriteButtonUrl] = useState("/src/assets/heartEmpty.png")
    const [movieIsWatched, setMovieIsWatched] = useState(false)
    const [watchedUrl, setWatchedUrl] = useState("/src/assets/eye-slash.png")

    const handleFavoriteButton = () => {
        if(!favoriteButton){
            setFavoriteButton(true);
            setFavoriteButtonUrl("/src/assets/heartRed.png");
        }
        if(favoriteButton){
            setFavoriteButton(false);
            setFavoriteButtonUrl("/src/assets/heartEmpty.png");
        }
    }

    const handleWatchedButton = () => {
        if(!movieIsWatched){
            setMovieIsWatched(true);
            setWatchedUrl("/src/assets/eye.png");
        }
        if(movieIsWatched){
            setMovieIsWatched(false);
            setWatchedUrl("/src/assets/eye-slash.png");
        }
    }

    return (
        <>
        <div className="movie-card" onClick={onCardClick}>
            <div className="movie-card-id">{id}</div>
            <img className="movie-card-image" src={movieImageUrl} alt={title} />
            <h3 className="movie-card-title">{title}</h3>
            <p className="movie-card-rating">Rating: {rating}</p>
            <div className="movie-card-buttons">
            <img src={favoriteButtonUrl} className="favorite-image" onClick={handleFavoriteButton}/>
            <img src={watchedUrl} className="watched-image" onClick={handleWatchedButton}/>
            </div>
        </div>
        </>
    );
}

export default MovieCard;