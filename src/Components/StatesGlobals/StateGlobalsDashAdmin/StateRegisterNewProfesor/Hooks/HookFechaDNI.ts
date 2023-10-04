import axios from "axios";
export interface GetDataFetchDNI {
  success: boolean;
  dni: string;
  nombres: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  codVerifica: number;
  message: string;
}

export const getFetchDNI = async (DNI: string) => {
  try {
    const url = `https://dniruc.apisperu.com/api/v1/dni/${DNI}?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Imphdmllcmx1aXMxNTk3NUBob3RtYWlsLmNvbSJ9.waKKphGFAqFzAu7yu75Kn9kSIUV1z1C0-dUNCzmYuFE`;
    const { status, data } = await axios.get<GetDataFetchDNI>(url);
    const {
      message,
      apellidoMaterno,
      apellidoPaterno,
      codVerifica,
      dni,
      nombres,
    } = data;
    // Si el servidor responde con un código de estado 200 y un mensaje de éxito
    if (status === 200 && data.success)
      return {
        apellidoMaterno,
        apellidoPaterno,
        dni,
        nombres,
        message,
        codVerifica,
      };
    // Si el servidor responde con un código de estado diferente o sin un mensaje de éxito.
    else
      return {
        message,
      };
  } catch (error) {
    if (error instanceof Error) {
      // otros tipos de errores, como errores de red o problemas en la solicitud.
      console.error("Error:", error.message);
      return {
        success: false,
        message: error.message,
      };
    }
  }
};
