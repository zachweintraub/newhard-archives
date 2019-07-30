// import { createContext } from 'react';
// import firebaseConfig from './firebaseconfig';
// import Firebase from 'firebase';

// Firebase.initializeApp(firebaseConfig);

// export const dbData = Firebase.database().ref('timelineNodes').once('value');

// export async function fetchData() {

//   console.log('begin fetching');

//   let data = [];

//   await Firebase.database().ref('timelineNodes').once('value').then(snapshot => {
//     snapshot.forEach(child => {
//       data.push(child.val());
//     });
//   });
  
//   console.log(data.length);

//   return data;
// }

// export const AppContext = createContext();

// export default {
//   timelineNodes: fetchData()
// }