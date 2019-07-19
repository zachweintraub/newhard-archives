import React from 'react';
import data from '../../temp-assets/data';

const TimeLine = () => {

  return(
    <div>
      <p>here is the main timeline</p>
      {Object.keys(data).map((key) => {
        return <TimelineNode/>
      })}
    </div>
  );
}

export default TimeLine;