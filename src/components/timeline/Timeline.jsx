import React, { useState, useEffect } from 'react';
import { data } from '../../temp-assets/data';
import TimelineNode from '../timelinenode/TimelineNode';
import './Timeline.css';

const Timeline = () => {

  const [selectedNodeId, selectNodeId] = useState();
  let index = 0;

  return(
    <div className='nodes'>
      <div className='line'></div>
      {
        Object.keys(data.timelineNodes).map((key) => {
          new Image().src = data.timelineNodes[key].thumb;
          index = index + 1;
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



// <div key={key}>
//               <TimelineNode
//                 id={key}
//                 thisFilm={data.timelineNodes[key]}
//                 onMouseEnter={() => selectNodeId(key)}
                
//               />
//             </div>