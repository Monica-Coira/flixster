import './MovieCard.css';

function MovieCard({image, title, rating}) {
    const movieImageUrl = `https://image.tmdb.org/t/p/w500${image}`;
    return (
        <div className="movie-card">
            <img className="movie-card-image" src={movieImageUrl} alt={title} />
            <h3 className="movie-card-title">{title}</h3>
            <p className="movie-card-rating">Rating: {rating}</p>
        </div>
    );
}

export default MovieCard;