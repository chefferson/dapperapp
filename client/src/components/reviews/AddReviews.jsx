import React, { useState } from 'react';
import withClickReporting from '../../helpers/withClickReporting.js';
import ReviewForm from './review_form/01_ReviewForm.jsx';

const AddReviews = ({data}) => {

  const [showModal, setShowModal] = useState(false);

  const ReviewFormWithClickReporting = withClickReporting(ReviewForm, 'ReviewForm');
  return (
    <>
      <button value={Number(data.reviewsMeta.product_id)} onClick={() => setShowModal(current => !current)}> Add Reviews + </button>
      {showModal ? <ReviewFormWithClickReporting data={data}/> : null}
    </>
  );
};

export default AddReviews;