import React, { useState, createContext } from 'react';
import './App.css';
import LandingPage from '../landingpage/LandingPage';
import Timeline from '../timeline/Timeline';
import MainNav from '../mainnav/MainNav';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShowContent from '../showcontent/ShowContent';
import firebaseConfig from '../../constants/firebaseconfig';
import Firebase from 'firebase';

Firebase.initializeApp(firebaseConfig);

//used to pass db data throughout app
export const AppContext = createContext();

const App = () => {
  
  //holds app loading state
  const [isLoading, setLoading] = useState(true);
  
  //holds db data
  const [data, setData] = useState([]);
  
  //fetches db data and sets it as app state/context
  async function fetchData() {

    if(data.length < 1) {
      let dbData = [];
      
      await Firebase.database().ref('timelineNodes').once('value').then(snapshot => {
        snapshot.forEach(child => {
          dbData.push(child.val());
        });
      });
    
      setData(dbData);

    }
  }

  fetchData().then(() => setLoading(false));

  if(isLoading) {
    return (
      <p>Loading...</p>
    );
  } else return (
    <AppContext.Provider value={data}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/cinema' component={Timeline} />
          <Route path ='/cinema/:id' component={ShowContent} />
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;