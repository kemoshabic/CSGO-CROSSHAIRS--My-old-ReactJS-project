import firebase from "firebase/app"; // we need base import for firestore and auth
import "firebase/firestore"; // database
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAd3g9Kbjdxb3tilBM2-9QJ1r-r42JfqWs",
  authDomain: "csgo-app-b3127.firebaseapp.com",
  databaseURL: "https://csgo-app-b3127.firebaseio.com",
  projectId: "csgo-app-b3127",
  storageBucket: "csgo-app-b3127.appspot.com",
  messagingSenderId: "72116787848",
  appId: "1:72116787848:web:f3054de860f3168a731d3d",
  measurementId: "G-QBX80N4PWB"
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error);
    }
  }
  return userRef;
};

export const convertTeamsSnapshotToMap = (teams) => {
  const transformedTeams = teams.docs.map(doc => {
    const {team, color, imageUrl, players, teamColor, teamsData} = doc.data();

    return {
      id: doc.id,
      teamColor,
      team,
      color,
      imageUrl,
      players,
      teamsData
    }
  });

  return transformedTeams.reduce((acc, team)=> {
    acc[team.team.toLowerCase()] = team;
    return acc;
  }, {})
}


export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch()
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  })
  
  return await batch.commit()
}


firebase.initializeApp(config);

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
