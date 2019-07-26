import React, { useState } from 'react';
import { data } from '../../constants/data';
import MyPlayer from '../myplayer/MyPlayer';
import ShowContentNav from '../showcontentnav/ShowContentNav';
import './ShowContent.css';

const ShowContent = (props) => {
  const thisContent = data.timelineNodes[props.match.params.id];
  const [currentTab, setCurrentTab] = useState('movie');

  return(
    <React.Fragment>
      <p className='show-content-title'>{thisContent.title}</p>
      <ShowContentNav
        onClick={(tab) => setCurrentTab(tab)}
      />
      {
        currentTab === 'movie' &&
        <MyPlayer source={thisContent}/>
      }
      {
        currentTab === 'words' &&
        <p>{thisContent.words}</p>
      }
      {
        currentTab === 'extras' &&
        Object.keys(thisContent.extras).map((extra) => {
          return(<p key={extra}>{extra}</p>);
        })
      }
      
    </React.Fragment>
  );
}

export default ShowContent;