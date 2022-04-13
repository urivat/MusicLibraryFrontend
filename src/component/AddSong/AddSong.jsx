import axios from "axios";
import React, { useState } from "react";

const AddSong = (props) => {
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [album, setAlbum] = useState("");
    const [genre, setGenre] = useState("");
    const [releaseDate, setRealeaseDate] = useState("");

async function addSong(){
    const newSong = {
          title: title,
          artist: artist,
          album: album,
          releaseDate: releaseDate,
          genre: genre,
  }
    let response = await axios.post('http://127.0.0.1:8000/api/music/', newSong);
  if(response.status === 201){
    await getAllSongs()
  }}
    return ( 
        <form>
            
        </form>
     );
    
    
    
    
    
    
}





export default AddSong;




