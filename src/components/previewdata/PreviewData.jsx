import React from 'react';
import './PreviewData.css';

const PreviewData = (props) => {
  return(
    <div className={`previewDataBox ${props.className}`}>
      <p className='previewTitle'>{props.thisFilm.title}</p>
      <p className='previewDetails'>
        {props.thisFilm.year}||
        {props.thisFilm.duration} min.||
        {props.thisFilm.color}
      </p>
    </div>
  );
}

export default PreviewData;