import React from 'react'

const Playlist = ({ playlist, removeSong }) => {
    return (
        <>
            <div className="playlist">
                <h2>Your Playlist</h2>
                {playlist.length > 0 ? (
                    playlist.map((song) => (
                        <div key={song.id} className="playlist-item">
                            <p>
                                <strong>{song.title}</strong> by {song.artist}
                            </p>
                            <button onClick={()=> removeSong(song.id)} className='remove-button'>Remove</button>
                        </div>
                    ))
                ) : (
                    <p>Your playlist is empty. Add some song!</p>
                )}
            </div>
        </>
    )
}

export default Playlist
