import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBContainer, MDBRow, MDBCol, MDBBtnGroup, MDBIcon } from 'mdbreact';
import ('./NowPlaying.scss');


class NowPlaying  extends Component {
    state = { 
        songTitle: 'Mo Bamba',
        songData: 'Sheck Wes',
        albumArt: 'https://lastfm-img2.akamaized.net/i/u/ar0/26e00f0e05b0203e48e92e791c867425.jpg',
       // likeCount: this.props.project.likeCount,
       // dislikeCount: this.props.project.dislikeCount
        
     };
    render() { 
        return (
            <div className="row spartyfy-player">
                <div className="col d-none d-lg-block">
                    <MDBCard id="player" style={{ width: "flex" }}>
                        <div className="row justify-content-center">
                            <h3>Now Playing</h3>
                        </div>
                        <hr/>
                        <div class="text-center">
                            <img src="https://lastfm-img2.akamaized.net/i/u/ar0/26e00f0e05b0203e48e92e791c867425.jpg" id="albumbig" className="img-fluid img-thumbnail" />
                        </div>
                        <MDBCardBody>   
                        <div className="row">
                            <div className="col-3">
                                <div className="text-center">
                                    <button type="button" class="btn btn-block btn-lg btn-danger center-block">
                                    <i className="fas fa-thumbs-down"></i><span class="badge">7</span>
                                    </button>                    
                                </div>       
                            </div>
                            <div className ="col-6">
                                <p id="songplaying" className="text-uppercase text-center">Mo Bamba</p>
                                <p className="text-center">Sheck Wes</p>
                            </div>
                            <div className="col-3">
                                  <div className="text-center">
                                    <button type="button" class="btn btn-block btn-lg btn-primary center-block">
                                        <i className="fas fa-thumbs-up"></i><span class="badge">420</span>
                                    </button>                    
                                </div>    
                            </div>
                        </div>
                        </MDBCardBody>

                        </MDBCard>
                       
                    </div>

                <div className="col d-lg-none">
                    <MDBCard id="player" style={{height: "20", width: ""}}>
                    <div className="row justify-content-between align-items-center">
                        <div className="col-4">                          
                            <img className="img-thumbnail" id="album" src="https://lastfm-img2.akamaized.net/i/u/ar0/26e00f0e05b0203e48e92e791c867425.jpg" alt=""/>
                        </div>
                        <div className="col-4 align-items-center">
                            <h3 className="text-uppercase text-center text-nowrap">Now Playing</h3>
                            <p className="text-uppercase text-center">Song Title</p>
                            <p className="text-center">Song Data</p>
                        </div>                      
                        <div className="col-4">
                            <div className="row justify-content-center">
                                <div className="col-6">
                                <button type="button" class="btn btn-lg btn-block btn-danger">
                                <i className="fas fa-thumbs-down"></i>
                                </button>                                   
                            </div>
                              
                            <div className="col-6">
                                <button type="button" class="btn btn-lg btn-block btn-primary">
                                    <i className="fas fa-thumbs-up"></i>
                                </button>
                            </div>
                            </div>
                        </div>
                    </div>

                    </MDBCard>
                </div>



            </div>  
            );
    }
}



export default NowPlaying;

