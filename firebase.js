import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAXBGpQ-NUS4WB4h8Swb6huL9k8O7SxDEs",
  authDomain: "docs-clone-nextjs-6e675.firebaseapp.com",
  projectId: "docs-clone-nextjs-6e675",
  storageBucket: "docs-clone-nextjs-6e675.appspot.com",
  messagingSenderId: "746208245394",
  appId: "1:746208245394:web:5b7a230bf3da1a3098584b",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebase)
  : firebase.app();

const db = app.firestore();

export { db };
