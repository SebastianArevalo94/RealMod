import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listAsyn } from "../../redux/actions/actionProperties";
import DetailModal from "../modals/DetailModal";
import "../../styles/Home Styles/FeaturedProperties.css";

const FeaturedProperties = () => {
  const dispatch = useDispatch();
  const { properties } = useSelector((store) => store.properties);
  const [modal, setModal] = useState(false);
  const [propertie, setPropertie] = useState({});
  const featuredProperties = [
    "GfvyhrVL7wrOD7gTxSpO",
    "E7Xwqgd0fOTYauqvjjrt",
    "AgpN2oDjXfWGaG6Xskqv",
    "WOchjX3q4QlWzawl5qYp",
    "UXQEpiEsejDrIBzCtkzm",
    "l08AvYWOR6xSxZt5xbKW",
  ];

  const toggleModal = () => {
    setModal(!modal);
  };

  const viewDetail = (id) => {
    const propertie = properties.find((propertie) => propertie.id === id);
    setModal(true);
    setPropertie(propertie);
  };
  useEffect(() => {
    dispatch(listAsyn());
  }, []);
  return (
    <div className="mt-5">
      <p className="properties">our properties</p>
      <p className="featured-list">Our Featured Properties </p>
      <div className="properties-container">
        {properties.map((item) => {
          const { id, nombre, precio, img, ubicacion, baños, camas, m2, tipo } =
            item;
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
                <div className="d-flex justify-content-center">
                  <button
                    type="button"
                    className="detail-btn"
                    onClick={() => {
                      viewDetail(id);
                    }}
                  >
                    Ver Mas
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
  );
};

export default FeaturedProperties;
