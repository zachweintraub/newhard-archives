import React from 'react';
import { data } from '../../constants/data';
import MyPlayer from '../myplayer/MyPlayer';

const ShowContent = (props) => {
  const thisContent = data.timelineNodes[props.match.params.id];
  return(
    <React.Fragment>
      <p>This is the page for {thisContent.title}</p>
      <MyPlayer source={thisContent.dummysource}/>
    </React.Fragment>
  );
}

export default ShowContent;