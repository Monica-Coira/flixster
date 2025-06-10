import './MovieCard.css';

function MovieCard({image, title, rating}) {
    return (
        <div className="movie-card">
            {/* <img className="movie-card-image" src={image} alt={title} /> */}
            <img className="movie-card-image" src="public/movie.png" width="200" height="280" />
            <h3 className="movie-card-title">{title}</h3>
            <p className="movie-card-rating">Rating: {rating}</p>
        </div>
    );
}

export default MovieCard;