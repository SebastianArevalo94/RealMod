import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { fileUpload } from "../../helpers/fileUpload";
import { useForm } from "../../hooks/useForm";
import { addAsync } from "../../redux/actions/actionProperties";

const AddModal = ({ onToggle, isOpen }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const firestoreAutoId = () => {
    const CHARS =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let autoId = "";

    for (let i = 0; i < 20; i++) {
      autoId += CHARS.charAt(Math.floor(Math.random() * CHARS.length));
    }
    return autoId;
  };
  const [values, handleInputChange, handleSelect, reset] = useForm({
    id: firestoreAutoId(),
    nombre: "",
    camas: "",
    baños: "",
    camasKing: "",
    habitaciones: "",
    tipo: "",
    img: "",
    inteligente: "",
    libreria: "",
    m2: "",
    para: "",
    parqueadero: "",
    piscina: "",
    precio: "",
    segPrivada: "",
    ubicacion: "",
    zonaNiños: "",
    centroMedico: "",
  });
  const {
    id,
    nombre,
    camas,
    baños,
    camasKing,
    habitaciones,
    tipo,
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
  } = values;

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
    dispatch(addAsync(values));
    setShow(false);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Propiedad Agregada",
      showConfirmButton: false,
      timer: 1500,
    });
    onToggle();
    // reset();
  };

  return (
    <div>
      <>
        <Modal show={isOpen} onHide={onToggle}>
          <Modal.Header closeButton>
            <Modal.Title>Agregar Propiedad</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={() => handleSubmit()}>
              <div className="d-flex justify-content-evenly gap-3">
                <div>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre de la Prppiedad</Form.Label>
                    <Form.Control
                      type="text"
                      name="nombre"
                      placeholder="Nombre"
                      value={nombre}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Camas</Form.Label>
                    <Form.Control
                      type="number"
                      name="camas"
                      placeholder="nº de camas"
                      value={camas}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Baños</Form.Label>
                    <Form.Control
                      type="number"
                      name="baños"
                      placeholder="nº de baños"
                      value={baños}
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group>
                    <div className="d-flex flex-column mt-2 mb-2">
                      <label htmlFor="camasKing">Camas King</label>
                      <select
                        name="camasKing"
                        id="camasKing"
                        className="form-select"
                        value={camasKing}
                        onChange={handleSelect}
                      >
                        <option value="" selected disabled hidden>
                          Elige
                        </option>
                        <option value="true">Si</option>
                        <option value="false">No</option>
                      </select>
                    </div>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Habticiones</Form.Label>
                    <Form.Control
                      type="number"
                      name="habitaciones"
                      placeholder="nº de habitaciones"
                      value={habitaciones}
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group>
                    <div className="d-flex flex-column mt-2 mb-2">
                      <label htmlFor="tipo">Tipo</label>
                      <select
                        name="tipo"
                        id="tipo"
                        className="form-select"
                        value={tipo}
                        onChange={handleInputChange}
                      >
                        <option value="" selected disabled hidden>
                          Elige
                        </option>
                        <option value="Apartament">Apartamento</option>
                        <option value="Studio Home">Studio Home</option>
                      </select>
                    </div>
                  </Form.Group>
                </div>
                <div>
                  <Form.Group>
                    <div className="d-flex flex-column mt-2 mb-2">
                      <label for="libreria">Libreria</label>
                      <select
                        name="libreria"
                        id="libreria"
                        value={libreria}
                        className="form-select"
                        onChange={handleSelect}
                      >
                        <option value="" selected disabled hidden>
                          Elige
                        </option>
                        <option value="true">Si</option>
                        <option value="false">No</option>
                      </select>
                    </div>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Metros</Form.Label>
                    <Form.Control
                      type="number"
                      name="m2"
                      placeholder="Metros ²"
                      value={m2}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group>
                    <div className="d-flex flex-column mt-2 mb-2">
                      <label for="para">Para</label>
                      <select
                        name="para"
                        id="para"
                        value={para}
                        className="form-select"
                        onChange={handleInputChange}
                      >
                        <option value="" selected disabled hidden>
                          Elige
                        </option>
                        <option value="comprar">Comprar</option>
                        <option value="vender">Vender</option>
                        <option value="alquilar">Alquilar</option>
                      </select>
                    </div>
                  </Form.Group>

                  <Form.Group>
                    <div className="d-flex flex-column mt-2 mb-2">
                      <label for="parqueadero">Parqueadero</label>
                      <select
                        name="parqueadero"
                        id="parqueadero"
                        value={parqueadero}
                        className="form-select"
                        onChange={handleSelect}
                      >
                        <option value="" selected disabled hidden>
                          Elige
                        </option>
                        <option value="true">Si</option>
                        <option value="false">No</option>
                      </select>
                    </div>
                  </Form.Group>

                  <Form.Group>
                    <div className="d-flex flex-column mt-2 mb-2">
                      <label for="piscina">Piscina</label>
                      <select
                        name="piscina"
                        id="piscina"
                        value={piscina}
                        className="form-select"
                        onChange={handleSelect}
                      >
                        <option value="" selected disabled hidden>
                          Elige
                        </option>
                        <option value="true">Si</option>
                        <option value="false">No</option>
                      </select>
                    </div>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Precio</Form.Label>
                    <Form.Control
                      type="number"
                      name="precio"
                      placeholder="Precio"
                      value={precio}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </div>
                <div>
                  <Form.Group>
                    <div className="d-flex flex-column mt-2 mb-2">
                      <label for="Seguridad Privada">Seguridad Privada</label>
                      <select
                        name="segPrivada"
                        id="segPrivada"
                        value={segPrivada}
                        className="form-select"
                        onChange={handleSelect}
                      >
                        <option value="" selected disabled hidden>
                          Elige
                        </option>
                        <option value="true">Si</option>
                        <option value="false">No</option>
                      </select>
                    </div>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Ubicacion</Form.Label>
                    <Form.Control
                      type="text"
                      name="ubicacion"
                      placeholder="Ubicacion"
                      value={ubicacion}
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group>
                    <div className="d-flex flex-column mt-2 mb-2">
                      <label for="zonaNiños">Zona Niños</label>
                      <select
                        name="zonaNiños"
                        id="zonaNiños"
                        value={zonaNiños}
                        className="form-select"
                        onChange={handleSelect}
                      >
                        <option value="" selected disabled hidden>
                          Elige
                        </option>
                        <option value="true">Si</option>
                        <option value="false">No</option>
                      </select>
                    </div>
                  </Form.Group>
                  <Form.Group>
                    <div className="d-flex flex-column mt-2 mb-2">
                      <label for="centroMedico">Centro Medico</label>
                      <select
                        name="centroMedico"
                        id="centroMedico"
                        value={centroMedico}
                        className="form-select"
                        onChange={handleSelect}
                      >
                        <option value="" selected disabled hidden>
                          Elige
                        </option>
                        <option value="true">Si</option>
                        <option value="false">No</option>
                      </select>
                    </div>
                  </Form.Group>
                  <Form.Group className="mt-3">
                    <Form.Label>Imagen</Form.Label>
                    <label class="custom-file-upload">
                      <input
                        type="file"
                        name="img"
                        className="addFile"
                        onChange={handleFileChange}
                      />
                      Subir Imagen
                    </label>
                  </Form.Group>
                  <Form.Group>
                    <div className="d-flex flex-column mt-2 mb-2">
                      <label for="inteligente">Inteligente</label>
                      <select
                        name="inteligente"
                        id="inteligente"
                        value={inteligente}
                        className="form-select"
                        onChange={handleSelect}
                      >
                        <option value="" selected disabled hidden>
                          Elige
                        </option>
                        <option value="true">Si</option>
                        <option value="false">No</option>
                      </select>
                    </div>
                  </Form.Group>
                </div>
              </div>
              <div className="d-flex justify-content-evenly mt-2">
                <button className="delete-btn" onClick={onToggle}>
                  Cerrar
                </button>
                <button className="edit-btn" onClick={handleSubmit}>
                  Agregar
                </button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    </div>
  );
};

export default AddModal;
