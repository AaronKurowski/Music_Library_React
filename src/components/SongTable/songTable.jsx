import React from 'react';
import Song from '../Song/song.jsx';
import './songTable.css';

function SongTable(props) {
    return(
        <div className="container-fluid">
            <table className="song-table">
                <thead className="th-background">
                    <tr>
                        <th>Song Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Release Date</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <Song songs={props.songs} handleDelete={props.handleDelete} />
                </tbody>
            </table>
        </div>
    );
}

export default SongTable;