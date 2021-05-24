import React from 'react';
import './song.css';


function Song(props){
    console.log(props.state.songs);
    console.log(props.state.searchTerm);
    const filteredSongs = props.filterSongs(props.state.songs, props.state.searchTerm)
    return filteredSongs.map((song) => {
        const { id, title, artist, album, release_date } = song
        return (
            <tr>
                <td>{title}</td>
                <td>{artist}</td>
                <td>{album}</td>
                <td>{release_date}</td>
                <button type="submit" for={title} onClick={() => props.handleDelete(song)}>X</button>
            </tr>
        )
    });
}

export default Song;