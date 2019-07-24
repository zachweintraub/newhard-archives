import React from 'react';
import './TimelineNode.css'
import PreviewData from '../previewdata/PreviewData';

const TimelineNode = (props) => {
  return(
    <div
    className='thisNode'
    onMouseEnter={props.onMouseEnter}
    >
      {/* <PreviewData
        thisFilm={props.thisFilm}
      /> */}
    </div>
  );
}

export default TimelineNode;