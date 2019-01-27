import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBContainer, MDBRow, MDBCol, MDBBtnGroup, MDBIcon } from 'mdbreact';
import ('./NowPlaying.scss');

const playlistUrl = 'http://localhost:5000/playlists';

class NowPlaying  extends Component {
    constructor() {
        super();
        this.state = {
            songTitle: '',
            songArtist: '',
            albumArt: 'http://www.myseumoftoronto.com/wp-content/uploads/2018/05/plain-black-background.jpg',
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
            <div className="row justify-content-center">
                <div className="col d-none d-lg-block">
                    <MDBCard id="player" style={{ width: "flex" }}>
                        <h2>Now Playing</h2>
                        <div className="row justify-content-center">
                        <marquee behavior="scroll" direction="left" className="col-8" id="songplaying">{this.state.songTitle} - {this.state.songArtist}</marquee>
                        </div>
                        <div class="text-center">
                            <img src={this.state.albumArt} id="albumbig" className="img-fluid   "/>
                        </div>
                        <MDBCardBody>   

                        <div className="row justify-content-between">
                            <div className="col-4">
                                <div className="text-center">
                                    <button type="button" class="btn btn-block btn-lg btn-danger center-block">
                                        <i className="fas fa-thumbs-down"></i><span className="badge">3</span>
                                    </button>

                                </div>       
                            </div>
                            <div className="col-4">
                                    <button type="button" class="btn btn-block btn-lg btn-dark center-block">
                                        <i class="fas fa-angle-double-right"></i>
                                    </button>
                            </div>
  
                            <div className="col-4">
                                  <div className="text-center">
                                    <button type="button" class="btn btn-block btn-lg btn-primary center-block">
                                        <i className="fas fa-thumbs-up"></i><span className="badge">3</span>
                                    </button>                    
                                </div>    
                            </div>
                        </div>
                        </MDBCardBody>

                        </MDBCard>
                       
                </div>  
            </div>  
        );
    }
}
 
export default NowPlaying;

