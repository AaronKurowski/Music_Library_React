import React from 'react';
import './song.css';

function Song(props){
    return props.songs.map((song) => {
        const {title, artist, album, releaseDate} = song
        return (
            <tbody>
                <tr>
                    <td>{title}</td>
                    <td>{artist}</td>
                    <td>{album}</td>
                    <td>{releaseDate}</td>
                </tr>
            </tbody>
        )
    });
}

export default Song;