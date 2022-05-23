import React, { useEffect, useState } from "react";
import axios from "axios";
import AddAgentModal from "../modals/AddAgentModal";
import EditAgentModal from "../modals/EditAgentModal";
import Swal from "sweetalert2";
import "../../styles/Home Styles/ExclusiveAgents.css";

const ExclusiveAgents = () => {
  const [agents, setAgents] = useState([]);
  const [agent, setAgent] = useState([]);

  const url = "https://realmod-app.herokuapp.com/agents";

  const [modal, setModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleEditModal = () => {
    setEditModal(!editModal);
  };

  const viewEdit = (id) => {
    axios.get(`${url}/${id}`).then((res) => {
      setAgent(res.data);
      setEditModal(true);
    });
  };

  useEffect(() => {
    const GetData = async () => {
      try {
        let resp = await fetch(url);
        let json = await resp.json();
        setAgents(json)
      } catch(err) {
        console.error(err)
       }
    };
    GetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [agents]);

  return (
    <div className="mt-5">
      <p className="properties">experties is here</p>
      <p className="featured-list">Our Exclusive Agents </p>
      <div className="d-flex justify-content-center m-3">
        <button className="edit-btn" onClick={() => setModal(true)}>
          Add
        </button>
      </div>
      <div className="agents-container">
        {agents.map((item) => {
          const { id, name, info, phone, img } = item;
          return (
            <div className="agent-card">
              <div className="agent-img-container">
                <img
                  className="agent-img"
                  width="190px"
                  src={img}
                  alt="agent-img"
                />
                <p className="agent-info">
                  <span className="dot"></span> 08 Listing
                </p>
              </div>
              <div className="agent-body mt-2">
                <p className="agent-body-name">{name}</p>
                <p className="agent-body-type">{info}</p>
                <div className="agent-body-phone">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#00c194"
                    className="bi bi-telephone-outbound"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />
                  </svg>
                  <p>Call: {phone}</p>
                </div>
              </div>
              <div className="buttons">
                <div onClick={() => viewEdit(id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="#0d6efd"
                    class="bi bi-pencil-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path
                      fill-rule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                    />
                  </svg>
                </div>
                <div
                  onClick={() => {
                    Swal.fire({
                      title: "Estas seguro?",
                      text: "El agente se borrará!",
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonColor: "#3085d6",
                      cancelButtonColor: "#d33",
                      confirmButtonText: "Si",
                    }).then((result) => {
                      if (result.isConfirmed) {
                        axios.delete(`${url}/${id}`).then(() => {
                          Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Agente Eliminado",
                            showConfirmButton: false,
                            timer: 1500,
                          });
                        });
                      }
                    });
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="#dc3545"
                    class="bi bi-trash3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                  </svg>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {modal === true ? (
        <AddAgentModal isOpen={setModal} onToggle={toggleModal} />
      ) : (
        ""
      )}
      {editModal === true ? (
        <EditAgentModal
          isOpen={setEditModal}
          onToggle={toggleEditModal}
          modal={agent}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default ExclusiveAgents;
