import React, {useState} from "react";
import {Modal, Button} from "react-bootstrap";
import Reactjs from './img/react@4x.png'
import Figma from "./img/Figma-1-logo.png";
import JavaScript from "./img/jspng.png";
import Nodejs from "./img/nodejs.png";
import Html from "./img/HTML1.png";
import Css3 from "./img/CSS.png";
import Webpack from "./img/webpack_logo.png";
import Git from "./img/1280px-Git-logo.svg.png";
import Npm from "./img/npm.png";
import Redux from "./img/Redux-logo-transparent@2x.png";
import Mongodb from "./img/mongod.jpg";
import Bootstrap from "./img/bootstrap-5-releases-with-major-changes.jpg";
import Modal2 from "./Modal2";


function ModalWindow() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="dark" onClick={handleShow}>
                Тоолук маалымат
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>JavaScript Full-Stack разработка</Modal.Title>

                </Modal.Header>
                <Modal.Body>
                    <div className="content1__desk">
                        <div className="content1__title">
                            <ul className="window--row">
                                <li><h4 className="window-title">Курстун узактыгы: <span
                                    className="window-span">6 ай</span></h4></li>
                                <li><h4 className="window-title">График: <span
                                    className="window-span">7/3 -  2 сааттан</span></h4></li>
                            </ul>
                        </div>

                        <div className="content1__img">

                            <div className="content1__line1"/>
                        </div>

                    </div>

                    <div className="program">
                        <h3 className="program--title"> Инструменттер</h3>
                        <div className="program__img">
                            <img src={JavaScript} alt="" className="program1__android"/>
                            <img src={Reactjs} alt="" className="program1__js"/>
                            <img src={Nodejs} alt="" className="program1__node"/>
                            <img src={Html} alt="" className="program1__node"/>
                            <img src={Css3} alt="" className="program1__css"/>
                            <img src={Figma} alt="" className="program__figma"/>
                            <img src={Npm} alt="" className="program__npm"/>
                            <img src={Mongodb} alt="" className="program__mongo"/>
                            <img src={Git} alt="" className="program__npm"/>
                            <img src={Webpack} alt="" className="program__webpack"/>
                            <img src={Redux} alt="" className="program__bootstrap"/>
                            <img src={Bootstrap} alt="" className="program__bootstrap"/>
                        </div>

                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Modal2/>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ModalWindow