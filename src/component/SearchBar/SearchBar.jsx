import { useState } from "react";

const SearchBar = ({searchSong}) => {
    const [searchTerm , setSearchTerm] = useState('')

    const handleSubmit = (e) => {    
        e.preventDefault('');
        let field = {
           searchTerm
       };
       console.log(field)
       searchSong.searchForSong(field)
        
        
    }

    return ( 
        <form onSubmit={handleSubmit}>
           <label>
               <span>Search Bar</span>
           </label>
           <input
            type="text"
            placeholder= 'search songs'
            value= {searchTerm} // fieldvalue
            onChange = {(event) => setSearchTerm(event.target.value)}
            />
            <button type='submit'>Search</button>
        </form>
     );
}
 
export default SearchBar;