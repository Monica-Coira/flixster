import MovieCard from "./MovieCard";
import './MovieList.css'
import { parseMovieData } from "./utils/utils";

function MovieList({data}){
    const movieData = parseMovieData(data.results);

    return (
        <main>
            <div className="movie-list-container">
                {
                    movieData.map(obj => {
                        return (
                            <MovieCard key={obj.title} image={obj.image} title={obj.title} rating={obj.rating} />
                        )
                    })
                }
            </div>
        </main>
    );
}

export default MovieList;