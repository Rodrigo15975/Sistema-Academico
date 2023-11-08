import { onSnapshot, getFirestore, getDoc, collection, where, getDocs, query, addDoc, setDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
const dbFire = getFirestore();
export { onSnapshot, where, getDocs, getDoc, query, dbFire, collection, addDoc, setDoc, deleteDoc, doc, updateDoc };