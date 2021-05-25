import React from 'react';
import Song from '../Song/song.jsx';
import './songTable.css';

function SongTable(props) {
    return(
        <div className="container-fluid">
            <table className="table song-table">
                <thead className="th-background">
                    <tr>
                        <th>Song Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Genre</th>
                        <th>Release Date</th>
                        <th>Delete/Update</th>
                    </tr>
                </thead>
                <tbody>
                    <Song state={props.state} addSongToState={props.addNewSong} handleUpdate={props.handleUpdate} handleDelete={props.handleDelete} filterSongs={props.filterSongs} />
                </tbody>
            </table>
        </div>
    );
}

export default SongTable;