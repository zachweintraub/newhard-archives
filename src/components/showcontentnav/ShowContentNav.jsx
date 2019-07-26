import React from 'react';
import './ShowContentNav.css';

const ShowContentNav = (props) => {
  return(
    <div className='nav-buttons'>
      <p onClick={() => props.onClick('movie')}>Movie</p>
      <p onClick={() => props.onClick('words')}>Words</p>
      <p onClick={() => props.onClick('extras')}>Extras</p>
    </div>
  );
}

export default ShowContentNav;