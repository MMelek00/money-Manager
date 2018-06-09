import * as firebase from "firebase";
import { firebaseConfig } from "./FirebaseCon";
firebase.initializeApp(firebaseConfig);

const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("operation");
