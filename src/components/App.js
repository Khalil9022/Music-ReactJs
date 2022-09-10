import React, { Component } from "react";
import User from "./User";
import Search from "./Search";

const API_ADDRESS = 'https://jsonplaceholder.typicode.com'

class App extends Component {
  state = { artist: null }

  searchArtis = artistQuery => {
    fetch(`${API_ADDRESS}/users/${artistQuery}`)
      .then(response => response.json())
      .then(json => {
        console.log('json', json);
        const artist = json
        this.setState({ artist })
      })
      .catch(error => alert(error.message))
  }

  render() {
    console.log('this.state', this.state);

    return (
      <div>
        <h2>Music Master</h2>
        <Search searchArtis={this.searchArtis} />
        <User artist={this.state.artist} />
      </div>
    );
  }
}

export default App;
