import React from 'react';
import './Header.scss';

const Header = () => {
    return ( 
        <React.Fragment>
            <div id="spartyfy-header" className="container d-flex justify-content-center">
                <h1>S<span className="spartyfy-highlight">PARTY</span>FY <i class="fas fa-play"></i></h1>
            </div>
        </React.Fragment>
    );
}
 
export default Header;