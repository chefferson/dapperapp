/*
  Modal component to share between
  1. photos
  2. review form
  3. question / answer form
*/

import React, { useState } from 'react';
import ModalPhoto from './ModalPhoto.jsx';

// temporary styling for modal
var modalStyle = {
  position: 'fixed',
  background: 'white',
  height: 'auto',
  width: 'auto',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  border: '2px solid',
};

// temporary styling for image
var imgStyle = {
  width: '35em',
  height: 'auto',
  position: 'relative',
  margin: '0 auto',
};

const Modal = (props) => {
  const [showModal, setShowModal] = useState(true);

  if (showModal) {
    return (
      <section style={modalStyle} >
        {props.name === 'photo' ? <ModalPhoto url={props.url} imgStyle={imgStyle}/> : null}
        {/* {props.name === 'review' ? <ModalReview /> : null}
        {props.name === 'question' ? <ModalQuestion /> : null}
        {props.name === 'answer' ? <ModalAnswer /> : null}
        {props.name === 'comparison' ? <ModalComparison /> : null} */}
        <div>
          <button onClick={() => setShowModal(current => !current)}> Close </button>
        </div>
      </section>
    );
  }
  return null;
};

export default Modal;