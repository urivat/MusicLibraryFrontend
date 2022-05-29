import axios from "axios";
import React, { useState } from "react";
import InputField from "./inputField";

const AddSong = ({getAllSongs}) => {
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [album, setAlbum] = useState("");
    const [genre, setGenre] = useState("");
    const [release_date, setRelease_date] = useState("");

async function addSong(e){
    e.preventDefault();
    const newSong = {
          title: title,
          artist: artist,
          album: album,
          release_date: release_date,
          genre: genre,
  }
    let response = await axios.post('http://127.0.0.1:8000/api/music/', newSong);
  if(response.status === 201){
    await getAllSongs()
  }}
    return ( 
        
        <form onSubmit={addSong}>
            <InputField label='Title' value={title} onChange = {setTitle}/>
            <InputField label='artist' value={artist} onChange = {setArtist}/>
            <InputField label='album' value={album} onChange = {setAlbum}/>
            <InputField label='releaseDate' value={release_date} onChange = {setRelease_date}/>
            <InputField label='genre' value={genre} onChange = {setGenre}/>
            <button type="submit">add song</button>
        </form>
     );
    
    
    
    
    
    
}





export default AddSong;




