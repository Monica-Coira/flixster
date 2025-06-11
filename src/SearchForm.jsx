import { useState } from "react";

function SearchForm({fetchSearchData, fetchData}){
    const [searchQuery, setSearchQuery] = useState("")

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearch = () => {
        fetchSearchData(searchQuery);
    }

    const handleClear = () => {
        setSearchQuery("");
        fetchData();
    }

    const handleEnterKey = (event) => {
        if (event.key === 'Enter'){
            handleSearch();
        }
    }
    
    return (
        <div className="search-bar">
            <input type="text" value={searchQuery} onChange={handleSearchChange} onKeyDown={handleEnterKey} id="searchInput" placeholder="Search for movies"></input>
            <button className="search-button" onClick={handleSearch}>Search</button>
            <button className="clear-button" onClick={handleClear}>Clear</button>
        </div>
    );
}

export default SearchForm;