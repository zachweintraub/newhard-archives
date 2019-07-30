import React from 'react';
import { Player } from 'video-react';
import '../../../node_modules/video-react/dist/video-react.css';

const MyPlayer = (props) => {

  return(
    <Player 
      poster={props.content.thumbs.player}
      src={props.content.sources.trailer.uri}
      controls
    />
  );
}

export default MyPlayer;