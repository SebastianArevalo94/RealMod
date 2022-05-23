import parkingSpace from "../../assets/icons/parking-space.png";
import swimmingPool from "../../assets/icons/swimming-pool.png";
import privateSecurity from "../../assets/icons/private-security.png";
import medicalCenter from "../../assets/icons/medical-center.png";
import libraryArea from "../../assets/icons/library-area.png";
import kingBed from "../../assets/icons/king-bed.png";
import smartHome from "../../assets/icons/smart-home.png";
import kidsPlayland from "../../assets/icons/kids-playland.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/Home Styles/FeaturedListing.css";

const FeaturedList = () => {
  const { properties } = useSelector((store) => store.properties);
  const navigate = useNavigate();
  const handleFilter = (filter) => {
    let result = [];
    switch(filter) {
      case 'Parqueadero':
        properties.forEach(propertie => {
          if(propertie.parqueadero){
            result.push(propertie)
          }
        })
        break;
      case 'Piscina':
        properties.forEach(propertie => {
          if(propertie.piscina){
            result.push(propertie)
          }
        })
        break;
      case 'Seguridad Privada':
        properties.forEach(propertie => {
          if(properties.segPrivada){
            result.push(propertie)
          }
        })
        break;
        case 'Centro Medico':
        properties.forEach(propertie => {
          if(propertie.centroMedico){
            result.push(propertie)
          }
        })
        break;
        case 'Libreria':
        properties.forEach(propertie => {
          if(propertie.libreria){
            result.push(propertie)
          }
        })
        break;
        case 'Camas King Size':
        properties.forEach(propertie => {
          if(propertie.camasKing){
            result.push(propertie)
          }
        })
        break;
        case 'Inteligente':
        properties.forEach(propertie => {
          if(propertie.inteligente){
            result.push(propertie)
          }
        })
        break;
        case 'Zona de Juegos para Niños':
        properties.forEach(propertie => {
          if(propertie.zonaNiños){
            result.push(propertie)
          }
        })
        break;
      default:
        // code block

    };
      localStorage.setItem('arraySearch', JSON.stringify(result))
      localStorage.setItem('wordSearch', 'filter')
      localStorage.setItem('filter', filter)
      navigate('/search')
  }
  return (
    <div className="mt-3" id="featuredList">
      <p className="properties">properties</p>
      <p className="featured-list">Featured Listing</p>
      <div className="filters-container">
        <div className="filter-item" onClick={()=>handleFilter('Parqueadero')}>
          <div className="filter-img">
            <img width="50px" src={parkingSpace} alt="Parking Space" />
          </div>
          <p className="filter-text">Parking Space</p>
          <div className="go">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </div>
        </div>
        <div className="filter-item" onClick={()=>handleFilter('Piscina')}>
          <div className="filter-img">
            <img width="50px" src={swimmingPool} alt="Parking Space" />
          </div>
          <p className="filter-text">Swimming Pool</p>
          <div className="go">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </div>
        </div>
        <div className="filter-item" onClick={()=>handleFilter('Seguridad Privada')}>
          <div className="filter-img">
            <img width="50px" src={privateSecurity} alt="Parking Space" />
          </div>
          <p className="filter-text">Private Security</p>
          <div className="go">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </div>
        </div>
        <div className="filter-item" onClick={()=>handleFilter('Centro Medico')}>
          <div className="filter-img">
            <img width="50px" src={medicalCenter} alt="Parking Space" />
          </div>
          <p className="filter-text">Medical Center</p>
          <div className="go">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="filters-container mt-4">
        <div className="filter-item" onClick={()=>handleFilter('Libreria')}>
          <div className="filter-img">
            <img width="50px" src={libraryArea} alt="Parking Space" />
          </div>
          <p className="filter-text">Library Area</p>
          <div className="go">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </div>
        </div>
        <div className="filter-item" onClick={()=>handleFilter('Camas King Size')}>
        <div className="filter-img">
            <img width="50px" src={kingBed} alt="Parking Space" />
          </div>
          <p className="filter-text">King Size Beds</p>
          <div className="go">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </div>
        </div>
        <div className="filter-item" onClick={()=>handleFilter('Inteligente')}>
          <div className="filter-img">
            <img width="50px" src={smartHome} alt="Parking Space" />
          </div>
          <p className="filter-text">Smart Homes</p>
          <div className="go">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </div>
        </div>
        <div className="filter-item" onClick={()=>handleFilter('Zona de Juegos para Niños')}>
          <div className="filter-img">
            <img width="50px" src={kidsPlayland} alt="Parking Space" />
          </div>
          <p className="filter-text">Kids Playland</p>
          <div className="go">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedList;
