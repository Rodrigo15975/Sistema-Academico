export const errorPassword = (error: Error) => {
  if (error instanceof Error) {
    const { message } = error;
    if (message === "Firebase: Error (auth/wrong-password).") {
      return true;
    }
  }
};

export const profesorNotFound = (error: Error) => {
  if (error instanceof Error) {
    const { message } = error;
    if (message === "Firebase: Error (auth/user-not-found).") {
      return true;
    }
  }
};

export const disableAcount = (error: Error) => {
  if (error instanceof Error) {
    const { message } = error;
    if (
      message ===
      "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests)."
    )
      return true;
  }
};
