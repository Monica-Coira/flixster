import MovieCard from "./MovieCard";
import './MovieList.css'

function MovieList({data, sortChosenItem}){
    function removeDuplicates(data){
        return (data.filter((value, index, self) =>
            index === self.findIndex((i) => (
                i.id === value.id
            ))
        ));
    }

    if (sortChosenItem === "title"){
        data = [...data].sort((a,b) => a.original_title.localeCompare(b.original_title));
        data = removeDuplicates(data);
    }
    else if (sortChosenItem === "releaseDate"){
        data = [...data].sort((a,b) => new Date(b.release_date) - new Date(a.release_date));
        data = removeDuplicates(data);
    }
    else if (sortChosenItem === "voteAverage"){
        data = [...data].sort((a,b) => b.vote_average - a.vote_average);
        data = removeDuplicates(data);
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