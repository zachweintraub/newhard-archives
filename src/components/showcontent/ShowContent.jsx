import React, { useState, useContext } from 'react';
import MyPlayer from '../myplayer/MyPlayer';
import ShowContentNav from '../showcontentnav/ShowContentNav';
import './ShowContent.css';
import { AppContext } from '../app/App';

const ShowContent = (props) => {

  const timelineNodes = useContext(AppContext);
  
  let thisContent = timelineNodes.filter(node => {
    return node.id === parseInt(props.match.params.id)
  })[0];

  const [currentTab, setCurrentTab] = useState('movie');

  return(
    <React.Fragment>
      <p className='show-content-title'>{thisContent.title}</p>
      <ShowContentNav
        onClick={(tab) => setCurrentTab(tab)}
        currentTab={currentTab}
      />
      {
        currentTab === 'movie' &&
        <MyPlayer content={thisContent}/>
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