import React from 'react';
import { withRouter } from 'react-router-dom';
import './MainNav.css';

const MainNav = (props) => {

  return (
    <div>
      <p className='main-nav-button' onClick={() => props.history.push('/')}>Home</p>
      <p className='main-nav-button' onClick={() => props.history.goBack()}>Back</p>
    </div>
  );
}

export default withRouter(MainNav);