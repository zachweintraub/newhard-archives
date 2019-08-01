import React from 'react';
import PreviewPlayer from '../previewplayer/PreviewPlayer';
import './PreviewData.css';
import { Link } from 'react-router-dom';

const PreviewData = (props) => {
  return(
    <div className={`previewDataBox ${props.className}`}>
      <Link to={`/cinema/${props.thisFilm.id}`} className='previewTitle'>{props.thisFilm.title}</Link>
      <p className='previewDetails'>
        {props.thisFilm.year}||
        {props.thisFilm.duration} min.||
        {props.thisFilm.color}
      </p>
      <PreviewPlayer thisFilm={props.thisFilm}/>
    </div>
  );
}

export default PreviewData;