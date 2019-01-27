import React, { Component } from 'react';
import SearchSong from './SearchSong.jsx';
import { MDBCol } from "mdbreact";
import './Search.scss';
import { Page, List, ListHeader, ListItem } from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

class Search extends Component {
    state = { 
        isSearch: true,
        songs: [
            {
                songTitle: 'This is a Test',
                songArtist: 'Test Artist',
                songImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Dark_Horse_%28Nickelback_album_cover%29.jpg/220px-Dark_Horse_%28Nickelback_album_cover%29.jpg'
            },
            {
                songTitle: 'This is a Test',
                songArtist: 'Test Artist',
                songImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Dark_Horse_%28Nickelback_album_cover%29.jpg/220px-Dark_Horse_%28Nickelback_album_cover%29.jpg'
            },
            {
                songTitle: 'This is a Test',
                songArtist: 'Test Artist',
                songImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Dark_Horse_%28Nickelback_album_cover%29.jpg/220px-Dark_Horse_%28Nickelback_album_cover%29.jpg'
            },
            {
                songTitle: 'This is a Test',
                songArtist: 'Test Artist',
                songImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Dark_Horse_%28Nickelback_album_cover%29.jpg/220px-Dark_Horse_%28Nickelback_album_cover%29.jpg'
            },
            {
                songTitle: 'This is a Test',
                songArtist: 'Test Artist',
                songImage: 'https://i.scdn.co/image/366f54da73f053d324aad6ca819a103ddb0e64bc'
            }
        ]
    }
    render() { 
        return ( 
            <React.Fragment>
                <div id="spartyfy-search-header" className="container">
                    <div className="row d-flex justify-content-center">
                        <h3>{this.formatTitle()}</h3>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <MDBCol md="6">
                            <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
                        </MDBCol>
                    </div>
                    {this.renderSongs()}
                </div>
            </React.Fragment>
        );
    }

    formatTitle() {
        return (this.state.isSearch) ? 'Search' : 'Top Songs';
    }
    
    renderSongs() {
        return (
            <React.Fragment>
                {this.state.songs.map(song => <div className="row"><SearchSong song={song} /></div>)}
            </React.Fragment>    
        );
    }

    /* TODO: add an on-init fetch for Spotify top songs */
}
 
export default Search;