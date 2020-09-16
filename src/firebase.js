import firebase from "firebase";

// const firebaseApp = firebase.initializeApp({
//     apiKey: "AIzaSyAqMYSqqPTvcPfBCGML-HI76NujoesUu5w",
//     authDomain: "instagram-clone-react-6a9d6.firebaseapp.com",
//     databaseURL: "https://instagram-clone-react-6a9d6.firebaseio.com",
//     projectId: "instagram-clone-react-6a9d6",
//     storageBucket: "instagram-clone-react-6a9d6.appspot.com",
//     messagingSenderId: "584961652347",
//     appId: "1:584961652347:web:064eb0a934d8214dc814de",
//     measurementId: "G-DTJ3XYL88Q"
// });

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD3GuHVvmkYOHTftZsBYPfhFo-Ndx4S0oY",
    authDomain: "instagram-clone-82ba3.firebaseapp.com",
    databaseURL: "https://instagram-clone-82ba3.firebaseio.com",
    projectId: "instagram-clone-82ba3",
    storageBucket: "instagram-clone-82ba3.appspot.com",
    messagingSenderId: "598505826222",
    appId: "1:598505826222:web:d6c07765ced954cb300a3f",
    measurementId: "G-DE691S023K"
  });

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};