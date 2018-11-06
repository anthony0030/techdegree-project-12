import React from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';
import Icon from "./Icon";
import logo from "./logo.svg";
import Footer from "./Footer"

class Framer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <React.Fragment>
        {/*Open Modal Button*/}
        <Button onClick={this.toggle} target="_blank" className="enlarge-icon">
          <Icon i="enlarge"/>
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalBody>
            {/*Close Modal Button*/}
            <button onClick={this.toggle} target="_blank" className="shrink-icon">
              <Icon i="shrink"/>
            </button>
            <h1 className="modal-title text-light bg-dark">
              <img src={logo} alt="logo" className="main-logo" />
              <span className="d-none d-md-inline align-middle">{this.props.preTitle}</span>
              <span className="align-middle"> {this.props.title}</span>
            </h1>
            <iframe frameBorder="0" className="viewer-iframe" tabIndex="0" title={this.props.title} src={this.props.url} />
            <Footer />
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Framer;