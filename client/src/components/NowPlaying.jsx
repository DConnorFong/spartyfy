import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBContainer, MDBRow, MDBCol, MDBBtnGroup, MDBIcon } from 'mdbreact';
import ('./NowPlaying.scss');

const baseUrl = 'http://localhost:5000';
const playlistUrl = baseUrl + '/playlists';
const skipUrl = playlistUrl + '/skip';
const voteUrl = baseUrl + '/vote';
const upVoteUrl = baseUrl + '/vote/up';
const downVoteUrl = baseUrl + '/vote/down';

class NowPlaying  extends Component {
    constructor() {
        super();
        this.state = {
            songTitle: '',
            songArtist: '',
            albumArt: 'http://www.myseumoftoronto.com/wp-content/uploads/2018/05/plain-black-background.jpg',
            upVotes: 0,
            downVotes: 0
        };

        this.pollPlaylist = this.pollPlaylist.bind(this);
        this.pollVotes = this.pollVotes.bind(this);

        this.pollPlaylist();
        setInterval(this.pollVotes, 3000);


    }

    pollPlaylist() {
        fetch(playlistUrl)
          .then(res => {
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

    pollVotes() {
        fetch(voteUrl)
          .then(res => {
              console.log(res);
              return res.json();
          })
          .then((votes) => {
              console.log(votes);
              debugger;
              this.setState({upVotes: votes.up, downVotes: votes.down});
            }
          )
          .catch(() => console.error('Failed to retrieve votes'));
    }

    skipSong() {
        fetch(skipUrl, {
            method: 'post'
        }).then(res => {
            if (res.status === 200) {
                console.log('Skip succeeded');
            } else {
                console.log('Skip failed');
            }
        }).catch((err) => {
            console.error('An error occured while skipping: ' + err);
        });
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
                                    <button type="button" class="btn btn-block btn-lg btn-danger center-block"
                                        onClick={this.downVote}>
                                        <i className="fas fa-thumbs-down"></i><span className="badge">{this.state.downVotes}</span>
                                    </button>

                                </div>       
                            </div>
                            <div className="col-4">
                                    <button type="button" class="btn btn-block btn-lg btn-dark center-block"
                                        onClick={this.skipSong}>
                                        <i class="fas fa-angle-double-right"></i>
                                    </button>
                            </div>
  
                            <div className="col-4">
                                  <div className="text-center">
                                    <button type="button" class="btn btn-block btn-lg btn-primary center-block"
                                        onClick={this.upVote}>
                                        <i className="fas fa-thumbs-up"></i><span className="badge">{this.state.upVotes}</span>
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

