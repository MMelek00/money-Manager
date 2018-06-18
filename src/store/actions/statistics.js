import * as firebase from "firebase";
require("firebase/firestore");

export function editExpense(Amount) {
  return function (dispatch) {
    const userid = firebase.auth().currentUser.uid;
    const firestore = firebase.firestore();
    const settings = { timestampsInSnapshots: true };
    firestore.settings(settings);
    var DocCol = firestore.collection("User").where("Userid", "==", userid);
    return DocCol.update({ expense: "Amount" })
      .then(function (res) {
        dispatch({
          type: "ADD_EXPENSE",
          payload: Amount
        });
      })
      .catch(function (error) {
        dispatch({ type: "STATUS_REPLACE", error: "error" });
      });
  };
}
export function editIncome(Amount) {
  return function (dispatch) {
    const userid = firebase.auth().currentUser.uid;
    const firestore = firebase.firestore();
    const settings = { timestampsInSnapshots: true };
    firestore.settings(settings);
    var DocCol = firestore.collection("User").where("Userid", "==", userid);
    return DocCol.update({ income: "Amount" })
      .then(function (res) {
        dispatch({
          type: "ADD_EXPENSE",
          payload: Amount
        });
      })
      .catch(function (error) {
        dispatch({ type: "STATUS_REPLACE", error: "error" });
      });
  };
}

export function fetchStatistics() {
  return function (dispatch) {
    const userid = firebase.auth().currentUser.uid;
    const firestore = firebase.firestore();
    const settings = { timestampsInSnapshots: true };
    firestore.settings(settings);
    var docRef = firestore.collection("User").where("Userid", "==", userid);
    return docRef.get()
      .then(function (querySnapshot) {
        let _data = null;
        querySnapshot.forEach(doc => {
          _data = doc.data();
        });
        dispatch({
          type: "ADD_INCOMES",
          payload: _data.income
        });
        dispatch({
          type: "ADD_INCOMES",
          payload: _data.expense
        });
      })
      .catch(function (error) {
        dispatch({ type: "STATUS_REPLACE", error: "error" });
      });
  };
}
