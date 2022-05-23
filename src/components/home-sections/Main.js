import homeBg from "../../assets/home-bg.png";
import "../../styles/Home Styles/MainStyles.css";
import slider from "../../assets/icons/sliders.svg";
import search from "../../assets/icons/search.svg";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import {searchAsync} from "../../redux/actions/actionProperties";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const { properties } = useSelector((store) => store.properties);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      search: "",
    },
    validationSchema: Yup.object({
      search: Yup.string().required("campo requerido"),
    }),
    onSubmit: ({ search }) => {
      let result = [];
      properties.forEach(propertie => {
        if(propertie.nombre.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
          result.push(propertie)
        }
      })
      localStorage.setItem('arraySearch', JSON.stringify(result))
      localStorage.setItem('wordSearch', search)
      navigate('/search')
    },
  });
  return (
    <div className="first">
      <div className="textInput">
        <p className="first-p1">Properties</p>
        <p className="first-p2">
          Find The Perfect Place to <br /> Live With Your Family
        </p>
        <div>
          <div className="btn-section">
            <p className="btn">Sell</p>
            <p className="btn">Buy</p>
            <p className="btn">Rent</p>
          </div>
          <div className="input-container">
            <form onSubmit={formik.handleSubmit} className="d-flex">
              <div>
                <input
                  className="search-input"
                  name="search"
                  placeholder="Enter keyword here"
                  type="text"
                  autoComplete="off"
                  onChange={formik.handleChange}
                />
                <span className="line">|</span>
                <select className="select" name="cars" id="cars">
                  <option selected disabled>
                    Select Option
                  </option>
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
              <div className="search-container">
                <img
                  className="slider-img"
                  width="20px"
                  src={slider}
                  alt="slider"
                />
                <button className="search-btn" type="submit">
                  <img
                    className="m-1"
                    src={search}
                    alt="search-icon"
                    width="18px"
                  />
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        <img width="100%" src={homeBg} alt="Home Background" />
      </div>
    </div>
  );
};

export default Main;
