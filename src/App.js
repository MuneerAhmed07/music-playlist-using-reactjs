import './App.css';
import SongLibrary from './components/SongLibrary';
import Playlist from './components/Playlist';
import { useState } from 'react';

function App() {

  const [songs] = useState([
    {id: 1, title: "Blinding Lights", artist: "The weeknd"},
    {id: 2, title: "Bevitating", artist: "Dua Lipa"},
    {id: 3, title: "Shape of you", artist: "ED Sheeran"},
    {id: 4, title: "happier Than ever", artist: "Billie Eliish"},
  ]);

  const [playlist, setPlaylist] = useState([]);

  console.log(playlist);

  // add song to playlist
  const addToPlaylist = (song) => {
    if(!playlist.find((item) => item.id === song.id)) {
      setPlaylist([...playlist, song]);
    }
  }

  // remove song from playlist
  const removeSong =(id) => {
    setPlaylist(playlist.filter((song) => song.id !== id));
  }

  return (
    <div className="app-container">
      <h1>Music Playlist App</h1>
      <SongLibrary songs={songs} addToPlaylist={addToPlaylist} />
      <Playlist playlist={playlist} removeSong={removeSong} />
    </div>
  );
}

export default App;
