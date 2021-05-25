import React from 'react';
import './song.css';
import UpdateSong from '../UpdateSong/updateSong.jsx';


function Song(props){
    console.log(props.state.songs);
    console.log(props.state.searchTerm);
    const filteredSongs = props.filterSongs(props.state.songs, props.state.searchTerm)
    return filteredSongs.map((song) => {
        const { id, title, artist, album, genre, release_date } = song
        return (
            <tr>
                <td>{title}</td>
                <td>{artist}</td>
                <td>{album}</td>
                <td>{genre}</td>
                <td>{release_date}</td>
                <td>
                    <div className="center">
                        <button type="submit" for={title} onClick={() => props.handleDelete(song)}>X</button>
                    </div>
                    <div className="center">
                        <UpdateSong addSongToState={props.addNewSong} mainStateSongs={props.state}/>
                    </div>
                    
                </td>
            </tr>
        )
    });
}

export default Song;