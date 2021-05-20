import React from 'react';
import './song.css';

function Song(props){
    return props.songs.map((song) => {
        const {title, artist, album, release_date} = song
        return (
            <tr>
                <td>{title}</td>
                <td>{artist}</td>
                <td>{album}</td>
                <td>{release_date}</td>
            </tr>
        )
    });
}

export default Song;