import axios from "axios";
export interface GetDataFetchDNI {
  numeroDocumento: string;
  tipoDocumento: string;
  nombres: string;
  apellidoPaterno: string;
  apellidoMaterno: string; 
}

export interface ResponseGetDataFetchDni {
  data: GetDataFetchDNI;
  message?: string;
}

export const getFetchDNI = async (DNI: string) => {
  //Defecto
  // const defaultUrlApi = `http://localhost:3000/dni?numero=${DNI}`;
  try {
    //api levantando en onrender
    const urlUpApi = `https://api-dni-sistema.onrender.com/dni?numero=${DNI}`
    // const url = `http://localhost:3000/dni?numero=${DNI}`;
    const { data } = await axios.get<ResponseGetDataFetchDni>(urlUpApi);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      // otros tipos de errores, como errores de red o problemas en la solicitud.
      console.error("Error:", error.message);
      return error;
    }
  }
};
