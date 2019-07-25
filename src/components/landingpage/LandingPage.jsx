import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return(
    <React.Fragment>
      <p>Welcome to the Newhard Archives.</p>
      <Link to='/cinema'>Browse Masterpieces</Link>
    </React.Fragment>
  );
}

export default LandingPage;