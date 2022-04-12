const SearchBar = (props) => {
    return ( 
        <form action="./" method="get">
           <label>
               <span>Search Bar</span>
           </label>
           <input
            type="text"
            placeholder= 'search songs'
            />
            <button type='submit'>Search</button>
        </form>
     );
}
 
export default SearchBar;