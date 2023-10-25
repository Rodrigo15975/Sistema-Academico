import { onSnapshot , getFirestore, collection, where, getDocs, query , addDoc, setDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
const dbFire = getFirestore();
export { onSnapshot , where, getDocs, query , dbFire, collection, addDoc, setDoc, deleteDoc,doc,updateDoc };