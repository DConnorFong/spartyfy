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
            <div className="row justify-content-center">
                <div className="col d-none d-lg-block">
                    <MDBCard id="player" style={{ width: "23" }}>
                        <h2>Now Playing</h2>
                        <div className="row justify-content-center">
                        <marquee behavior="scroll" direction="left" className="col-8" id="songplaying">{this.state.songTitle} - {this.state.songTitle}</marquee>
                        </div>
                        <div class="text-center">
                            <img src={this.state.albumArt} id="albumbig" className="img-fluid img-thumbnail"/>
                        </div>
                        <MDBCardBody>   

                        <div className="row justify-content-center">
                            <div className="col-3">
                                <div className="text-center">
                                    <button type="button" class="btn btn-block btn-lg btn-danger center-block">
                                        <i className="fas fa-thumbs-down"></i>
                                    </button>

                                </div>       
                            </div>
                            <div className ="col-6">
                                <p id="songplaying" className="text-uppercase text-center">{this.state.songTitle}</p>
                                <p className="text-center">{this.state.songArtist}</p>
                            </div>
                            <div className="col-3">
                                  <div className="text-center">
                                    <button type="button" class="btn btn-block btn-lg btn-primary center-block">
                                        <i className="fas fa-thumbs-up"></i>
                                    </button>                    
                                </div>    
                            </div>
                        </div>
                        </MDBCardBody>

                        </MDBCard>
                       
                    </div>

                <MDBCol className="d-lg-none">
                    <MDBCard id="player" style={{height: "20", width: ""}}>
                    <div className="row justify-content-between align-items-center">
                        <div className="col-4">                          
                            <img className="img-thumbnail" id="album" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt=""/>
                        </div>
                        <div className="col-4">
                            <MDBCardTitle className="text-uppercase text-center text-nowrap">Now Playing</MDBCardTitle>
                            <MDBCardTitle className="text-uppercase text-center"><small>Song Title</small></MDBCardTitle>
                            <MDBCardText>Song Data</MDBCardText>
                        </div>                      
                        <div className="col-4">
                            <div className="row justify-content-center">
                                <div className="col-6">
                                <button type="button" class="btn btn-primary">
                                <i className="fas fa-thumbs-down"></i>
                                </button>                                   
                            </div>
                              
                            <div className="col-6">
                                <button type="button" class="btn btn-primary">
                                    <i className="fas fa-thumbs-up"></i>
                                </button>
                            </div>
                            </div>
                        </div>
                    </div>

                    </MDBCard>
                </MDBCol>



            </div>  
            );
    }
}
 
export default NowPlaying;

