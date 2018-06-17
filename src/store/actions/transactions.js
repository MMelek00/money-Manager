import * as firebase from "firebase";
require("firebase/firestore");

export function fetchTransactions() {
  const user = firebase.auth().currentUser.uid;
  return function(dispatch) {
    const firestore = firebase.firestore();
    const settings = { timestampsInSnapshots: true };
    firestore.settings(settings);
    const DocCol = firestore.collection("Transactions").where("user", "==", user);
    return DocCol.get()
      .then(function(querySnapshot) {
        const myData = [];
        querySnapshot.forEach(function(doc) {
          myData.push({ id: doc.id, ...doc.data() });
        });
        dispatch({
          type: "FETCH_TRANSACTIONS",
          payload: myData
        });
      })
      .catch(function(error) {
        dispatch({ type: "STATUS_REPLACE", error: "error" });
      });
  };
}
export function addTransaction(transaction) {
  const userid = firebase.auth().currentUser.uid;
  return function(dispatch) {
    const firestore = firebase.firestore();
    const settings = { timestampsInSnapshots: true };
    firestore.settings(settings);
    const DocCol = firestore.collection("Transactions");
    return DocCol.add({ ...transaction, user: userid })
      .then(function(res) {
        dispatch({
          type: "ADD_TRANSACTION",
          payload: { ...transaction, id: res.id }
        });
      })
      .catch(function(error) {
        dispatch({ type: "STATUS_REPLACE", error: "error" });
      });
  };
}

export function editTransaction(transaction) {
  return function(dispatch) {
    const firestore = firebase.firestore();
    const settings = { timestampsInSnapshots: true };
    firestore.settings(settings);
    const DocCol = firestore.collection("Transactions").doc(transaction.id);
    return DocCol.update(transaction)
      .then(function(res) {
        dispatch({
          type: "EDIT_TRANSACTION",
          payload: transaction
        });
      })
      .catch(function(error) {
        dispatch({ type: "STATUS_REPLACE", error: "error" });
      });
  };
}
