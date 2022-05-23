import React from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { addToCart, removeFromCart } from "../../redux/actions/actionCarrito";
import { addToFavs, removeFromFavs } from "../../redux/actions/actionFavoritos";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DetailModal = ({ modal, onToggle, isOpen, footerType }) => {
  const dispatch = useDispatch();
  const whichFooterType = (type) => {
    if (type === "cartType") {
      return (
        <Modal.Footer className="d-flex justify-content-center">
          <button
            type="button"
            className="delete-btn"
            onClick={() => {
              Swal.fire({
                title: "Eliminar del carrito?",
                text: "La propiedad se quitará del carrito!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Si",
              }).then((result) => {
                if (result.isConfirmed) {
                  dispatch(removeFromCart(modal));
                  onToggle();
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Propiedad Eliminada del Carrito",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                }
              });
            }}
          >
            Eliminar del Carrito
          </button>
        </Modal.Footer>
      );
    } else if (type === "favType") {
      return (
        <Modal.Footer className="d-flex justify-content-center">
          <button
            type="button"
            className="delete-btn"
            onClick={() => {
              Swal.fire({
                title: "Eliminar de favoritos?",
                text: "La propiedad se quitará de favoritos!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Si",
              }).then((result) => {
                if (result.isConfirmed) {
                  dispatch(removeFromFavs(modal));
                  onToggle();
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Propiedad Eliminada de Favoritos",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                }
              });
            }}
          >
            Eliminar
          </button>
        </Modal.Footer>
      );
    } else if (type === "btnType") {
      return (
        <Modal.Footer className="d-flex justify-content-evenly">
          <button
            type="button"
            className="detail-btn"
            onClick={() => {
              dispatch(addToCart(modal));
              onToggle();
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Propiedad Agregada al carrito",
                showConfirmButton: false,
                timer: 1500,
              });
            }}
          >
            Agregar al Carrito
          </button>
          <button
            type="button"
            className="save-btn"
            onClick={() => {
              dispatch(addToFavs(modal));
              onToggle();
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Propiedad Agregada a Favoritos",
                showConfirmButton: false,
                timer: 1500,
              });
            }}
          >
            Agregar a Favoritos
          </button>
        </Modal.Footer>
      );
    }
  };
  const TrueFalse = (prop) => {
    if (prop === "true") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="green"
          class="bi bi-check-lg"
          viewBox="0 0 16 16"
        >
          <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
        </svg>
      );
    } else {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="red"
          class="bi bi-x-lg"
          viewBox="0 0 16 16"
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
        </svg>
      );
    }
  };
  const {
    id,
    nombre,
    camas,
    baños,
    camasKing,
    habitaciones,
    img,
    inteligente,
    libreria,
    m2,
    para,
    parqueadero,
    piscina,
    precio,
    segPrivada,
    ubicacion,
    zonaNiños,
    centroMedico,
  } = modal;
  return (
    <Modal show={isOpen} onHide={onToggle}>
      <Modal.Header closeButton>
        <Modal.Title>{nombre}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-column">
          <div className="card-img">
            <img className="propertie-img2" src={img} alt="propertie-img" />
            <p className="for2">For Buy</p>
            <p className="card-price2">${precio}</p>
          </div>
          <div className="d-flex justify-content-center gap-3">
            <div>
              <div className="text-center">
                <p className="detail-txt">Camas: {camas}</p>
              </div>
              <div className="m-auto">
                <p className="detail-txt">Baños: {baños}</p>
              </div>
              <div className="">
                <p className="detail-txt">
                  Cama King Size
                  {camasKing === true ? TrueFalse("true") : TrueFalse("false")}
                </p>
              </div>
              <div className="m-auto">
                <p className="detail-txt">
                  Habitaciones: {habitaciones}
                </p>
              </div>
              <div className="m-auto">
                <p className="detail-txt">Libreria {libreria === true ? TrueFalse('true'): TrueFalse('false')}</p>
              </div>
              <div className="text-center">
                <p className="detail-txt">Zona de Juegos {zonaNiños === true ? TrueFalse('true'): TrueFalse('false')}</p>
              </div>
            </div>
            <div>
              <div className="">
                <p className="detail-txt">Metros 2: {m2}</p>
              </div>
              <div className="m-auto">
                <p className="detail-txt">Parqueadero {parqueadero === true ? TrueFalse('true'): TrueFalse('false')}</p>
              </div>
              <div className="m-auto">
                <p className="detail-txt">Piscina {piscina === true ? TrueFalse('true'): TrueFalse('false')}</p>
              </div>
              <div className="m-auto">
                <p className="detail-txt">Seguridad Privada {segPrivada === true ? TrueFalse('true'): TrueFalse('false')}</p>
              </div>
              <div className="m-auto">
                <p className="detail-txt">Ubicacion: {ubicacion}</p>
              </div>
              <div className="text-center">
                <p className="detail-txt">Centro Medico {centroMedico === true ? TrueFalse('true'): TrueFalse('false')}</p>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      {whichFooterType(footerType)}
    </Modal>
  );
};

export default DetailModal;
