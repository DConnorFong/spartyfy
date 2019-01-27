import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBContainer    , MDBCol, MDBBtnGroup, MDBIcon } from 'mdbreact';
import ('./Session.scss');
class Session  extends Component {
    state = { 
        /*songTitle;
        Session
        Player
        */
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
                                <img src='http://www.myseumoftoronto.com/wp-content/uploads/2018/05/plain-black-background.jpg' className="img-fluid   "/>
                            </div>
                            <div className="col-7">                            
                                <h4>Song Info</h4>
                                <h4>Artist</h4>
                            </div>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="row align-items-center justify-content-flex-start">
                                <div className="col-2">
                                    <p>2</p>
                                </div>
                                <div className="col-3">
                                    <img src='http://www.myseumoftoronto.com/wp-content/uploads/2018/05/plain-black-background.jpg' className="img-fluid   "/>
                                </div>
                                <div className="col-7">                            
                                    <h4>Song Info</h4>
                                    <h4>Artist</h4>
                                </div>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="row align-items-center justify-content-flex-start">
                                <div className="col-2">
                                    <p>3</p>
                                </div>
                                <div className="col-3">
                                    <img src='http://www.myseumoftoronto.com/wp-content/uploads/2018/05/plain-black-background.jpg' className="img-fluid   "/>
                                </div>
                                <div className="col-7">                            
                                    <h4>Song Info</h4>
                                    <h4>Artist</h4>
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