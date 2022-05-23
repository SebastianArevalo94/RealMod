import React, { useEffect, useState } from "react";
import DetailModal from "./modals/DetailModal";

const SearchPropertie = () => {
  const [properties, setProperties] = useState(
    JSON.parse(localStorage.getItem("arraySearch"))
  );
  const [modal, setModal] = useState(false);
  const [propertie, setPropertie] = useState({});
  const viewDetail = (id) => {
    const propertie = properties.find((propertie) => propertie.id === id);
    setModal(true);
    setPropertie(propertie);
  };
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <div className="d-flex justify-content-center">
      <div>
        {localStorage.getItem("wordSearch") === "filter" ? (
          <h1 className="mt-4 mb-4 text-center">Propiedades con {localStorage.getItem('filter')}</h1>
        ) : properties.length !== 0 ? (
          <h1 className="mt-3 mb-3 text-center">{`Resultados relacionados con: "${localStorage.getItem(
            "wordSearch"
          )}"`}</h1>
        ) : (
          <h1 className="mt-3 mb-3 text-center">{`No hay resultados relacionados con: "${localStorage.getItem(
            "wordSearch"
          )}"`}</h1>
        )}
        <div className="properties-container">
          {properties.map((item, index) => {
            const {
              id,
              nombre,
              camas,
              baños,
              img,
              m2,
              precio,
              ubicacion,
              tipo,
            } = item;
            return (
              <div className="propertie-card" key={index}>
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
                  <div className="d-flex justify-content-evenly mt-2">
                    <button
                      type="button"
                      className="edit-btn"
                      onClick={() => {
                        viewDetail(id);
                      }}
                    >
                      Ver Detalle
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
              footerType="btnType"
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPropertie;
