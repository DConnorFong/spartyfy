import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBContainer    , MDBCol, MDBBtnGroup, MDBIcon } from 'mdbreact';
import ('./Session.scss');

const playlistUrl = 'http://www.spartyfy.com:5000/playlists';

class Session  extends Component {
    constructor() {
        super();
        this.state = {
            songTitle: [],
            songArtist: [],
            albumArt: [],
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
          .then(songs => {
            this.setState({songTitle: [], songArtists: [], albumArt: []});
            for (var i = 1; i < 4; i++) {
                if (!songs[i]) {
                    var songT = this.state.songTitle; var songA = this.state.songArtist; var albumA = this.state.albumArt;
                    songT.push('');
                    songA.push('');
                    albumA.push('http://www.myseumoftoronto.com/wp-content/uploads/2018/05/plain-black-background.jpg');
                    this.setState({
                        songTitle: songT, 
                        songArtist: songA, 
                        albumArt: albumA})
                }
                else {
                    var song = songs[i].raw;
                    let title = song.name;
                    let artists = '';
                    song.artists.forEach(artist => {
                        artists += artist.name;
                        artists += ', ';
                    });
                    let albumArt = song.album.images[0].url;

                    var songTb = this.state.songTitle; var songAb = this.state.songArtist; var albumAb = this.state.albumArt;
                    songTb.push(title);
                    songAb.push(artists);
                    albumAb.push(albumArt);
                    this.setState({
                        songTitle: songTb,
                        songArtist: songAb,
                        albumArt: albumAb
                    });
                }
            }
          })
          .then(() => setTimeout(this.pollPlaylist, 3000));
    }


    render() { 
        return (
        
        <div className="container" id="Session">
            <div className="jumbotron">
                <div className="row justify-content-center align-items-center">
                    <div className="col-3">
                        <h2>Next Up:</h2>
                    </div>
                    <div className="col-3">
                        <div className="row align-items-center justify-content-flex-start">
                            <div className="col-2">
                                <p>1</p>
                            </div>
                            <div className="col-3">
                                <img src={this.state.albumArt[0]} className="img-fluid"/>
                            </div>
                            <div className="col-7">                            
                                <h6>{this.state.songTitle[0]}</h6>
                                <h6>{this.state.songArtist[0]}</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="row align-items-center justify-content-flex-start">
                            <div className="col-2">
                                <p>2</p>
                            </div>
                            <div className="col-3">
                                <img src={this.state.albumArt[1]} className="img-fluid"/>
                            </div>
                            <div className="col-7">                            
                                <h6>{this.state.songTitle[1]}</h6>
                                <h6>{this.state.songArtist[1]}</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="row align-items-center justify-content-flex-start">
                            <div className="col-2">
                                <p>3</p>
                            </div>
                            <div className="col-3">
                                <img src={this.state.albumArt[2]} className="img-fluid"/>
                            </div>
                            <div className="col-7">                            
                                <h6>{this.state.songTitle[2]}</h6>
                                <h6>{this.state.songArtist[2]}</h6>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>

        );
    }
}
 
export default Session;