import React, { useEffect, useState } from "react";
import axios from "axios";
import DisplayMusic from "./component/DisplayMusic/DisplayMusic";
import SearchBar from "./component/SearchBar/SearchBar";
import "./App.css";
import AddSong from "./component/AddSong/AddSong";

function App() {
  const [songs, setSongs] = useState([]);
  const [filterSongs, setFilteredSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs() {
    let response = await axios.get(["http://127.0.0.1:8000/api/music/"]);
    setSongs(response.data);
    setFilteredSongs(response.data);
    console.log(setSongs);
  }

 
    
  

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6">
          <div className="border-box">
            <SearchBar songs={songs} setFilteredSongs={setFilteredSongs} />
            <AddSong getAllSongs={getAllSongs}/>
            <DisplayMusic allMusic={filterSongs} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
