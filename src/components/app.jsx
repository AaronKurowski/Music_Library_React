import React, { Component } from 'react';
import './app.css';
import AddSong from './AddSong/addSong.jsx';
import SongTable from './SongTable/songTable.jsx';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songs: []
        }
        this.makeGetRequest = this.makeGetRequest.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.makeGetRequest();
    }

    removeSongFromState(array, song) {
        let index = array.indexOf(song);
        if(index >= 0){
            array.splice(index, 1);
        }
        return array;
    }

    async handleDelete(delSong) {
        // changes state to update dynamically
        const currentSongs = this.state.songs;
        this.setState({
            songs: currentSongs.filter(song => song.id !== delSong.id)
        });

        try{
            await axios.delete(`http://127.0.0.1:8000/music/${delSong.id}/`);
            console.log(delSong);
        }
        catch (error) {
            console.log("An error occured. \nReturning songs...")
            this.setState({
                songs: currentSongs
            });
        }
    }


    async makeGetRequest() {
        try{
            let response = await axios.get('http://127.0.0.1:8000/music/');
            this.setState({
                songs: response.data
            });
        }
        catch (error) {
            console.log("eRrOr");
        }
        console.log(this.state.songs);
    }

    addNewSong(song) {
        this.setState({
            songs: [...this.state.songs, song]
        });
    }


    render() {
        console.log(this.state.songs)
        return (
            <div className="container-fluid">
                {/* Add Title bar for main library page */}
                    <h1>
                    ♬ Aaron's Music Library ♬
                    </h1>
                    <h2>Add a song: </h2>
                <AddSong addSongToState={(song) => this.addNewSong(song)} />
                <SongTable songs={this.state.songs} handleDelete={this.handleDelete}/>
                {/* Add another title then under this a table per yooj */}
                {/* Create a form to add new songs */}
                
            </div>
        );
    }
}

export default App;