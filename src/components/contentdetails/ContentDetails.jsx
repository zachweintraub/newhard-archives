import React from 'react';
import './ContentDetails.css';

const ContentDetails = (props) => {
 return(
    <div className='content-details-container'>
      <p>{props.content.year}||
        {props.content.duration} min.||
        {props.content.color}</p>
      <p>Directed by {props.content.director}</p>
      <p>{props.content.synopsis}</p>
   </div>
 );
}

export default ContentDetails;