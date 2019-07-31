import React from 'react';
import './ShowContentNav.css';

const ShowContentNav = (props) => {

  let movieClass;
  let wordsClass;
  let extrasClass;

  switch(props.currentTab) {
    case 'movie':
      movieClass = 'current';
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
        <p className={['content-nav-button', movieClass].join(' ')}
          onClick={() => props.onClick('movie')}
        >MOVIE</p>
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