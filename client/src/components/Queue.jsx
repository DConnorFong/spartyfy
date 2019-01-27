import React, { Component } from 'react';

class Queue extends Component {
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
                <div className="container">
                    <div className="row justify-content-center">
                        <h3>What's Up Next?</h3>
                    </div>
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
 
export default Queue;