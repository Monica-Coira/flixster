import MovieCard from "./MovieCard";
import './MovieList.css'
import { parseMovieData } from "./utils/utils";

function MovieList({data}){
    const movieData = parseMovieData(data.results);

    return (
        <main>
            <div className="movie-list-container">
                {
                    data.results.map(obj => {
                        return (
                            <MovieCard key={obj.id} image={obj.image} title={obj.title} rating={obj.vote_average} />
                        )
                    })
                }
            </div>
        </main>
    );
}

export default MovieList;