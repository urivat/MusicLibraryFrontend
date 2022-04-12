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
  useEffect(() =>{
    addSong();
  }), []
  async function addSong(){
  const newSong = {
        
  "title": "Chemical",
  "artist": "The Devil Wears Prada",
  "album": "The Act",
  "release_date": "2019-10-11",
  "genre": "Metal"
}
  let response = await axios.post('http://127.0.0.1:8000/api/music/', newSong);
if(response.status === 201){
  await getAllSongs()
}}

async function searchSongs(searchTerm){
  let response = await axios.get('http://127.0.0.1:8000/api/music/');
  let filterSong = response.filter(
    // anony function
    function(foundSong){
      // searchTerm to Title, searchTerm to Artist, searchTemn to Genre
      // searchTerm == Title OR searchTerm == Artist

    if(foundSong.songs.includes(searchTerm.title || searchTerm.artist || searchTerm.genre || searchTerm.album || searchTerm.release_date)){
      return true
    }
  })
return filterSong.data
}

  
  
  
  
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="border-box">
        <DisplayMusic allMusic ={searchSongs}/>
        </div>
        <SearchBar params = {searchSongs} />

      </div>
     
    </div>
    
    
  )
    
}

export default App;
