import React from 'react';
import { Player, BigPlayButton, ControlBar } from 'video-react';

const PreviewPlayer = (props) => {

  let defaultSource = () => {
    let output;
    Object.keys(props.thisFilm.sources).forEach(source => {
      if(props.thisFilm.sources[source].default) {
        output = source;
      }
    });
    return output;
  }

  return (
    <Player
      src={props.thisFilm.sources[defaultSource()].uri}
      muted={true}
      autoPlay={true}
    >
      <BigPlayButton className='big-play-button-hide'/>
      <ControlBar disableCompletely={true}/>
    </Player>
  );
}

export default PreviewPlayer;