import { create } from "zustand";
import DataLogin from "../../Interfaces/InterfacesLoginHome";
import { AuthLoginHome } from "./InterfaceStateGlobalLoginHome";

const stateAuthLogin = create<AuthLoginHome>(() => ({
  prueba(data: DataLogin) {
    console.log(data);
  },
}));

export default stateAuthLogin;
