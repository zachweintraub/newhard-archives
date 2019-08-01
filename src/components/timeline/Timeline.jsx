import React, { useState, useContext } from 'react';
import TimelineNode from '../timelinenode/TimelineNode';
import './Timeline.css';
import { AppContext } from '../app/App';

const Timeline = () => {

  //state that determines which timeline node is displayed
  const [selectedNodeId, selectNodeId] = useState();

  //gives this component access to the dbdata fetched by app component
  const timelineNodes = useContext(AppContext);

  //tracks nodes as odd or even to determine left/right display
  let index = 0;

  return(
    <div
      className='nodes'
      onClick={() => selectNodeId(null)}
    >
      <div className='line'></div>
      {
        timelineNodes.map((node) => {
          //preload images
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
            onSelectNode={() => selectNodeId(node.id)}
            />
          );
        })
      }
    </div>
  );
}

export default Timeline;