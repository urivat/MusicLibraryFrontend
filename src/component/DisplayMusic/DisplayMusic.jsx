

const DisplayMusic = ({allMusic}) => {
    return ( 
       <ul> {allMusic.map((song) => <li key = {song.title} > title = {song.title} , album = {song.album}, artist = {song.album}, genre = {song.genre} , releaseDate {song.release_date} </li>)} </ul>
     );
}
 
export default DisplayMusic;