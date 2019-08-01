import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {

  return(
    <div className='landing-page-wrapper'>
      <p>Welcome to the Newhard Archives.</p>
      <img className='home-img' src='https://firebasestorage.googleapis.com/v0/b/newhard-archives.appspot.com/o/MISC%2FBS_DUNE_CREW?alt=media&token=13ba2648-5f81-4598-9c0a-27178f9ea843' alt="newhard's first crew"/><br/>
      <Link id='timeline-link' to='/cinema'>browse masterpieces</Link>
    </div>
  );
}

export default LandingPage;