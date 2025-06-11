import { useState } from "react";

function SearchForm({fetchSearchData}){
    const [searchQuery, setSearchQuery] = useState("")

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearch = () => {
        fetchSearchData(searchQuery);
    }
    
    return (
        <div className="search-bar">
            <input type="text" value={searchQuery} onChange={handleSearchChange} id="searchInput" placeholder="Search for movies"></input>
            <button className="search-button" onClick={handleSearch}>Search</button>
            <button className="clear-button">Clear</button>
        </div>
    );
}

export default SearchForm;