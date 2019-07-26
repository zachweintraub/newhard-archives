import React, { useState } from 'react';
import { data } from '../../constants/data';
import TimelineNode from '../timelinenode/TimelineNode';
import './Timeline.css';

const Timeline = () => {

  const [selectedNodeId, selectNodeId] = useState();
  let index = 0;

  return(
    <div
      className='nodes'
      onClick={() => selectNodeId(null)}
    >
      <div className='line'></div>
      {
        Object.keys(data.timelineNodes).map((key) => {
          new Image().src = data.timelineNodes[key].thumbs.node;
          index += 1;
          return(
            selectedNodeId === key ?
            <TimelineNode
            key={key}
            isSelected={true}
            thisFilm={data.timelineNodes[key]}
            position={index}
            /> :
            <TimelineNode
            key={key}
            onMouseEnter={() => selectNodeId(key)}
            />
          );
          })
      }
    </div>
  );
}

export default Timeline;