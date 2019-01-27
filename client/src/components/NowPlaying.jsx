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
            <div className="row justify-content-center">
                <div className="col d-none d-lg-block">
                    <MDBCard id="player" style={{ width: "23" }}>
                        <h2>Now Playing</h2>
                        <div className="row justify-content-center">
                        <marquee behavior="scroll" direction="left" className="col-8" id="songplaying">MO BAMBA - Sheck Wes</marquee>
                        </div>
                        <div class="text-center">
                            <img src="http://www.flat-e.com/flate5/wp-content/uploads/cover-960x857.jpg" id="albumbig" className="img-fluid" />
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
                            <div className="col-6">
                        
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

