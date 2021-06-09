import React, { useState, useEffect } from 'react';
import RatingBar from './RatingBar.jsx';
import ReviewList from './ReviewList.jsx';
import RatingFilterDesc from './RatingFilterDesc.jsx';
import Recommended from './Recommended.jsx';

import { MakeRating, reverseRatingFromHighestToLowestInArray } from '../../helpers/MakeRating.js';

const RatingBreakdown = (props) => {

  const ratingOverview = MakeRating(props.data.ratings);

  const [starData, setStarData] = useState(reverseRatingFromHighestToLowestInArray(props.data.ratings));
  const [max, setMax] = useState(ratingOverview.maxRating);
  const [rating, setRating] = useState([]);

  const handleRatingSelected = (e) => {
    let ratingValue = Number(e.currentTarget.getAttribute('value'));
    console.log('event ', e.currentTarget.getAttribute('value'));
    let index = rating.indexOf(ratingValue);
    console.log('index:', index, 'currentRatingFilter: ', rating);
    if (index > -1) {
      setRating(array => {
        array.splice(index, 1);
        return [...array];
      });
    } else {
      setRating(array => [...array, ratingValue]);
    }
  };

  console.log('rating state', rating);

  return (
    <>
      <div>
        <RatingFilterDesc data={rating} setRating={setRating}/>
      </div>
      <div>
        {starData.map((value, index) => {
          let key = starData.length;
          var {rating, ratingCount} = {rating: key - index, ratingCount: value[key - index]};

          return (
            <div key={rating}>
              <div className="rating-breakdown" value={rating} onClick={(e) => handleRatingSelected(e)}>
                <u > {`${rating} stars`} </u>
                <RatingBar data={{rating, ratingCount, max}} />
              </div>
            </div>
          );
        })}
        <Recommended data={props.data}/>
        <ReviewList ratingFilterCriteria={rating}/>
      </div>
    </>
  );
};

export default RatingBreakdown;