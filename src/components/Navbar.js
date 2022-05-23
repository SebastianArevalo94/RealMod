import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutAsync } from "../redux/actions/actionLogin";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const carrito = useSelector((store) => store.carrito);
  const favoritos = useSelector((store) => store.favoritos);
  return (
    <div className="navbar">
      <img src={logo} alt="logo" width="200px" onClick={() => navigate("/")} />
      <ul className="navlist">
        <li className="list-item" onClick={()=>navigate('/home')}>Home</li>
        <li className="list-item">About</li>
        <li className="list-item">Property</li>
        <li className="list-item">Pages</li>
        <li className="list-item">Blog</li>
      </ul>
      <div className="buttons">
        <div className="circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            fill="#00c194"
            className="bi bi-arrow-left-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"
            />
          </svg>
        </div>
        <div className="circle" onClick={() => navigate("/favs")}>
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              fill="#00c194"
              className="bi bi-heart"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
            {favoritos.length !== 0 ? <span className="favAmount">{favoritos.length}</span>: '' }
          </div>
        </div>
        <div className="circle" onClick={() => navigate("/cart")}>
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              fill="#00c194"
              className="bi bi-cart2"
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
            {carrito.length !== 0 ? <span className="favAmount">{carrito.length}</span>: '' }
          </div>
        </div>
        <div className="circle" onClick={()=>navigate('/profile')}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            fill="#00c194"
            className="bi bi-person-square"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
          </svg>
        </div>
      </div>
      <div className="add-btn">
        <div className="add-plus">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-plus-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
          </svg>
        </div>
        <p onClick={() => navigate("/crud-properties")} className="add-p">
          Add property
        </p>
      </div>
      <button
        className="btn-logout"
        type="button"
        onClick={() => {
          dispatch(logoutAsync());
          navigate("/login");
        }}
      >
        Cerrar Sesion
      </button>
    </div>
  );
};

export default NavBar;
