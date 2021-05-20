import React from 'react';
import './song.css';

function Song(props){
    return(
        <div>
            <table className="song-table">
                <tr className="th-background">
                    <th>Song Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release Date</th>
                    <th>Likes</th>
                </tr>
                <tr>
                    <td>{props.song.title}</td>
                    <td>{props.song.artist}</td>
                    <td>{props.song.album}</td>
                    <td>{props.song.releaseDate}</td>
                </tr>
            </table>
        </div>
    );
}

export default Song;