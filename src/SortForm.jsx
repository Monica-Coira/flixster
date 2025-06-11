import { useState, useEffect } from "react";

function SortForm({fetchSortData}){
    const [chosenValue, setChosenValue] = useState("")

    const handleSortChange = (event) => {
        setChosenValue((prev) => event.target.value);
    };

    useEffect(() =>  {
        fetchSortData(chosenValue);
    }, [chosenValue])
    
    return (
        <div className="sort-dropdown">
            <select name="sort" onChange={handleSortChange}>
                <option disabled selected>Sort By</option>
                <option value="title">Title</option>
                <option value="releaseDate">Release Date</option>
                <option value="voteAverage">Vote Average</option>
            </select>
        </div>
    );
}

export default SortForm;