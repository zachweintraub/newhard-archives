import React from 'react';
import { Player } from 'video-react';
import '../../../node_modules/video-react/dist/video-react.css';

const MyPlayer = (props) => {

  return(
    <Player src={props.source} controls/>
  );
}

export default MyPlayer;