import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { google, facebook } from "../../firebase/firebaseConfig";
import { typesLogin } from "../types/types";
import Swal from 'sweetalert2';

//--------------------Logout----------------------

export const logoutAsync = () => {
  return (dispatch) => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(logoutSync());
        console.log("Adios");
      })
      .catch((error) => {
        console.warn(error);
      });
  };
};

export const logoutSync = () => {
  localStorage.removeItem('user')
  return {
    type: typesLogin.logout,
  };
};

//---------------------------//
export const loginGoogle = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, google)
      .then(({ user }) => {
        let localLSUser = {
          name: user.displayName,
          email: user.email,
          img: user.photoURL
        }
        localStorage.setItem('user', JSON.stringify(localLSUser))
         dispatch(loginSincronico(user.email, user.password))
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `Bienvenido!`,
          showConfirmButton: true
        })
      })
      .catch((error) => {
        console.warn(error, "No autorizado");
      });
  };
};

export const loginFacebook = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, facebook)
      .then(({user})=>{
        dispatch(loginSincronico(user.email, user.password))
        console.log(user)
      })
      .catch((err) => console.log(err.message))
  }
}
//validar usuario y Contrase;a
export const loginEmailPassAsync = (email, password, img) => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        let localLSUser = {
          name: user.displayName,
          email: user.email,
          img: user.photoURL
        }
        localStorage.setItem('user', JSON.stringify(localLSUser))
        dispatch(loginSincronico(user.email, user.password));
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `Bienvenido!`,
          showConfirmButton: true
        })
      })

      .catch((error) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Datos incorrectos!',
          showConfirmButton: true
        })
      });
  };
};

export const loginSincronico = (email, password) => {
  return {
    type: typesLogin.login,
    payload: {
      email,
      password,
    },
  };
};
