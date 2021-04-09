import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Button, Modal, ModalBody } from 'reactstrap';

// Application Components
import logo from "../assets/images/logo.svg";
import { Footer, Icon } from "components";

function Framer(props) {
  const {className, url, preTitle, title} = props;
  const [modalOpen, setModalOpen] = useState(props.modalOpen);
  const [rootPath, setRootPath] = useState("");
  const history = useHistory();
  let { root } = useParams();


  useEffect(() => {
    let initialRootPath = "/";
    if( root === process.env.RAZZLE_APP_BASE_NAME )
      { initialRootPath = `/${process.env.RAZZLE_APP_BASE_NAME}/`; };
      setRootPath(initialRootPath)
  }, []);

  const toggleModal= () => {
    setModalOpen(!modalOpen)
  };

  const openModal= () => {
    setModalOpen(true)
    history.push(`${rootPath}FEWD/${title.replace(" ", "-")}`);
  };

  const closeModal = () => {
    setModalOpen(false)
    history.push(`${rootPath}FEWD`);
  };

  return (
    <>
      {/*Open Modal Button*/}
      <Button onClick={openModal} target="_blank" className="enlarge-icon" color="light">
        <Icon i="enlarge"/>
      </Button>
      <Modal isOpen={modalOpen} toggle={toggleModal} className={className}>
        <ModalBody>
          {/*Close Modal Button*/}
          <button onClick={closeModal} target="_blank" className="shrink-icon">
            <Icon i="shrink"/>
          </button>
          <h1 className="modal-title text-light bg-dark">
            <img src={logo} alt="logo" className="main-logo" />
            <span className="d-none d-md-inline align-middle">{preTitle}</span>
            &nbsp;
            <span className="align-middle">{title}</span>
          </h1>
          <iframe frameBorder="0" className="viewer-iframe" tabIndex="0" title={title} src={url} />
          <Footer />
        </ModalBody>
      </Modal>
    </>
  )
}

Framer.propTypes = {
  title: PropTypes.string.isRequired,
  preTitle: PropTypes.string,
  url: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  projectIndex: PropTypes.number.isRequired,
  modalOpen: PropTypes.bool.isRequired
};

export default Framer
