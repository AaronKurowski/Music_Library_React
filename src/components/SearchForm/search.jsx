import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSearch(event) {
        event.preventDefault();
        const searchQuery = {
            searchTerm: this.state.searchTerm.toLowerCase()
        }
        debugger;
        this.props.addSearchTerm(searchQuery);
    }

    render() {
        return(
            <form onSubmit={(event) => this.handleSearch(event)}>
                <label for="title">Search</label>
                {/* Don't forget to pass down inputValue and songFilter */}
                <input type="text" id="title" name="searchTerm" value={this.state.searchTerm} onChange={(event) => this.handleChange(event)}></input>
                <button type="submit">Search</button>
            </form>
        );
    }

}





// function Search(props) {
//     return(
//         <form onSubmit>
//             <label for="title" >Search</label>
//             {/* Don't forget to pass down inputValue and songFilter */}
//             <input type="text" id="title" name="title" value={props} onChange={(event) => this.handleChange(event)}></input>
//             <button type="submit">Search</button>
//         </form>
//     );
// }


// function SearchBy(songs) {
//     let input = document.forms['searchform']['title'].value;
//     let matches = songs.filter((song) => {
//         if(song.title === input){
//             return true;
//         }
//         return false;
//     });
//     return matches;
// }

// function handleSubmit(event) {
//     event.preventDefault();
//     const searchQuery = {
//         title: this.state.title
//     }

//     this.SearchBy(searchQuery);
// }


export default Search;
