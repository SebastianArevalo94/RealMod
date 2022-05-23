import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { typesProperties } from "../types/types";

export const searchAsync = (search) => {
  return async (dispatch) => {
    const coleccionTraer = collection(db, "properties");
    const q = query(
      coleccionTraer,
      where("nombre", ">=", search),
      where("nombre", "<=", search + "~")
    );
    const datosPropertie = await getDocs(q);
    const propertie = [];
    datosPropertie.forEach((docu) => {
      propertie.push(docu.data());
    });
    dispatch(searchSync(propertie));
  };
};

export const searchSync = (search) => {
  return {
    type: typesProperties.search,
    payload: search,
  };
};

//---------------------Edit-----------//
export const editAsync = (id, propertie) => {
  return async (dispatch) => {
    const colleccionTraer = collection(db, "properties");
    const q = query(colleccionTraer, where("id", "==", id));
    const traerDatosQ = await getDocs(q);
    let id_firestore;
    traerDatosQ.forEach(async (docu) => {
      id_firestore = docu.id;
    });
    console.log(id_firestore);
    const documenRef = doc(db, "properties", id_firestore);
    console.log(documenRef);
    await updateDoc(documenRef, propertie)
      .then((resp) => {
        dispatch(editSync(propertie));
        dispatch(listAsyn());
      })
      .catch((err) => console.log(err));
  };
};

export const editSync = (propertie) => {
  return {
    type: typesProperties.edit,
    payload: propertie,
  };
};

//-------------------delete--------------------//
export const deleteAsync = (id) => {
  return async (dispatch) => {
    const colleccionTraer = collection(db, "properties");
    const q = query(colleccionTraer, where("id", "==", id));
    const traerDatosQ = await getDocs(q);
    traerDatosQ.forEach((docum) => {
      deleteDoc(doc(db, "properties", docum.id));
    });
    dispatch(deleteSync(id));
    dispatch(listAsyn());
  };
};

export const deleteSync = (id) => {
  return {
    type: typesProperties.delete,
    payload: id,
  };
};

//---------------listar----------------//
export const listAsyn = () => {
  return async (dispatch) => {
    const colleccionTraer = await getDocs(collection(db, "properties"));
    const properties = [];
    colleccionTraer.forEach((doc) => {
      properties.push({
        ...doc.data(),
      });
    });
    dispatch(listSync(properties));
  };
};

export const listSync = (propertie) => {
  return {
    type: typesProperties.list,
    payload: propertie,
  };
};

//-------------agregar---------------//
export const addAsync = (propertie) => {
  return (dispatch) => {
    addDoc(collection(db, "properties"), propertie)
      .then((resp) => {
        dispatch(addSync(propertie));
        console.log(resp);
        dispatch(listAsyn());
      })
      .catch((error) => {
        console.warn(error);
      });
  };
};

export const addSync = (propertie) => {
  return {
    type: typesProperties.add,
    payload: propertie,
  };
};
