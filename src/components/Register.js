import React from "react";
import { FormGroup, Form, Label, Input } from "reactstrap";
import { registerAsync } from "../redux/actions/actionRegister";
import { useDispatch } from "react-redux";
import logo from "../assets/logo.png";
import { fileUpload } from "../helpers/fileUpload";
import { useForm } from "../hooks/useForm";

export default function Register() {
  const [values, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
    img: "",
  });

  const dispatch = useDispatch();

  const { name, email, password, img } = values;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    fileUpload(file)
      .then((resp) => {
        values.img = resp;
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerAsync(name, email, password, values.img));
    // reset();
  };

  return (
    <div className="d-flex flex-column">
      <div className="d-inline-flex justify-content-center m-3">
        <img className="m-3" width="270px" src={logo} alt="Imagen" />
      </div>
      <div className="d-inline-flex justify-content-center">
        <Form className="m-4 p-4 border" onSubmit={handleSubmit}>
          <p className="fs-3 text-center">Crear Cuenta</p>
          <FormGroup>
            <label htmlFor="name">Nombre:</label>
            <input
              className="form-control"
              name="name"
              placeholder="Introduce tu nombre"
              type="text"
              value={name}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <label className="mt-3" htmlFor="email">
              Correo:
            </label>
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
          <FormGroup>
          <label className="mt-3" htmlFor="file">
              Imagen:
            </label>
            <input
              className="form-control"
              name="file"
              type="file"
              onChange={handleFileChange}
            />
          </FormGroup>
          <div className="d-flex justify-content-center flex-column gap-3 mt-3">
            <button className="btn-login">Registrarse</button>
          </div>
        </Form>
      </div>
    </div>
  );
}
