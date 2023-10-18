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
  try {
    const url = `http://localhost:3000/dni?numero=${DNI}`;
    const { data } = await axios.get<ResponseGetDataFetchDni>(url);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      // otros tipos de errores, como errores de red o problemas en la solicitud.
      console.error("Error:", error.message);
      return error;
    }
  }
};
