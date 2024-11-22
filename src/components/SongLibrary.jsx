import React from 'react'

const SongLibrary = ({songs, addToPlaylist}) => {
    return (
        <>
            <div className="song-library">
                <h2>Song Library</h2>
                {songs.map((song) => (
                    <div key={song.id} className="song-item">
                        <p>
                            <strong>{song.title}</strong> by {song.artist}
                        </p>
                        <button onClick={() => addToPlaylist(song)} className='add-button'>Add to playlist</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default SongLibrary
