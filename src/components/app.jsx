import React, { Component } from 'react';
import Song from './Song/song.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.songs = [
            {title: 'snoot', artist: 'boop', album: 'album', releaseDate: 'noon'}
        ];
        this.state = {}
    }

    render() {
        return (
            <div>
                {/* Add Title bar for main library page */}
                <h1>Some shib</h1>
                <Song song={this.songs[0]} />
                {/* Add another title then under this a table per yooj */}
            </div>
        )
    }
}

export default App;