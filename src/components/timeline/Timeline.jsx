import React, { useState } from 'react';
// import { data } from '../../constants/data';
import TimelineNode from '../timelinenode/TimelineNode';
import './Timeline.css';
import c from '../../constants';

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
        c.timelineNodes.map((node) => {
          new Image().src = node.thumbs.node;
          index += 1;
          return(
            selectedNodeId === node.id ?
            <TimelineNode
            key={node.id}
            isSelected={true}
            thisFilm={node}
            position={index}
            /> :
            <TimelineNode
            key={node.id}
            onMouseEnter={() => selectNodeId(node.id)}
            />
          );
        })
      }
    </div>
  );
}

export default Timeline;