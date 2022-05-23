import { useState } from "react";
import { Modal, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fileUpload } from "../../helpers/fileUpload";
import { useForm } from "../../hooks/useForm";
import axios from "axios";
import Swal from "sweetalert2";

const EditAgentModal = ({ onToggle, isOpen, modal }) => {
  const [values, handleInputChange, reset] = useForm({
    name: modal.name,
    info: modal.info,
    phone: modal.phone,
    img: modal.img,
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    //el FileUp es la configuracion con cloudinary y le asigno la respuesta de cloudi a la foto
    fileUpload(file)
      .then((resp) => {
        values.img = resp;
        console.log(resp);
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  const { id, name, info, phone } = values;

  return (
    <Modal show={isOpen} onHide={onToggle}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Agente</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Nombre"
              value={name}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mt-2 w-5">
            <Form.Label>Tipo</Form.Label>
            <select
              name="info"
              class="form-select"
              aria-label="Default select example"
              value={info}
              onChange={handleInputChange}
            >
              <option selected>Seleccione</option>
              <option value="Sweet Home">Sweet Home</option>
              <option value="Eco Builder">Eco Builder</option>
              <option value="Marl Street">Marl Street</option>
            </select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Numero de Telefono</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              placeholder="Telefono"
              value={phone}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formFile" className="mt-3 d-flex flex-column">
            <Form.Label>Imagen</Form.Label>
            <Form.Control type="file" name="img" onChange={handleFileChange} />
          </Form.Group>
          <div className="d-flex justify-content-center mt-3">
            <button
              className="edit-btn"
              onClick={(e) => {
                e.preventDefault();
                axios
                  .put(`https://realmod-app.herokuapp.com/agents/${modal.id}`, values)
                  .then(() => {
                    onToggle();
                    Swal.fire({
                      position: "center",
                      icon: "success",
                      title: "Agente Editado!",
                      showConfirmButton: false,
                      timer: 1500,
                    });
                  });
              }}
            >
              Editar Agente
            </button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditAgentModal;
