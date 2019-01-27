import React, { Component } from 'react';
import Header from '../components/Header';
import Search from '../components/search/Search';
import {Tabbar, Tab, Navigator, Page} from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import '../styles/Tabbar.scss'
import Leaderboard from '../components/Leaderboard';

class Tabs extends Component {
    renderTabs() {
        return [
                        {
                          content: <Search navigator={this.props.navigator}/>,
                          tab: <Tab label="Search" icon="md-home" />
                        },
                        {
                          content: <Leaderboard navigator={this.props.navigator}/>,
                          tab: <Tab label="Leaderboard" icon="md-settings" />
                        }];

    }
    render() { 
        return (
            <Page> 
                <Tabbar
                    renderTabs={this.renderTabs.bind(this)}
                />
             </Page>
        );
    } 
}


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
            <Page>
                <Navigator
                    initialRoute={{comp: Tabs, props: { key: 'tabs' }}}
                    renderPage={this.renderPage}
                />
            </Page>
        );
    }
}
 
export default GuestView;