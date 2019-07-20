import React from 'react';
import { data } from '../../temp-assets/data';
import TimelineNode from '../timelinenode/TimelineNode';
import './Timeline.css';

const TimeLine = () => {

  return(
    <div className='nodes'>
      <div className='line'></div>
      {
        Object.keys(data.timelineNodes).map((key) => {
          return(
            <div key={key}>
              <TimelineNode
                thisFilm={data.timelineNodes[key]}
              />
            </div>
          );
        })
      }
    </div>
  );
}

export default TimeLine;