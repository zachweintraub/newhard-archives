import firebaseConfig from './firebaseconfig';
import Firebase from 'firebase';

Firebase.initializeApp(firebaseConfig);

function fetchData() {
  let data = [];

  Firebase.database().ref('timelineNodes').once('value').then(snapshot => {
    snapshot.forEach(child => {
      data.push(child.val());
    });
  });
  return data;
}

export default {
firebaseConfig: firebaseConfig,
timelineNodes: fetchData()
}