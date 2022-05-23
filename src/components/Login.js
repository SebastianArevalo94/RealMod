import React from "react";
import { useNavigate } from "react-router-dom";
import { FormGroup, Button, Row, Col, Form } from "reactstrap";
import { loginEmailPassAsync, loginGoogle, loginFacebook } from "../redux/actions/actionLogin";
import { useDispatch } from "react-redux";
import logo from "../assets/logo.png";
import { useForm } from "../hooks/useForm";
import "../styles/Login.css";

export default function Login() {
  const [values, handleInputChange, reset] = useForm({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { email, password } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginEmailPassAsync(email, password));
  };

  return (
    <div className="d-flex flex-column">
      <div className="d-inline-flex justify-content-center m-3">
        <img className="m-3" width="270px" src={logo} alt="Imagen" />
      </div>
      <div className="d-inline-flex justify-content-center">
        <Form className="m-4 p-4 border" onSubmit={handleSubmit}>
          <p className="fs-3">Iniciar Sesion</p>
          <FormGroup>
            <label htmlFor="email">Correo:</label>
            <input
              className="form-control"
              name="email"
              placeholder="Introduce tu correo"
              type="email"
              value={email}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <label className="mt-3" htmlFor="password">
              Password:
            </label>
            <input
              className="form-control"
              name="password"
              placeholder="Introduce tu contraseña"
              type="password"
              value={password}
              onChange={handleInputChange}
            />
          </FormGroup>
          <div className="d-flex justify-content-center flex-column gap-3 mt-3">
            <button className="btn-login" type="submit">Iniciar sesion</button>
            <button
              className="btn-google"
              type="button"
              onClick={() => {
                dispatch(loginGoogle())
              }}
            >
              Iniciar con Google{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-google"
                viewBox="0 0 16 16"
              >
                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
              </svg>
            </button>
            <button
              className="btn-facebook"
              type="button"
              onClick={() => {
                dispatch(loginFacebook())
              }}
            >
              Iniciar con Facebook{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </button>
          </div>
          <p className="toRegister" onClick={()=>{navigate('/register')}}>
            No tienes cuenta? Registrate
          </p>
        </Form>
      </div>
    </div>
  );
}
