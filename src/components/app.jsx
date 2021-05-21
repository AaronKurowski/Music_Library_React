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
    }

    componentDidMount() {
        this.makeGetRequest();
    }

    // shouldComponentUpdate() {
    //     if(true){
    //         this.makeGetRequest();
    //     }
    // }

    componentWillMount(){
        console.log('will mount')
    }


    removeSongFromState(array, song) {
        let index = array.indexOf(song);
        if(index >= 0){
            array.splice(index, 1);
        }
        return array;
    }

    async handleDelete(song) {
        try{
            await axios.delete(`http://127.0.0.1:8000/music/${song.id}/`)
            console.log(song)

            // i don't think i need to manuall change state like this 
            // let newState = this.removeSongFromState(this.state.songs, song)
            // this.setState({
            //     songs: newState
            // });

        //    this.makeGetRequest();
        }
        catch (error) {
            console.log("Error: Song doesn't exists or something")
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


    // might not even need this
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
                <SongTable songs={this.state.songs} handleDelete={this.handleDelete}/>
                {/* Add another title then under this a table per yooj */}
                {/* Create a form to add new songs */}
                <AddSong addNewSong={(song) => this.addNewSong(song)} />
            </div>
        )
    }
}

export default App;