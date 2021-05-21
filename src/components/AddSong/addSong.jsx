import axios from 'axios';
import React, { Component } from 'react';

class AddSong extends Component {
    state = {
        title: '',
        artist: '',
        album: '',
        release_date: ''
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    // this might change to send straight to the back end
    handleSubmit(event) {
        event.preventDefault();
        const song = {
            title: this.state.title,
            artist: this.state.artist,
            album: this.state.album,
            release_date: this.state.releaseDate
        }
        this.props.addNewSong(song)
        this.setState({
            title: '',
            artist: '',
            album: '',
            release_date: ''
        });
    }

    render() {
        return(
            <div className="container-fluid">
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <label>Title</label>
                    <input type="text" name="title" value={this.state.title} onChange={(event) => this.handleChange(event)}></input>

                    <label>Artist</label>
                    <input type="text" name="artist" value={this.state.artist} onChange={(event) => this.handleChange(event)}></input>

                    <label>Album</label>
                    <input type="text" name="album" value={this.state.album} onChange={(event) => this.handleChange(event)}></input>

                    <label>Release Date</label>
                    <input type="date" name="releaseDate" value={this.state.release_date} onChange={(event) => this.handleChange(event)}></input>

                    <button type="submit" value="Add">Add Song</button>
                </form>
            </div>
        )
    }
}

export default AddSong;