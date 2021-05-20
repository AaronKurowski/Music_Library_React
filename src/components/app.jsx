import React, { Component } from 'react';
import Song from './Song/song.jsx';
import AddSong from './AddSong/addSong.jsx';
import SongTable from './SongTable/songTable.jsx';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songs: []
        }
    }

    componentDidMount() {
        this.makeGetRequest();
    }

    async makeGetRequest() {
        try{
            let response = await axios.get('http://127.0.0.1:8000/music/');
            
            this.setState({
                songs: response.data
            })
        }
        catch (error) {
            console.log("eRrOr")
        }
        console.log(this.state.songs)
    }

    addNewSong(song) {
        this.songs.push(song);
        console.log(this.songs);
    }

    render() {
        console.log(this.state.songs)
        return (
            <div>
                {/* Add Title bar for main library page */}
                <h1>Some title</h1>
                <SongTable songs={this.state.songs} />
                {/* Add another title then under this a table per yooj */}
                {/* Create a form to add new songs */}
                {/* <AddSong addNewSong={(song) => this.addNewSong(song)} /> */}
            </div>
        )
    }
}

export default App;