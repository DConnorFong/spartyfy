import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import queryString from 'query-string';
import './LoginPopup.scss';
import { withRouter } from 'react-router';

class LoginPopup extends Component {
    constructor(props) {
        super(props);
        let params = queryString.parse(this.props.location.search);

        let visible = true;
        if (params.visible && params.visible === 'false') {
          visible = false;
        }

        console.log(this.props);
        this.state = {
            visible : visible
        }

    }
    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {
        return (
              <div>
                <Modal show={this.state.visible} animation={false}>
                  <Modal.Header className="d-flex justify-content-center">
                    <Modal.Title>Login to Spotify</Modal.Title>
                  </Modal.Header>
                  <Button bsStyle="success" bsSize="large" href="http://localhost:5000/sessions/login">Sign in</Button>
                </Modal>
              </div>
        );
    }
}

export default withRouter(LoginPopup)