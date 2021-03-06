import React, { Component } from 'react';
import {Button, Modal} from 'react-bootstrap';
import '../AddSong/modal.css';
import axios from 'axios';
import './updateSong.css';

class UpdateSong extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            title: '',
            artist: '',
            album: '',
            genre: '',
            release_date: '',
            show: false
        };
    };

    handleModal() {
        this.setState({
            show: !this.state.show
        });
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }


    handleSubmit(event, upSong){
        event.preventDefault();
        
        const song = {
            title: this.state.title,
            artist: this.state.artist,
            album: this.state.album,
            genre: this.state.genre,
            release_date: this.state.release_date
        }

        try{
            axios.put(`http://127.0.0.1:8000/music/${upSong.id}/`);
        }
        catch(error){
            console.log("Error trying to update song");
        }
        this.setState({
            id: '',
            title: '',
            artist: '',
            album: '',
            genre: '',
            release_date: '',
        });

    }


    render(){
        return(
            <div>
                <Button className="btn-sm text-right mb-3 btn-xsm" onClick={() => {this.handleModal()}}>Update</Button>
                <Modal show={this.state.show} onHide={() => {this.handleModal()}}>
                    <Modal.Header>Update Song</Modal.Header>
                    <Modal.Body>
                        <form onSubmit={(event) => this.handleSubmit(event)}>
                            <label>Title</label>
                            <input type="text" name="title" value={this.state.title} onChange={(event) => this.handleChange(event)}></input>

                            <label>Artist</label>
                            <input type="text" name="artist" value={this.state.artist} onChange={(event) => this.handleChange(event)}></input>
                        
                            <label>Album</label>
                            <input type="text" name="album" value={this.state.album} onChange={(event) => this.handleChange(event)}></input>

                            <label>Genre</label>
                            <input type="text" name="genre" value={this.state.genre} onChange={(event) => this.handleChange(event)}></input>
                        
                            <label>Release Date</label>
                            <input type="date" name="release_date" value={this.state.release_date} onChange={(event) => this.handleChange(event)}></input>
                        
                        <button type="submit" value="Add">Update!</button>
                    </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={(song) => {this.handleModal(song)}}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default UpdateSong;