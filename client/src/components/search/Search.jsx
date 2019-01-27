import React, { Component } from 'react';
import SearchSong from './SearchSong.jsx';
import Header from '../../components/Header';
import './Search.scss';
import { Page, SearchInput, Toolbar, List, Button} from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import '../../styles/Tabbar.scss'
import queryString from 'query-string';

const baseUrl = 'http://40.85.221.22:5000';
const searchUrl = baseUrl + '/search/song';
const addUrl = baseUrl + '/playlists/song';

class SearchComponent extends Component {
    constructor() {
        super();
        this.state = { 
            isSearch: true,
            songs: []
        };

        this.searchSong = this.searchSong.bind(this);
        this.addSong = this.addSong.bind(this);
    }

    gotoComponent(component, key) {
        this.props.navigator.pushPage({comp: component, props: { key }});
    }
    render() { 
        return (
            <div className="container spartyfy-search">
                <div className="row">
                    <div className="col-8 col-md-10 spartyfy-searchbar">
                        <SearchInput
                            style={{width: "100%"}}
                            value={this.state.text}
                            onChange={(event) => { this.setState({text: event.target.value, isSearch: false})} }
                            modifier='material'
                            placeholder='Search' 
                        />                   
                    </div>
                    <div className="col-4 col-md-2 spartyfy-button d-flex justify-content-center">
                        <Button onClick={this.searchSong}>Search</Button>
                    </div>
                </div>
                <List
                    dataSource={this.state.songs}
                    renderRow={(row, idx) => (
                      <SearchSong id={idx} songTitle={row.songTitle} songArtist={row.songArtist} songImage={row.songImage} onClick={this.addSong(idx)}/>)
                    }
                />
            </div>
        );
    }
    /* TODO: add an on-init fetch for Spotify top songs */

    async searchSong() {
        let query = this.state.text;

        this.setState({songs: []});

        if (!query) {
            console.error('Search must not be empty');
            return;
        }

        let results = await fetch(searchUrl + '?' +
            queryString.stringify({q: query}));

        if (results.status !== 200) {
            console.error('Search failed, is a host connected?');
            return;
        }

        results = await results.json();

        console.log(results);

        this.setState({rawSongs: results});
        this.setState({songs: this.convertToSongs(results)})
    }

    convertToSongs(results) {
        let items = results.tracks.items;

        console.log('items:\n');
        console.log(JSON.stringify(items));
        let songs = items.map(function (item) {
            console.log(JSON.stringify(item));
            let song = {};

            song.songTitle = item.name;

            song.songArtist = '';
            item.artists.forEach(function(artist) {
                song.songArtist += artist.name;
                song.songArtist += ', ';
            });

            // assuming the last image is smallest
            let lastId = item.album.images.length - 1;
            song.songImage = item.album.images[lastId].url;

            return song;
        });

        return songs;
    }

    addSong(idx) {
        let thiss = this;
        return async () => {
            let rawSong = thiss.state.rawSongs.tracks.items[idx];
            let response = await fetch(addUrl, {
                method: 'post',
                body: JSON.stringify({raw: rawSong}),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.status !== 200) {
                console.error('Failed to add song.');
            } else {
                thiss.setState({ rawSongs: null, songs: [], text: ''} );
            }
        }
    }
}

class Search extends Component {
    renderToolbar() {
        return (
          <Toolbar visible={false}>
            <div className='left'>
            </div>
          </Toolbar>
        );
      }
    render() {
        return(
            <Page renderToolbar={this.renderToolbar}>
                <Header/>
                <SearchComponent/>
            </Page>
        );
    }
}
 
export default Search;