import { getFirestore, collection, where, getDocs, query } from "firebase/firestore";
const dbFire = getFirestore();
export { where, getDocs, query , dbFire, collection };