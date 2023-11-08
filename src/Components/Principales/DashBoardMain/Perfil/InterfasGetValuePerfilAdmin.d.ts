type GetValuePerfilAdmin = {
  dni: string;
  nombres: string;
  apellidos: string;
  correo: string;
  password: string;
  role: string;
  uid: string;
};

interface FunctionPerfilAdmin {
  fetchDataFromFirestoreAdmin: (uid: string) => Promise<void>;
}

interface MainStateGetPerfilAdmin extends FunctionPerfilAdmin {
  adminPerfil: GetValuePerfilAdmin;

}


