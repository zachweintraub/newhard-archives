import React, { useState } from 'react';
import { Player } from 'video-react';
import '../../../node_modules/video-react/dist/video-react.css';
import '../myplayer/MyPlayer.css';

const MyPlayer = (props) => {

  console.log(props);

  const defaultSource = () => {
    let sources = props.content.sources;
    
    if(sources.trailer) {
      return sources.trailer;
    } else {
      let outputKey = Object.keys(sources).filter(source => {
        return sources[source].free;
      })[0];
      return sources[outputKey];
    }
  }

  const [source, setSource] = useState(defaultSource().uri);

  console.log(source);

  return(
    <div className='player-wrapper'>
      <Player 
        poster={props.content.thumbs.player}
        src={source}
        controls
      />
    </div>
  );
}

export default MyPlayer;