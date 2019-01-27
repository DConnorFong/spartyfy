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
                    <hr />
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
                return <ol>{this.state.guests.map((guest, index) => <li className={this.styleRanking(index)}>{guest}</li>)}</ol>;
    }

    styleRanking(index) {
        if (index === 0) 
            return 'gold';
        else if (index === 1)
            return 'silver';
        else if (index === 2)
            return 'bronze';
        else
            return '';
    }
}
 
export default Leaderboard;