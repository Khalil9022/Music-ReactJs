import React, { Component } from "react";

class Search extends Component {
    state = { artistQuery: '' }

    updateArtistQuery = event => {
        // console.log('event.target.value', event.target.value);
        this.setState({ artistQuery: event.target.value })
    }

    handleKeyPress = event => {
        if (event.key === 'Enter') {
            this.searchArtis()
        }
    }

    searchArtis = () => {
        this.props.searchArtis(this.state.artistQuery)
    }

    render() {
        return (
            <div>
                <input
                    onChange={this.updateArtistQuery}
                    onKeyPress={this.handleKeyPress}
                    placeholder="Search for an Artist" />
                <button onClick={this.searchArtis}>Search</button>
            </div>
        )
    }
}

export default Search