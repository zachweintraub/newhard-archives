import React from 'react';
import './TimelineNode.css'

const TimelineNode = (props) => {
  return(
    <div>
      <div className='line'></div>
      <img src={props.thisNode.thumb} alt='node'/>
    </div>
  );
}

export default TimelineNode;