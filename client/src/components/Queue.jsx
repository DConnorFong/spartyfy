import React, { Component } from 'react';
import { Page, Toolbar } from 'react-onsenui';
import Header from '../components/Header';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import ('./Queue.scss');

class QueueComponent extends Component {
    state = { 
        songs: [
            'songOne',
            'songTwo',
            'songThree',
            'songFour',
            'songFive',
            'songSix'
        ]    

    }

    render() { 
        return ( 
            <React.Fragment>
                <div className="container spartyfy-queue">
                    <div className="row justify-content-center">
                        <h3>What's Up Next?</h3>
                    </div>
                    <hr />
                    <div className="row justify-content-center">
                        {this.renderSongs()}
                    </div>
                </div>
            </React.Fragment> 
        );
    }

    renderSongs() {
        if (this.state.songs.length === 0)
            return (
                <p>No songs coming up...</p>
            );
            else
                return <ol>{this.state.songs.map(song => <li>{song}</li>)}</ol>;
    }
}

class Queue extends Component {
    constructor() {
        super();
    }
    renderToolbar() {
        return (
          <Toolbar visible={false}>
            <div className='right'>
            </div>
          </Toolbar>
        );
      }
    render() {
        return(
            <Page renderToolbar={this.renderToolbar}>
                
                <QueueComponent/>
            </Page>
        );
    }
}
export default Queue;