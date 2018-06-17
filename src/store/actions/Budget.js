import * as firebase from "firebase";
require("firebase/firestore");

export function fetchBudget() {
  const user = firebase.auth().currentUser.uid;
  return function(dispatch) {
    const firestore = firebase.firestore();
    const settings = { timestampsInSnapshots: true };
    firestore.settings(settings);
    const DocCol = firestore.collection("BudgetE").where("user", "==", user);
    return DocCol.get()
      .then(function(querySnapshot) {
        const myData = [];
        querySnapshot.forEach(function(doc) {
          myData.push({ id: doc.id, ...doc.data() });
        });
        dispatch({
          type: "FETCH_BUDGET",
          payload: myData
        });
      })
      .catch(function(error) {
        dispatch({ type: "STATUS_REPLACE", error: "error" });
      });
  };
}
export function addBudget(budget) {
  const userid = firebase.auth().currentUser.uid;
  return function(dispatch) {
    const firestore = firebase.firestore();
    const settings = { timestampsInSnapshots: true };
    firestore.settings(settings);
    const DocCol = firestore.collection("BudgetE");
    return DocCol.add({ ...budget, user: userid })
      .then(function(res) {
        dispatch({
          type: "ADD_BUDGET",
          payload: { ...budget, id: res.id }
        });
      })
      .catch(function(error) {
        dispatch({ type: "STATUS_REPLACE", error: "error" });
      });
  };
}
export function addBudgetIncome(budget) {
  const userid = firebase.auth().currentUser.uid;
  return function(dispatch) {
    const firestore = firebase.firestore();
    const settings = { timestampsInSnapshots: true };
    firestore.settings(settings);
    const DocCol = firestore.collection("BudgetIncome");
    return DocCol.add({ ...budget, user: userid })
      .then(function(res) {
        dispatch({
          type: "ADD_BUDGETINCOME",
          payload: { ...budget, id: res.id }
        });
      })
      .catch(function(error) {
        dispatch({ type: "STATUS_REPLACE", error: "error" });
      });
  };
}

export function editBudget(budget) {
  return function(dispatch) {
    const firestore = firebase.firestore();
    const settings = { timestampsInSnapshots: true };
    firestore.settings(settings);
    const DocCol = firestore.collection("BudgetE").doc(budget.id);
    return DocCol.update(budget)
      .then(function(res) {
        dispatch({
          type: "EDIT_BUDGET",
          payload: budget
        });
      })
      .catch(function(error) {
        dispatch({ type: "STATUS_REPLACE", error: "error" });
      });
  };
}
export function fetchBudgetIncome() {
  const user = firebase.auth().currentUser.uid;
  return function(dispatch) {
    const firestore = firebase.firestore();
    const settings = { timestampsInSnapshots: true };
    firestore.settings(settings);
    const DocCol = firestore
      .collection("BudgetIncome")
      .where("user", "==", user);
    return DocCol.get()
      .then(function(querySnapshot) {
        const myData = [];
        querySnapshot.forEach(function(doc) {
          myData.push({ id: doc.id, ...doc.data() });
        });
        dispatch({
          type: "FETCH_BUDGETINCOME",
          payload: myData
        });
      })
      .catch(function(error) {
        dispatch({ type: "STATUS_REPLACE", error: "error" });
      });
  };
}
