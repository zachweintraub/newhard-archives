import React from 'react';
import { withRouter } from 'react-router-dom';
import './MainNav.css';

const MainNav = (props) => {

  return (
    <div>
      <p className='main-nav-button' onClick={() => props.history.push('/')}><span className='main-nav-button-text'>Home</span></p>
      <p className='main-nav-button' onClick={() => props.history.goBack()}><span className='main-nav-button-text'>Back</span></p>
    </div>
  );
}

export default withRouter(MainNav);