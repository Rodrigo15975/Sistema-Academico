import { getStorage, uploadBytes, ref, getDownloadURL } from "firebase/storage";
import app from "./ConfigFirebare";

const storage = getStorage(app);

export { storage, uploadBytes, ref, getDownloadURL };
