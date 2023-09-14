import app from "./ConfigFirebare";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";

const auth = getAuth(app);

export { auth, onAuthStateChanged, signInWithEmailAndPassword, signOut };
