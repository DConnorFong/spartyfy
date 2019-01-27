import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NowPlaying from './components/NowPlaying';
import Session from './components/Session';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

  state = {
    NowPlaying: {
      songTitle : 'YAHHH',
      songInfo  : 'yeeeet',
    }
  }

  



  render() {

    return (
      <div className="App"> 
        <Session/>
        <NowPlaying/>
        
      </div>
    );
  }
}

export default App;
