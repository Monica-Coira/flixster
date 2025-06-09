const parseMovieData = (results) => {
    let arrayOfData = [];

    for (const object of results) {
        let entry = {
            image: "",
            title: "", 
            rating: ""
        };
        
        entry.image = object.backdrop_path;
        entry.title = object.title;
        entry.rating = object.vote_average;
        arrayOfData.push(entry);
    }

    return arrayOfData;
}

export {parseMovieData};