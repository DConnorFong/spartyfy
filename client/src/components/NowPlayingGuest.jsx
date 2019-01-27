import React, { Component } from 'react';
import './NowPlayingGuest.scss';

const baseUrl = 'http://spartyfy.com:5000';
const playlistUrl = baseUrl + '/playlists';
const upVoteUrl = baseUrl + '/vote/up';
const downVoteUrl = baseUrl + '/vote/down';


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

    upVote() {
        fetch(upVoteUrl, {
            method: 'put'
        }).then(res => {
            if (res.status !== 204) {
                console.error('Up vote failed');
            }
        }).catch(err => {
            console.error('An error occured while up voting: ' + err);
        });
    }

    downVote() {
        fetch(downVoteUrl, {
            method: 'put'
        }).then(res => {
            if (res.status !== 204) {
                console.error('Down vote failed');
            }
        }).catch(err => {
            console.error('An error occured while down voting: ' + err);
        });
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
                    <div className="col-3 col-sm-2 menu-item">
                        <img src={this.state.albumArt} id="album-small" className="img-fluid img-thumbnail"/>
                    </div>
                    <div className="col-7">
                        <p className="player-guest-nowplaying">Now Playing</p>
                        <p className="player-guest-song">{this.state.songTitle}</p>
                        <p>{this.state.songArtist}</p>
                    </div>
                    <div className="col-2 col-sm-3">
                        <button type="button" class="btn btn-block btn btn-primary center-block" onClick={this.upVote}>
                            <i className="fas fa-thumbs-up"></i>
                        </button> 
                        <button type="button" class="btn btn-block btn btn-danger center-block" onClick={this.downVote}>
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