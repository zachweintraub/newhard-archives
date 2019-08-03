import React, { useState } from 'react';
import { Player, BigPlayButton } from 'video-react';
import '../../../node_modules/video-react/dist/video-react.css';
import '../myplayer/MyPlayer.css';

const MyPlayer = (props) => {

  const sources = props.content.sources;

  let defaultSource = () => {
    let output;
    Object.keys(sources).forEach(source => {
      if(sources[source].default) {
        output = source;
      }
    });
    console.log(output);
    return output;
  }

  //state determines which source is passed to player
  const [source, setSource] = useState(defaultSource());

  return(
    <div className='player-wrapper'>
      <div className='currently-viewing'>
        <p className='currently-viewing-text'>Currently viewing: {sources[source].name}</p>
      </div>
      <Player
        className='my-player'
        poster={props.content.thumbs.player}
        src={sources[source].uri}
        controls
      >
        <BigPlayButton className='big-play-button-hide'/>
      </Player>
      <p className='alt-sources'>Click to view: {Object.keys(sources).map(key => {
        if(key !== source) {
          return (
            <span
              key={key}
              className="source-link"
              onClick={() => setSource(key)}
            >
              {sources[key].name}
            </span>
          );
        } else return null;
      })}</p>
    </div>
  );
}

export default MyPlayer;