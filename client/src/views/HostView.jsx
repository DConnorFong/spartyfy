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
            {/* <LoginPopup/>  */}
            
            <Session/>
            <MDBRow className="justify-content-center align-items-center"> 
                <MDBCol lg="4" sm="12"><Leaderboard/></MDBCol>
                <MDBCol lg="4" sm="12"><NowPlaying/></MDBCol>
                <MDBCol lg="4" sm="12"><Queue/></MDBCol>
            </MDBRow>
            </div>
            
        );
    }
}
 
export default HostView;