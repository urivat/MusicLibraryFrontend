import { useState } from "react";

const SearchBar = ({searchSong}) => {
    const [searchTerm , setSearchTerm] = useState('')

    const handleSubmit = (event) => {    
        searchSong(searchTerm)
        
    }

    return ( 
        <form>
           <label>
               <span>Search Bar</span>
           </label>
           <input
            type="text"
            placeholder= 'search songs'
            value= {searchTerm} // fieldvalue
            
            />
            <button type='submit' onCLick={handleSubmit}>Search</button>
        </form>
     );
}
 
export default SearchBar;