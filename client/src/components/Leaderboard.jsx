import React, { Component } from 'react';
import ('./Leaderboard.scss');

class Leaderboard extends Component {
    state = { 
        guests: [
            'DJ Jazzy Jeff',
            'DJ Dirty Dan',
            'Zedd',
            'Jason',
            'Cowan',
            'Connor'
        ]    

    }

    render() { 
        return ( 
            <React.Fragment>
                <div className="container spartify-leaderboard">
                    <div className="row justify-content-center">
                        <h3>Who's Hot Tonight?</h3>
                    </div>
                    <div className="row justify-content-center">
                        {this.renderGuests()}
                    </div>
                </div>
            </React.Fragment> 
        );
    }

    renderGuests() {
        if (this.state.guests.length === 0)
            return (
                <p>No guests yet...</p>
            );
            else
                return <ol>{this.state.guests.map(guest => <li>{guest}</li>)}</ol>;
    }
}
 
export default Leaderboard;