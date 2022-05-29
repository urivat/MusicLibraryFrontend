import './DisplayMusic.css'
import SearchBar from '../SearchBar/SearchBar';

const DisplayMusic = ({allMusic}) => {
    const songs = allMusic.map(song => {
       return (
      <tr>
         <td>{song.title}</td>
         <td>{song.artist}</td>
         <td>{song.album}</td>
         <td>{song.genre}</td>
         <td>{song.release_date}</td>
      </tr>
    )
 }); 
   
   
   return ( 
      <table className='table'>
         <thead>
            <tr>
               <th>Title</th>
               <th>Artist</th>
               <th>Album</th>
               <th>Genre</th>
               <th>Release Date</th>
            </tr>
         </thead>
         <tbody>
            {songs}
         </tbody>
      </table>
       
       
       
      
     ) }
 
export default DisplayMusic;
/* <ul>
          {allMusic.map((song) => <li key = {song.id} >Title: {song.title} , Album: {song.album}, Artist: {song.artist}, Genre: {song.genre} , Release Date: {song.release_date}</li>)}
       
       </ul>
         */