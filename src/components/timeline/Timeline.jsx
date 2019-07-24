import React, { useState, useEffect } from 'react';
import { data } from '../../temp-assets/data';
import TimelineNode from '../timelinenode/TimelineNode';
import './Timeline.css';

const Timeline = () => {

  const [selectedNodeId, selectNodeId] = useState();

  useEffect(() => {
    if(selectedNodeId) {
      document.getElementById(`#${selectedNodeId}`).props.selected = true;
    }
  });

  return(
    <div className='nodes'>
      <div className='line'></div>
      {
        Object.keys(data.timelineNodes).map((key) => {
          return(
            <div key={key}>
              <TimelineNode
                id={key}
                thisFilm={data.timelineNodes[key]}
                onMouseEnter={() => selectNodeId(key)}
              />
            </div>
          );
        })
      }
    </div>
  );
}

export default Timeline;