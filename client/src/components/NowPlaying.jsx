import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBContainer, MDBRow, MDBCol, MDBBtnGroup, MDBIcon } from 'mdbreact';
import ('./NowPlaying.scss');


class NowPlaying  extends Component {
    state = { 
       /* songTitle: this.props.project.songTitle,
        songData: this.props.project.songData,
        albumArt: this.props.project.albumArt,
        likeCount: this.props.project.likeCount,
        dislikeCount: this.props.project.dislikeCount,*/
        
     };
    render() { 
        return (
            <MDBRow>
                <MDBCol className="d-none d-lg-block">
                    <MDBCard id="player" style={{ width: "flex" }}>
                        <h2>Now Playing</h2>
                        <MDBCardImage className="img-fluid img-thumbnail" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                        <MDBCardBody>
                        <div className="row">
                            <div className="col-3">
                                <div className="text-center">
                                    <button type="button" class="btn btn-block btn-lg btn-danger center-block">
                                        <i className="fas fa-thumbs-down"></i>
                                    </button>                    
                                </div>       
                            </div>
                            <div className ="col-6">
                                <MDBCardTitle className="text-uppercase text-center">Song Playing</MDBCardTitle>
                                <MDBCardText className="text-center">Song Data</MDBCardText>
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
                       
                    </MDBCol>

                <MDBCol className="d-lg-none">
                    <MDBCard style={{height: "20", width: ""}}>
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



            </MDBRow>  
            );
    }
}
 
export default NowPlaying;

