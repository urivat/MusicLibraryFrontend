import React, { useEffect, useState } from "react";
import axios from 'axios';
import DisplayMusic from "./component/DisplayMusic/DisplayMusic";
import SearchBar from "./component/SearchBar/SearchBar";
import './App.css'

function App() {
  const [songs, setSongs]= useState([]);
  

  useEffect(()=> {
    getAllSongs();
  }, [])
  

  async function getAllSongs(){
    let response = await axios.get(['http://127.0.0.1:8000/api/music/']);
    setSongs(response.data);
    console.log(setSongs)
  }
  
  

async function searchSongs(searchTerm){
  let response = await axios.get('http://127.0.0.1:8000/api/music/');
  let filterSong = response.filter((foundSong) => {
      foundSong.songs.includes(foundSong.title || foundSong.artist || foundSong.genre || foundSong.album || foundSong.release_date)
      return true
  })
    return filterSong.data
  }



  
  
  
  
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6">
          <div className="border-box">
          <DisplayMusic allMusic ={songs} />
          <SearchBar searchForSong = {searchSongs}/>
          </div>
        
        </div>
        

      </div>
     
    </div>
    
    
  )
    
}

export default App;
