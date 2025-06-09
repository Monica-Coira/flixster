import './MovieCard.css';

function MovieCard({image, title, rating}) {
    return (
        <div className="movie-card">
            {/* <img className="movie-card-image" src={image} alt={title} /> */}
            <img className="movie-card-image" src="public/movie.png" width="200" height="280" />
            <h3>{title}</h3>
            <p>Rating: {rating}</p>
        </div>
    );
}

export default MovieCard;