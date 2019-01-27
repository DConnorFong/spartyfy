import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './LoginPopup.scss';

export default class LoginPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : true
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
                  <Button bsStyle="success" bsSize="large">Sign in</Button>
                </Modal>
              </div>
        );
    }
}