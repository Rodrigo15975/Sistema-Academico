import {
  auth,
  createUserWithEmailAndPassword,
} from "../../../../../firebase/Config/auth";
import {
  addDoc,collection,dbFire
} from "../../../../../firebase/Config/firestore";
import { profesorExisting } from "./ErrorsCreatingProfesor";

export const createCredentialsProfesor = async (email: string, password: string, update: ()=>void) => {
  try {
    const { user} = await createUserWithEmailAndPassword(auth, email, password);
    if (user) {
      const newUser = user
      return newUser
    }
    return
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);    
      if (profesorExisting(error)) return update()
    }      
    console.log(error);    
    return
  }
};
export const sendDataDbFirestore = async (data: DataCompleteSendDb, uid: string, update: ()=> void)=> { 
  try {
    const refDb = collection(dbFire, "/profesores");   
    if (data && uid) {
      await addDoc(refDb ,{ ...data, uid })
      update()
      return
    }    
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);      
    }
    console.log(error);    
  }
}
