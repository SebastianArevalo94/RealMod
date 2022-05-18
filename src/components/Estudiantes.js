import axios from "axios";
import React, { Component } from "react";
import { Form, Modal, ModalBody, ModalFooter, ModalHeader, Label, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2'

export default class Estudiantes extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            modalEliminar: false,
            modalEditar: false
        };
    }

    componentDidMount = () => {
        this.HTTP_GET_ALL();
    };

    HTTP_GET_ALL = () => {
        axios
            .get("https://estudiantes-18-marzo.herokuapp.com/data")
            .then((resp) => {
                console.log(resp.data)
                this.setState({
                    data: resp.data,
                });
            })
            .catch((err) => console.log(err));
    };

    HTTP_DELETE = (id) => {
        axios
            .delete(`https://estudiantes-18-marzo.herokuapp.com/data/${id}`)
            .then((resp) => {
                this.setState({
                    modalEliminar: false
                })
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Usuario Eliminado',
                    showConfirmButton: false,
                    timer: 1500
                })
                this.HTTP_GET_ALL()
            })
            .catch((err) => console.log(err));
    };

    HTTP_PUT(id, obj) {
        axios.put(`https://estudiantes-18-marzo.herokuapp.com/data/${id}`, obj)
            .then(
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Usuario Editado',
                    showConfirmButton: false,
                    timer: 1500
                })
            )
            .catch((err) => console.error(err))
    }


    render() {
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Documento</th>
                            <th>Nombres</th>
                            <th>Apellidos</th>
                            <th>Teléfono</th>
                            <th>Celular</th>
                            <th>Dirección</th>
                            <th>Imagen</th>
                            <th>Operaciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((estudiante) => (
                            <tr key={estudiante.id}>
                                <td>{estudiante.id}</td>
                                <td>{estudiante.documento}</td>
                                <td>{estudiante.nombres}</td>
                                <td>{estudiante.nombres}</td>
                                <td>{estudiante.telefono}</td>
                                <td>{estudiante.celular}</td>
                                <td>{estudiante.direccion}</td>
                                <td>
                                    <img src={estudiante.imagen} alt={"Imagen de perfil"} width="50" />
                                </td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => {
                                        localStorage.setItem('id', estudiante.id)
                                        this.setState({
                                            modalEliminar: true
                                        })
                                    }}>
                                        <FontAwesomeIcon icon={faTrashAlt} />
                                    </button>
                                    <button className="btn btn-danger" onClick={() => {
                                        this.setState({
                                            modalEditar: true
                                        })
                                    }}> Editar
                                        {/* <FontAwesomeIcon icon={faTrashAlt} /> */}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <Modal isOpen={this.state.modalEliminar}>
                    <ModalBody>Está seguro de eliminar el estudiante?</ModalBody>
                    <ModalFooter>
                        <button className="btn btn-danger" onClick={() => {
                            this.HTTP_DELETE(localStorage.getItem('id'))
                        }} >Sí</button>
                        <button className="btn btn-secundary" onClick={() => {
                            this.setState({
                                modalEliminar: false
                            })
                        }}>No</button>
                    </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.modalEditar}>
                    <ModalHeader>Editar usuario Sebastian</ModalHeader>
                    <ModalBody>
                        <Form id="form">
                            <Label for="documento">
                                Documento
                            </Label>
                            <Input
                                id="documento"
                                name="documento"
                                placeholder="Escribe el nuevo documento"
                                type="text"
                            />

                            <Label for="nombre">
                                Nombre
                            </Label>
                            <Input
                                id="nombre"
                                name="nombre"
                                placeholder="Escribe el nuevo nombre"
                                type="text"
                            />

                            <Label for="nombres">
                                Nombres
                            </Label>
                            <Input
                                id="nombres"
                                name="nombres"
                                placeholder="Escribe el nuevo nombres"
                                type="text"
                            />

                            <Label for="apellidos">
                                Apellidos
                            </Label>
                            <Input
                                id="apellidos"
                                name="apellidos"
                                placeholder="Escribe los nuevos apellidos"
                                type="text"
                            />

                            <Label for="telefono_fijo">
                                Telefono Fijo
                            </Label>
                            <Input
                                id="telefono_fijo"
                                name="telefono_fijo"
                                placeholder="Escribe el nuevo telefono fijo"
                                type="number"
                            />

                            <Label for="celular">
                                Celular
                            </Label>
                            <Input
                                id="celular"
                                name="celular"
                                placeholder="Escribe el nuevo telefono celular"
                                type="number"
                            />

                            <Label for="direccion">
                                Direccion
                            </Label>
                            <Input
                                id="direccion"
                                name="direccion"
                                placeholder="Escribe la nueva direccion"
                                type="text"
                            />

                            <Label for="imagen">
                                Imagen
                            </Label>
                            <Input
                                id="imagen"
                                name="imagen"
                                placeholder="Pega el link de la nueva imagen"
                                type="text"
                            />

                        </Form>
                    </ModalBody>

                    <ModalFooter>
                        <button className="btn btn-success" onClick={() => {

                        }}>Editar</button>
                        <button className="btn btn-danger" onClick={() => {
                            this.setState({
                                modalEditar: false
                            })
                        }}>Cancelar</button>
                    </ModalFooter>

                </Modal>
            </div>
        );
    }
}
