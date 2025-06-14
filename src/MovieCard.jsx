import '/src/MovieCard.css';
import Modal from './Modal';
import { useState } from 'react';
import heartRed from "/src/assets/heartRed.png";
import heartEmpty from "/src/assets/heartEmpty.png";
import eye from "/src/assets/eye.png";
import eyeSlash from "/src/assets/eye-slash.png";
import moviePlaceholder from "/src/assets/movie.png";

const MovieCard = ({image, title, rating, id, onCardClick}) => {
    const movieImageUrl = `https://image.tmdb.org/t/p/w500${image}`;
    const placeholderImage = moviePlaceholder;
    const [favoriteButton, setFavoriteButton] = useState(false)
    const [favoriteButtonUrl, setFavoriteButtonUrl] = useState(heartEmpty)
    const [movieIsWatched, setMovieIsWatched] = useState(false)
    const [watchedUrl, setWatchedUrl] = useState(eyeSlash)

    const handleFavoriteButton = () => {
        if(!favoriteButton){
            setFavoriteButton(true);
            setFavoriteButtonUrl(heartRed);
        }
        if(favoriteButton){
            setFavoriteButton(false);
            setFavoriteButtonUrl(heartEmpty);
        }
    }

    const handleWatchedButton = () => {
        if(!movieIsWatched){
            setMovieIsWatched(true);
            setWatchedUrl(eye);
        }
        if(movieIsWatched){
            setMovieIsWatched(false);
            setWatchedUrl(eyeSlash);
        }
    }

    const handleMovieImage = (image) => {
        if (image === undefined || image === null){
            return placeholderImage;
        }
        else {
            return movieImageUrl;
        }
    }

    return (
        <>
        {handleMovieImage}
        <div className="movie-card" onClick={onCardClick}>
            <div className="movie-card-id">{id}</div>
            <img className="movie-card-image" src={handleMovieImage(image)} alt={title} />
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