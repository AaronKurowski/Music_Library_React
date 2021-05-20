import React from 'react';
import Song from '../Song/song.jsx';


function SongTable(props) {
    return(
        <div className="container-fluid">
            <table>
                <thead>
                    <tr className="th-background">
                        <th>Song Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Release Date</th>
                        <th>Likes</th>
                    </tr>
                </thead>
                <Song />
            </table>
        </div>
    );
}

export default SongTable;