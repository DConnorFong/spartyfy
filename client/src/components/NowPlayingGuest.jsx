import React, { Component } from 'react';
import './NowPlayingGuest.scss';

const playlistUrl = 'http://www.spartyfy.com:5000/playlists';

class NowPlayingGuest extends Component {
    constructor() {
        super();
        this.state = {
            songTitle: '',
            songArtist: '',
            albumArt: 'https://static1.squarespace.com/static/59decda418b27ddf3baeb5ba/t/59df0df5197aeac813c065d6/1507790325363/Black.jpg?format=1500w',
        };

        this.pollPlaylist = this.pollPlaylist.bind(this);

        this.pollPlaylist();
    }

    pollPlaylist() {
        fetch(playlistUrl)
          .then(res => {
              console.log(res);
              return res.json();
          })
          .then(songs => songs[0])
          .then(song => {
              if (!song) {
                  return;
              }
              song = song.raw;
              let title = song.name;
              let artists = '';
              song.artists.forEach(artist => {
                  artists += artist.name;
                  artists += ', ';
              });

              let albumArt = song.album.images[0].url;
              this.setState({songTitle: title, songArtist: artists, albumArt: albumArt});
          })
          .then(() => setTimeout(this.pollPlaylist, 3000));
    }

    render() { 
        return ( 
            <div id="player-guest" className="container">
                <div className="row">
                    <div className="col-3 col-sm-2">
                        <img src={this.state.albumArt} id="album-small" className="img-fluid img-thumbnail"/>
                    </div>
                    <div className="col-7">
                        <p className="player-guest-nowplaying">Now Playing</p>
                        <p className="player-guest-song">{this.state.songTitle}</p>
                        <p>{this.state.songArtist}</p>
                    </div>
                    <div className="col-2 col-sm-3">
                        <button type="button" class="btn btn-block btn btn-primary center-block">
                            <i className="fas fa-thumbs-up"></i>
                        </button> 
                        <button type="button" class="btn btn-block btn btn-danger center-block">
                            <i className="fas fa-thumbs-down"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    /*
    formatArtist(artist) {
        if (artist === '')
            return '';
        else
            return (artist.slice(-1) === ',') ? artist.substring(1, artist.length) : artist;
    }
    */
}
 
export default NowPlayingGuest;