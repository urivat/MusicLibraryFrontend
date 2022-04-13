import { useState } from "react";

const SearchBar = (props) => {
    const [searchTerm , setSearchTerm] = useState('')

    const handleSubmit = (e) => {    
    if(props.songs === searchTerm){
        setSearchTerm(props.songs)
    }
    else{
        return false
    }
        
        
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
            onChange = {(event) => setSearchTerm(event.target.value)}
            />
            <button onClick= {handleSubmit} type='submit'>Search</button>
        </form>
     );
}
 
export default SearchBar;