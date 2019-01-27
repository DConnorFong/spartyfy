import React, { Component } from 'react';
import SearchSong from './SearchSong.jsx';
import Header from '../../components/Header';
import { MDBCol } from "mdbreact";
import './Search.scss';
import { Page, SearchInput, Toolbar, List} from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

class SearchComponent extends Component {
    constructor() {
        super();
        this.state = { 
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
    }

    gotoComponent(component, key) {
        this.props.navigator.pushPage({comp: component, props: { key }});
    }
    render() { 
        return (
            <div>
                <SearchInput
                style={{width: "100%"}}
                value={this.state.text}
                onChange={(event) => { this.setState({text: event.target.value, isSearch: false})} }
                modifier='material'
                placeholder='Search' />
                <List
                    dataSource={this.state.songs}
                    renderRow={(row, idx) => <SearchSong id={idx} songTitle={row.songTitle} songArtist={row.songArtist} songImage={row.songImage}/>}
                />
            </div>
        );
    }
    /* TODO: add an on-init fetch for Spotify top songs */
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