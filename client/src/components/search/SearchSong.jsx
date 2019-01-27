import React, { Component } from 'react';
import { Page, List, ListHeader, ListItem } from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import './SearchSong.scss';

class SearchSong extends Component {
    state = { 
        songTitle: this.props.songTitle,
        songArtist: this.props.songArtist,
        songImage: this.props.songImage,
        id: this.props.id
    }

    render() { 
        return (
            <ListItem key={this.props.id} tappable>
                <div className="center">
                    {this.state.songTitle}<br/>
                    {this.state.songArtist}
                </div>
                <div className="left">
                    <img src={this.state.songImage} alt="" width="50" height="50" />
                </div>
            </ListItem>
        );
    }
}
 
export default SearchSong;