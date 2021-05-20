import React, { Component } from 'react';
import Song from './Song/song.jsx';
import AddSong from './AddSong/addSong.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.songs = [
            {title: 'snoot', artist: 'boop', album: 'album', releaseDate: 'noon'}
        ];
        this.state = {}
    }

    addNewSong(song) {
        this.songs.push(song);
        console.log(this.songs);
    }

    render() {
        return (
            <div>
                {/* Add Title bar for main library page */}
                <h1>Some shib</h1>
                <Song songs={this.songs[0]} />
                {/* Add another title then under this a table per yooj */}
                {/* Create a form to add new songs */}
                <AddSong addNewSong={(song) => this.addNewSong(song)} />
            </div>
        )
    }
}

export default App;