interface PropsGenerator {
  codVerifica: number | undefined;
  nombres: string | undefined;
  dni: string | undefined;  
}

export const generatorEmail = (data: PropsGenerator) => {
  if (data) {
    const { codVerifica, nombres } = data;    
    const emailDomain = 'hotmail.com'; //dominio prederterminado
    const formattedNombres = nombres?.toLowerCase().replace(/\s/g, ''); // Elimina espacios y convierte a minúsculas
    const email = `${formattedNombres}${codVerifica}@${emailDomain}`;
    return email;
  }
};

export const generatorPassword = (data: PropsGenerator)=> {
  if (data) {    
    const {  codVerifica, dni, nombres } = data;
    const randomNumber = Math.floor(Math.random() * 100); // Número aleatorio entre 0 y 100
    //Password, una letra mayuscula y el resto miniscula, hasta 
    const passwordCorrect = `${nombres?.charAt(0).toLocaleUpperCase()}${nombres?.slice(1,4).toLocaleLowerCase()}` 
    //Cuadro digitos del dni
    const limitdNumbers = `${dni?.slice(0,4)}`
    const password = `${passwordCorrect}${limitdNumbers}${codVerifica}${randomNumber}`
    return password
  }
};
