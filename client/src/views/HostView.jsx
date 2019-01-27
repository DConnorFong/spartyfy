import React, { Component } from 'react';
import Header from '../components/Header'
import LoginPopup from '../components/LoginPopup';
class HostView extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header />
                <LoginPopup/> 
            </div>
        );
    }
}
 
export default HostView;