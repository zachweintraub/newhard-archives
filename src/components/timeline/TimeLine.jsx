import React from 'react';
import { data } from '../../temp-assets/data';
import TimelineNode from '../timelinenode/TimelineNode';
import './Timeline.css';

const TimeLine = () => {

  const nodeHeight = `${window.innerHeight / Object.keys(data.timelineNodes).length}px`;

  console.log(nodeHeight);

  const nodeStyle = {
    height: nodeHeight,
    position: 'fixed'
  }

  return(
    <div className='nodes'>
      {
        Object.keys(data.timelineNodes).map((key) => {
          return(
            <div key={key}>
              <TimelineNode
                thisNode={data.timelineNodes[key]}
                style={nodeStyle}
              />
            </div>
          );
        })
      }
    </div>
  );
}

export default TimeLine;