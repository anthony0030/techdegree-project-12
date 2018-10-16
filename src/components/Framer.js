import React from "react";

import Modal from "react-modal";
import Icon from "./Icon";

const customStyles = {
  content : {
    top                   : "0",
    left                  : "0",
    right                 : "0",
    bottom                : "0",
    padding               : "0"
  },

  overlay: {
    zIndex             : "1060",
    maxHeight          : "100vh"
  }




};

Modal.setAppElement("#root")

class Framer extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal} target="_blank" className="enlarge-icon">
          <Icon i="enlarge"/>
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          closeTimeoutMS={1000}
        >
          <h1 className="modal-title">{this.props.title}</h1>

          <button onClick={this.closeModal} target="_blank" className="shrink-icon">
            <Icon i="shrink"/>
          </button>


          <iframe frameBorder="0" className="viewer-iframe" tabIndex="0" title={this.props.title} src={this.props.url} />
        </Modal>
      </div>
    );
  }
}

export default Framer;