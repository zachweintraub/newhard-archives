import React, { useState } from 'react';
import './CornerNav.css';
import { IoMdMenu, IoMdHome, IoMdArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';

const CornerNav = (props) => {

  const [menuState, setMenuState] = useState('closed');

  const toggleMenu = () => {
    if(menuState === 'open') {
      setMenuState('closed');
    } else {
      setMenuState('open');
    }
  }

  return (
  <div className={['corner-nav', menuState].join(' ')}>
    <IoMdMenu onClick={() => toggleMenu()}/>
    {
      menuState === 'open' &&
      <React.Fragment>
        <br/>
        <Link to={'/'} className='corner-nav-link'><IoMdHome/></Link>
        <br/>
        <Link to={'/cinema'} className='corner-nav-link'><IoMdArrowBack/></Link>
      </React.Fragment>
    }
  </div>
  );
}

export default CornerNav;