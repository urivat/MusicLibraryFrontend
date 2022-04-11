import React, { useEffect, useState } from "react";
import axios from 'axios';
import DisplayMusic from "./component/DisplayMusic/DisplayMusic";

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
  
  
  
  return (
    <div>
     <DisplayMusic allMusic ={songs}/>
    </div>
  )
    
}

export default App;
