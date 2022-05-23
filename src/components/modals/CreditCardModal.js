import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { Form, Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { removeAll } from "../../redux/actions/actionCarrito";

const CreditCardModal = ({ onToggle, isOpen }) => {
  const formik = useFormik({
    initialValues: {
      numero: "",
      fechaExp: "",
      titular: "",
      ccv: "",
      cuotas: "",
    },
    validationSchema: Yup.object({
      numero: Yup.number().required(),
      fechaExp: Yup.string().required(),
      titular: Yup.string().required(),
      ccv: Yup.number().required(),
      cuotas: Yup.number().required(),
    }),
    onSubmit: (data) => {
      console.log(data);
    },
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <Modal show={isOpen} onHide={onToggle}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Tarjeta de Credito</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={formik.onSubmit}>
            <div className="d-flex gap-1">
              <img
                src="https://w7.pngwing.com/pngs/923/610/png-transparent-diners-club-international-credit-card-mastercard-visa-credit-card-blue-text-trademark.png"
                alt="dinnersClub"
                width="70px"
                height="37px"
              />
              <img
                src="https://www.delitosfinancieros.org/wp-content/uploads/2017/10/mastercard_bank_money_card_20426_2048x1240.jpg"
                alt="mastercard"
                width="70px"
                height="37px"
              />
              <img
                src="https://w7.pngwing.com/pngs/468/789/png-transparent-debit-card-visa-credit-card-mastercard-cooperative-bank-visa-blue-text-trademark.png"
                alt="visa"
                width="70px"
                height="37px"
              />
            </div>
            <Form.Group>
              <Form.Label>Numero de Tarjeta</Form.Label>
              <Form.Control
                type="number"
                name="numero"
                placeholder="Numero de Tarjeta"
                onChange={formik.handleChange}
                error={formik.errors.numero}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Fecha de Expiracion</Form.Label>
              <Form.Control
                type="text"
                name="fechaExp"
                placeholder="Fecha de Expiracion"
                onChange={formik.handleChange}
                error={formik.errors.numero}
              />
            </Form.Group>
            <Form.Group className="mt-2">
              <Form.Label>Titular de la Tarjeta</Form.Label>
              <Form.Control
                type="text"
                name="titular"
                placeholder="Titular de la Tarjeta"
                onChange={formik.handleChange}
                error={formik.errors.titular}
              />
            </Form.Group>
            <Form.Group className="mt-2">
              <Form.Label>Codigo de Seguridad</Form.Label>
              <Form.Control
                type="number"
                name="ccv"
                placeholder="Codigo de Seguridad"
                onChange={formik.handleChange}
                error={formik.errors.ccv}
              />
            </Form.Group>
            <Form.Group className="mt-2 w-5">
              <Form.Label>Cuotas</Form.Label>
              <select
                name="cuotas"
                onChange={formik.handleChange}
                class="form-select"
                aria-label="Default select example"
              >
                <option selected>Seleccione</option>
                <option value="1">1</option>
                <option value="5">5</option>
                <option value="10">10</option>
              </select>
            </Form.Group>
            <div className="d-flex justify-content-center mt-3">
              <button
                className="edit-btn"
                type="submit"
                onClick={() => {
                  onToggle();
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Propiedades Compradas",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  dispatch(removeAll())
                  navigate('/')
                }}
              >
                Pagar Ahora
              </button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CreditCardModal;
