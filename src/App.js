import React, { Component } from 'react';
import ReactHowler from 'react-howler';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      url: '123'
    }

    this.playMusic = this.playMusic.bind(this);
  }

  playMusic() {
    this.setState({url: document.getElementById("url").value})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to URL Audio Stream</h2>
        </div>
        <p className="App-intro">
          To get started, enter a direct url and click button below to stream audio
        </p>

        <div className="App-content">
          {/* URL Input */}
          <input className="url-input" id="url" type="text" placeholder="URL" />
          {/* Stream Button */}
          <button className="streamButton" id="streamButton" onClick={this.playMusic}>Stream</button>

          {/* Music Player */}
          <ReactHowler
            src={this.state.url}
            playing={true}
            loop={true}
            html5={true} />
        </div>
      </div>
    );
  }
}

export default App;
