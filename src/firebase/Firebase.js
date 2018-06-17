import * as FirebaseModule from "firebase";

export const firebaseConfig = {
  apiKey: "AIzaSyDc94a7eMNA2CFXFPVNAFt1cd-B_VTCC5o",
  authDomain: "moneysaver-f9a18.firebaseapp.com",
  databaseURL: "https://moneysaver-f9a18.firebaseio.com",
  projectId: "moneysaver-f9a18",
  storageBucket: "moneysaver-f9a18.appspot.com",
  messagingSenderId: "488890179565",
  persistence: true
};

const {
  apiKey,
  authDomain,
  databaseURL,
  storageBucket,
  messagingSenderId,
  projectId
} = firebaseConfig;

let firebaseInitialized = false;

if (
  apiKey !== "null" &&
  authDomain !== "null" &&
  databaseURL !== "null" &&
  storageBucket !== "null" &&
  projectId !== "null" &&
  messagingSenderId !== "null"
) {
  FirebaseModule.initializeApp({
    apiKey,
    authDomain,
    databaseURL,
    storageBucket,
    messagingSenderId,
    projectId
  });

  firebaseInitialized = true;
}

export const FirebaseRef = firebaseInitialized
  ? FirebaseModule.database().ref()
  : null;
export const Firebase = firebaseInitialized ? FirebaseModule : null;
