import React from 'react';
import './TimelineNode.css'
import PreviewData from '../previewdata/PreviewData';

const TimelineNode = (props) => {
  return(
    props.isSelected ?
    <div
      style={{backgroundImage: props.thisFilm.thumb, backgroundSize: 50}}
      className='selectedNode'
    >
      <img 
        className='thumb'
        src={props.thisFilm.thumb} alt="thumbnail"
      />
      {
        props.position % 2 === 0 &&
        <PreviewData
          thisFilm={props.thisFilm}
          className='left'  
        />
      }
      {
        props.position % 2 === 1 &&
        <PreviewData
          thisFilm={props.thisFilm}
          className='right'  
        />
      }
    </div> :
    <div
      className='unselectedNode'
      onMouseEnter={props.onMouseEnter}
    ></div>
  );
}

export default TimelineNode;