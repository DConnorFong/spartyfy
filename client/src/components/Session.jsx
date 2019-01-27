import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBContainer    , MDBCol, MDBBtnGroup, MDBIcon } from 'mdbreact';
import ('./Session.scss');
class Session  extends Component {
    state = { 
       
        SessionName: [
            'litpartysesh6969'
        ],
        Person:[
            'Jason_Laptop'
        ]

     }
    render() { 
        return (
        
        <div className="container">
            <div className="jumbotron">
                <div id="content">
                    <h1 className="text-nowrap">Session Name:  {this.renderSessionName()}</h1>

                    <h3>Playing On:  {this.renderPerson()}</h3>
                </div>
                
            </div>
            </div>

            );
    }
    renderSessionName() {
        if (this.state.SessionName.length === 0)
            return (
                <p>No songs coming up...</p>
            );
            else
                return <span id="sessionName">{this.state.SessionName}</span>;
    }

    renderPerson() {
        if (this.state.Person.length === 0)
            return (
                <p>No songs coming up...</p>
            );
            else
                return <span id="Person">{this.state.Person}</span>;
    }
}
 
export default Session;