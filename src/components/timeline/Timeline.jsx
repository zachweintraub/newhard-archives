import React, { useState, useContext } from 'react';
import TimelineNode from '../timelinenode/TimelineNode';
import './Timeline.css';
import { AppContext } from '../app/App';

const Timeline = () => {

  const [selectedNodeId, selectNodeId] = useState();
  const timelineNodes = useContext(AppContext);
  let index = 0;

  return(
    <div
      className='nodes'
      onClick={() => selectNodeId(null)}
    >
      <div className='line'></div>
      {
        timelineNodes.map((node) => {
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