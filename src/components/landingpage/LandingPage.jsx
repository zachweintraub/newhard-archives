import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return(
    <React.Fragment>
      <img src='https://firebasestorage.googleapis.com/v0/b/newhard-archives.appspot.com/o/MISC%2FBS_DUNE_CREW?alt=media&token=13ba2648-5f81-4598-9c0a-27178f9ea843' alt="newhard's first crew"/>
      <p>Welcome to the Newhard Archives.</p>
      <Link to='/cinema'>Browse Masterpieces</Link>
    </React.Fragment>
  );
}

export default LandingPage;