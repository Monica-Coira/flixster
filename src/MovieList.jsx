import MovieCard from "./MovieCard";
import './MovieList.css'

function MovieList({data, sortChosenItem}){
    if (sortChosenItem === "title"){
        data = [...data].sort((a,b) => a.original_title.localeCompare(b.original_title));
    }
    else if (sortChosenItem === "releaseDate"){
        data = [...data].sort((a,b) => new Date(b.release_date) - new Date(a.release_date));
    }
    else if (sortChosenItem === "voteAverage"){
        data = [...data].sort((a,b) => b.vote_average - a.vote_average);
    }

    return (
        <main>
            <div className="movie-list-container">
                {
                    data.map(obj => {
                        return (
                            <MovieCard key={obj.id} image={obj.poster_path} title={obj.original_title} rating={obj.vote_average} />
                        )
                    })
                }
            </div>
        </main>
    );
}

export default MovieList;