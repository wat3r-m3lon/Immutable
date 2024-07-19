import React, {useState, useEffect} from "react";
import Modal from "react-modal";
import axios from "axios";
import AuthService from "../services/auth.service";
import {useNavigate} from 'react-router-dom';
import EventBus from "../common/EventBus";

Modal.setAppElement("#root");

function DeleteButton({userId}) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [showModeratorBoard, setShowModeratorBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);
    const [currentUser, setCurrentUser] = useState(undefined);
    const navigateTo = useNavigate();
    const logOut = () => {
        AuthService.logout();
        setShowModeratorBoard(false);
        setShowAdminBoard(false);
        setCurrentUser(undefined);
    };

    function deleteService() {
        axios
            .delete(`http://localhost:8080/api/auth/delete/${userId}`)
            .then((response) => {
                console.log(response.data);

                navigateTo('/')
                logOut()
                EventBus.dispatch("logout");
            })
            .catch((error) => {
                console.log(error);
            });

    }


    return (
        <div>
            <button
                className="uppercase font-bold  text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setModalIsOpen(true)}>Delete Account
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={{
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                    }, content: {
                        width: "500px",
                        height: "200px",
                        margin: "auto",
                        borderRadius: "10px",
                        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#fff",
                    },
                }}
            >
                <h4 className="h4 mb-4">Do you want to delete this account?</h4>
                <div>
                    <button
                        className="uppercase font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        onClick={deleteService}>Yes
                    </button>
                    <button
                        className="uppercase font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        onClick={() => setModalIsOpen(false)}>No
                    </button>
                </div>
            </Modal>
        </div>
    );
}

export default DeleteButton;
