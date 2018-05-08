import * as firebase from "firebase";
import { firebaseConfig } from "./FirebaseCon";

let instance = null;

class firebaseService {
  constructor() {
    if (!instance) {
      this.app = firebase.initializeApp(firebaseConfig);
      instance = this;
    }
    return instance;
  }
}

const firebaseService = new firebaseService().app;
export default firebaseService;
