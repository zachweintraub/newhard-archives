import React from 'react';
import { data } from '../../constants/data';

const ShowContent = (props) => {
  const thisContent = data.timelineNodes[props.match.params.id];
  return(
    <p>This is the page for {thisContent.title}</p>
  );
}

export default ShowContent;