import React, { Component } from 'react';
import './SearchSong.scss';

class SearchSong extends Component {
    state = { 
        songTitle: this.props.song.songTitle,
        songArtist: this.props.song.songArtist,
        songImage: this.props.song.songImage
    }

    render() { 
        return (  
            <div className="container spartyfy-search-song">
                <div className="row">
                    <div className="col-6">
                        <img src={this.state.songImage} alt="This is the album art" width="75" height="" />
                    </div>
                    <div className="col-6 spartyfy-search-song-content">
                        <p><b>{this.state.songTitle}</b></p>
                        <p>{this.state.songArtist}</p>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default SearchSong;