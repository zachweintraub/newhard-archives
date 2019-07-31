import React, { useState } from 'react';
import { Player, BigPlayButton } from 'video-react';
import '../../../node_modules/video-react/dist/video-react.css';
import '../myplayer/MyPlayer.css';

const MyPlayer = (props) => {

  const sources = props.content.sources;

  let defaultSource = () => {
    if(Object.keys(sources).includes('trailer')) {
      return 'trailer';
    } else {
      return Object.keys(sources).filter((key) => {
        return sources[key].free;
      })[0];
    }
  }


  //state determines which source is passed to player
  const [source, setSource] = useState(defaultSource);

  return(
    <div className='player-wrapper'>
      <Player
        className='my-player'
        poster={props.content.thumbs.player}
        src={sources[source].uri}
        controls
        // autoPlay={source !== defaultSource()}
      >
        <BigPlayButton className='big-play-button-hide'/>
      </Player>
      <p>Currently viewing: {source}</p>
      <p>Click to view: {Object.keys(sources).map(key => {
        if(key !== source) {
          return (
            <span
              key={key}
              className="source-link"
              onClick={() => setSource(key)}
            >
              {key}
            </span>
          );
        } else return null;
      })}</p>
    </div>
  );
}

export default MyPlayer;