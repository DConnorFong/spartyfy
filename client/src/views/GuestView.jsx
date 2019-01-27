import React, { Component } from 'react';
import Search from '../components/search/Search';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import '../styles/Tabbar.scss'

class GuestView extends Component {
    constructor() {
        super();
        this.state = {
            index: 0,
        }
    }
    renderPage(route, navigator) {
        route.props = route.props || {};
        route.props.navigator = navigator;
    
        return React.createElement(route.comp, route.props);
      } 
    render() { 
        return ( 
            <React.Fragment>
                <Search navigator={this.props.navigator}/>
                <div id="spartyfy-nowplaying-footer">This is a test</div>
            </React.Fragment>
        );
    }
}
 
export default GuestView;