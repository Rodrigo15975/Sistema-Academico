import app from "./ConfigFirebare";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  reauthenticateWithCredential,
} from "firebase/auth";
const auth = getAuth(app);
const secondaryAuth = getAuth(app);
export {
  auth,
  onAuthStateChanged,
  reauthenticateWithCredential,
  signInWithEmailAndPassword,
  signOut,
  secondaryAuth,
  createUserWithEmailAndPassword,
};
