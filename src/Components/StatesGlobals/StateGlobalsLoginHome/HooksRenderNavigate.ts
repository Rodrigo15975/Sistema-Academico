import { NavigateFunction } from "react-router-dom";
import Roles from "../../Enums/Roles";

interface PropsRender {
  navigate: NavigateFunction;
  role: string;
}

export const renderNavigateRole = ({ role }: PropsRender) => {
  const ROLE = role.toUpperCase();
  if (ROLE === Roles.administrador) {
    return ROLE;
  } else if (ROLE === Roles.profesor) {
    return ROLE;
  } else {
    return ROLE;
  }
};
