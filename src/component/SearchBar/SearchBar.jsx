import { useEffect, useState } from "react";

const SearchBar = (props) => {
  const { songs, setFilteredSongs } = props;
  const [searchTerm, setSearchTerm] = useState("");

  async function searchSongs() {
    let filteredSong = songs.filter((song) => {
      if (song.title.includes(searchTerm)) {
        return true;
      } else if (song.artist.includes(searchTerm)) {
        return true;
      } else if (song.album.includes(searchTerm)) {
        return true;
      } else if (song.release_date.includes(searchTerm)) {
        return true;
      } else if (song.genre.includes(searchTerm)) {
        return true;
      }
    });
    setFilteredSongs(filteredSong);
  }

  useEffect(() => {
    searchSongs();
  }, [searchTerm]);

  return (
    <form>
      <label>
        <span>Search Bar</span>
      </label>
      <input
        type="text"
        placeholder="search songs"
        value={searchTerm} // fieldvalue
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      {/* <button onClick={handleSubmit} type="submit">
        Search
      </button> */}
    </form>
  );
};

export default SearchBar;
