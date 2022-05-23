import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { typesRegister } from "../types/types";
import Swal from 'sweetalert2';

export const registerAsync = (name, email, password, img) => {
  return (dispatch) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        await updateProfile(auth.currentUser, { displayName: name, photoURL: img });
        let localLSUser = {
          name: user.displayName,
          email: user.email,
          img: user.photoURL
        }
        localStorage.setItem('user', JSON.stringify(localLSUser))
        dispatch(registerSync(name, email, password));
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `Bienvenido ${name}!`,
          showConfirmButton: true
        })
      })
      .catch((error) => {
        console.warn(error, "No autorizado");
      });
  };
};

export const registerSync = (name, email, password) => {
  return {
    type: typesRegister.register,
    payload: {
      name,
      email,
      password,
    },
  };
};
