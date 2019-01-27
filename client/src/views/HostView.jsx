import React, { Component } from 'react';
import Header from '../components/Header'
import LoginPopup from '../components/LoginPopup';
import Leaderboard from '../components/Leaderboard';
import NowPlaying from '../components/NowPlaying';
import Session from '../components/Session';
import Queue from '../components/Queue';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBContainer, MDBRow, MDBCol, MDBBtnGroup, MDBIcon } from 'mdbreact';


class HostView extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <Header />
            <LoginPopup />
            <Session/>
            <div className=" row justify-content-center align-items-top"> 
                <div className= "col col-md-auto"><NowPlaying/></div>
            </div>
            </div>
            
        );
    }
}
 
export default HostView;