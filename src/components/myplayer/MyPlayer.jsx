import React from 'react';
import { Player } from 'video-react';
import '../../../node_modules/video-react/dist/video-react.css';

const MyPlayer = (props) => {

  return(
    <Player 
      poster={props.source.thumbs.player}
      src={props.source.dummysource}
      controls
    />
  );
}

export default MyPlayer;