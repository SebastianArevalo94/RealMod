import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { removeFromFavs } from "../redux/actions/actionFavoritos";
import DetailModal from "./modals/DetailModal";
import "../styles/Favoritos.css"

const Favoritos = () => {
  const favoritos = useSelector((store) => store.favoritos);
  const { properties } = useSelector((store) => store.properties);
  const [modal, setModal] = useState(false);

  const [propertie, setPropertie] = useState({});

  const calcularTotal = () => {
    let total = 0;
    favoritos.forEach((item) => {
      total += item.precio;
    });
    return total;
  };
  const dispatch = useDispatch();

  const toggleModal = () => {
    setModal(!modal);
  };

  const navigate = useNavigate();

  const viewDetail = (id) => {
    const propertie = properties.find((propertie) => propertie.id === id);
    setModal(true);
    setPropertie(propertie);
  };
  return (
    <div className="mt-5">
      {favoritos.length !== 0 ? (
        <p className="carrito-title">Propiedades en Favoritos </p>
      ) : (
        <>
          <p className="carrito-title">No hay propiedades en Favoritos </p>
          <div className="d-flex justify-content-center">
            <button className="addCarritoBtn" onClick={()=>navigate('/home')}>Agregar</button>
          </div>
        </>
      )}
      <div className="properties-container">
        {favoritos.map((item) => {
          const { id, nombre, precio, img, ubicacion, baños, camas, m2, tipo } = item;
          return (
            <div className="propertie-card">
              <div className="card-img">
                <img
                  width="270px"
                  className="propertie-img"
                  src={img}
                  alt="propertie-img"
                />
                <p className="for">For Buy</p>
                <p className="card-price">${precio}</p>
              </div>
              <div className="card-body">
                <p className="type">{tipo}</p>
                <p className="title">{nombre}</p>
                <div className="location-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-geo-alt"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
                  <p className="location">{ubicacion}</p>
                </div>
                <div className="detail-container">
                  <p className="detail-text">Beds {camas}</p>
                  <p className="detail-text">Baths {baños}</p>
                  <p className="detail-text">Sqft {m2}</p>
                </div>
                <div className="d-flex justify-content-evenly">
                  <button
                    type="button"
                    className="detail-btn"
                    onClick={() => {
                      viewDetail(id);
                    }}
                  >
                    Ver Mas
                  </button>
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
                          dispatch(removeFromFavs(item));
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
                </div>
              </div>
            </div>
          );
        })}
        {modal === true ? (
          <DetailModal
            modal={propertie}
            isOpen={setModal}
            onToggle={toggleModal}
            footerType="favType"
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Favoritos;
