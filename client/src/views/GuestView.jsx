import React, { Component } from 'react';
import Header from '../components/Header';
import Search from '../components/search/Search';

class GuestView extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Header />
                <Search />
            </React.Fragment>
        );
    }
}
 
export default GuestView;