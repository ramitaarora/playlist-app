export default function SearchBar({searchTerm, setSearchTerm, searchResults, setSearchResults}) {
    const handleSearch = (event) => {
        event.preventDefault();
        
    }

    return (
        <form id="search-form" onSubmit={handleSearch}> 
            <input type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}/>
            <input type="submit"/>
        </form>
    )
}