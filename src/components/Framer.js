import React from 'react';
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Button, Modal, ModalBody } from 'reactstrap';
import Icon from "./Icon";
import logo from "./logo.svg";
import Footer from "./Footer"

class Framer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modalOpen: props.modalOpen
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.openModal   = this.openModal.bind(this);
    this.closeModal  = this.closeModal.bind(this);
  }

  toggleModal() {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  }

  openModal= (event) => {
    this.setState({
      modalOpen: true
    });
    console.log(this)
    this.props.history.push(`/home/${this.props.title.replace(" ", "-")}`);
  }

  closeModal = (event) => {
    this.setState({
      modalOpen: false
    });
    console.log(this)
    this.props.history.push("/home");
  }

  render() {
    // console.log(this.props)
    return (
      <React.Fragment>
        {/*Open Modal Button*/}
        <Button onClick={this.openModal} target="_blank" className="enlarge-icon">
          <Icon i="enlarge"/>
        </Button>
        <Modal isOpen={this.state.modalOpen} toggle={this.toggleModal} className={this.props.className}>
          <ModalBody>
            {/*Close Modal Button*/}
            <button onClick={this.closeModal} target="_blank" className="shrink-icon">
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


Framer.propTypes = {
  title: PropTypes.string.isRequired,
  projectIndex: PropTypes.number.isRequired,
  modalOpen: PropTypes.bool.isRequired
};

// export default Framer;
export default withRouter(Framer);