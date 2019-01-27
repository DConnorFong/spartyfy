import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import HostView from './views/HostView';
import GuestView from './views/GuestView';
import Leaderboard from './components/Leaderboard';
import Queue from './components/Queue';
import './components/LoginPopup';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={ GuestView } exact />
                <Route path="/host" component={ HostView }/> 
                <Route component={ GuestView } />
            </Switch>
    </BrowserRouter>
    );
  }
}

export default App;
