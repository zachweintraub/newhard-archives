import React from 'react';
import { Player, BigPlayButton, ControlBar } from 'video-react';

const PreviewPlayer = (props) => {
  return (
    <Player
      src={props.thisFilm.sources.trailer.uri}
      muted={true}
      autoPlay={true}
    >
      <BigPlayButton className='big-play-button-hide'/>
      <ControlBar disableCompletely={true}/>
    </Player>
  );
}

export default PreviewPlayer;