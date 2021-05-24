import React, { Component } from 'react';
import './app.css';
import AddSong from './AddSong/addSong.jsx';
import SongTable from './SongTable/songTable.jsx';
import axios from 'axios';
import Search from './SearchForm/search.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songs: [],
            searchTerm: ''
        }
        this.makeGetRequest = this.makeGetRequest.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.makeGetRequest();
    }

    filterSongs(songs, query) {
        debugger;
        console.log(query);
        if(!query.searchTerm){
            return songs;
        }
        let filteredSongs = songs.filter((song) => {
            if(song.title.toLowerCase() === query.searchTerm.toLowerCase()){
                return true;
            }
        });
        return filteredSongs;
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

    addSearchTerm(query) {
        debugger;
        this.setState({
            searchTerm: query
        });
    }

    render() {
        console.log(this.state.songs)
        return (
            <div className="container-fluid">
                <h1>♬ Aaron's Music Library ♬</h1>
                <h2>Add a song: </h2>
                <Search addSearchTerm={(query) => this.addSearchTerm(query)} handleSearch={this.handleSearch}/>
                <AddSong addSongToState={(song) => this.addNewSong(song)} handleChange={this.handleChange} />
                <SongTable state={this.state} handleDelete={this.handleDelete} filterSongs={this.filterSongs}/>             
            </div>
        );
    }
}

export default App;