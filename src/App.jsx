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
 async function addSong(searchField){
   
   
 }
 let response = await axios.post('http://127.0.0.1:8000/api/music/', newSong);
if(response.status === 201){
  await getAllSongs()
}}
async function searchSongs(){
  let response = await axios.get('http://127.0.0.1:8000/api/music/');
  let filterSong = response.filter(function(foundSong){
    if(foundSong.songs.includes(params)){
      return setSongs(filterSong.data)
    }
  })

}

  
  
  
  
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="border-box">
        <DisplayMusic allMusic ={songs}/>
        </div>
        <SearchBar params = {songs} />

      </div>
     
    </div>
    
    
  )
    
}

export default App;
