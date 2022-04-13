import './DisplayMusic.css'

const DisplayMusic = ({allMusic}) => {
    return ( 
       <ul> {allMusic.map((song) => <li key = {song.id} > Title: {song.title} , Album: {song.album}, Artist: {song.artist}, Genre: {song.genre} , Release Date: {song.release_date} </li>)} </ul>
     );
}
 
export default DisplayMusic;