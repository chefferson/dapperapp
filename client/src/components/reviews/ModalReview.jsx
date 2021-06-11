import React, { useState } from 'react';
import Modal from '../shared/Modal.jsx';

const ModalReview = ({data}) => {

  console.log(data);

  const characteristics = data.reviewsMeta.characteristics;
  const [formCharacteristicFields, setSormCharacteristicFields] = useState(Object.keys(characteristics));

  const content = (
    <>
      Hello this is a form for submitting a new review
    </>
  );

  return (
    <Modal content={content}/>
  );
};

export default ModalReview;