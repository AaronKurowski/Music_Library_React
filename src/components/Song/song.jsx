import React from 'react';
import './song.css';


function Song(props){
    return props.songs.map((song) => {
        const {id, title, artist, album, release_date} = song
        return (
            <tr>
                <td>{title}</td>
                <td>{artist}</td>
                <td>{album}</td>
                <td>{release_date}</td>
                <button type="submit" for={title} onClick={(song) => props.handleDelete(song)}>X</button>
            </tr>
        )
    });
}

export default Song;