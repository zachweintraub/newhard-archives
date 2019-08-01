import React, { useState, useContext } from 'react';
import MyPlayer from '../myplayer/MyPlayer';
import { Link } from 'react-router-dom';
import ShowContentNav from '../showcontentnav/ShowContentNav';
import './ShowContent.css';
import { AppContext } from '../app/App';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

//this is the "show" page for an individual film
const ShowContent = (props) => {

  const timelineNodes = useContext(AppContext);
  
  const thisContent = timelineNodes.filter(node => {
    return node.id === parseInt(props.match.params.id)
  })[0];

  const prevIndex = parseInt(props.match.params.id) - 1;

  const nextIndex = parseInt(props.match.params.id) + 1;

  //determines which "tab" the user is viewing
  const [currentTab, setCurrentTab] = useState('movie');

  return(
    <React.Fragment>
      {timelineNodes[prevIndex] && <Link to={`/cinema/${prevIndex}`} className='icon-link'><IoIosArrowBack/></Link>}
      <p className='show-content-title'>{thisContent.title}</p>
      {timelineNodes[nextIndex] && <Link to={`/cinema/${nextIndex}`} className='icon-link'><IoIosArrowForward/></Link>}
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