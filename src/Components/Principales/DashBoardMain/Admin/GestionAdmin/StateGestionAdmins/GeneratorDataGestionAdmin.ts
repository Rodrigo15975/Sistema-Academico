interface PropsGeneratorDataAdmins {
  nombres: string 
  numeroDocumento: string 
  tipoDocumento: string 
}


export const generatorEmailAdminGestion = (data: PropsGeneratorDataAdmins) => {
  if (data) {
    const { tipoDocumento, nombres } = data;    
    const emailDomain = 'hotmail.com'; //dominio prederterminado
    const formattedNombres = nombres?.toLowerCase().replace(/\s/g, ''); // Elimina espacios y convierte a minúsculas
    const email = `${formattedNombres}${tipoDocumento}@${emailDomain}`;
    return email;
  }
};

export const generatorPasswordAdminGestion = (data: PropsGeneratorDataAdmins)=> {
  if (data) {    
    const {  tipoDocumento, numeroDocumento, nombres } = data;
    const randomNumber = Math.floor(Math.random() * 100); // Número aleatorio entre 0 y 100
    //Password, una letra mayuscula y el resto miniscula, hasta 
    const passwordCorrect = `${nombres?.charAt(0).toLocaleUpperCase()}${nombres?.slice(1,4).toLocaleLowerCase()}` 
    //Cuadro digitos del dni
    const limitdNumbers = `${numeroDocumento?.slice(0,4)}`
    const password = `${passwordCorrect}${limitdNumbers}${tipoDocumento}${randomNumber}`
    return password
  }
};
