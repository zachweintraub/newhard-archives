import React from 'react';
import './ShowContentNav.css';

const ShowContentNav = (props) => {

  let detailsClass;
  let wordsClass;
  let extrasClass;

  switch(props.currentTab) {
    case 'details':
      detailsClass = 'current';
      break;
    case 'words':
      wordsClass = 'current';
      break;
    case 'extras':
      extrasClass = 'current';
      break;
    default:
      break;
  }
  
  return(
    <div className='content-nav-tabs'>
      <div className='content-nav-tab'>
        <p className={['content-nav-button', detailsClass].join(' ')}
          onClick={() => props.onClick('details')}
        >DETAILS</p>
      </div>
      <div className='content-nav-tab'>
        <p className={['content-nav-button', wordsClass].join(' ')}
          onClick={() => props.onClick('words')}
        >WORDS</p>
      </div>
      <div className='content-nav-tab'>
        <p className={['content-nav-button', extrasClass].join(' ')}
          onClick={() => props.onClick('extras')}>
        EXTRAS</p>
      </div>
    </div>
  );
}

export default ShowContentNav;