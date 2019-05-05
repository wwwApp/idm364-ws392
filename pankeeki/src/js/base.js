import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCniko5DdVPVuAs2TRINsNdLDt71Um7-_I",
  authDomain: "idm364-pankeeki.firebaseapp.com",
  databaseURL: "https://idm364-pankeeki.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
