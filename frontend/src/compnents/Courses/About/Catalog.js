import React, {useState} from 'react'
import Clock from "react-flip-clock-count-down";
import 'react-bootstrap'


import './css/catalog.css'
import Money from './img/money.png'
import ModalWindow from "./Modal1";
import '../media.css'
import ModalWindow2 from "./Modal2";
import data from "./data";
import {Button, Modal} from "react-bootstrap";
import Modal2 from "./Modal2";
import tools from "./tools";

// import tools from "./tools";


const Catalog = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <section id="catalog">
            <div className="container">
                <div className="sale__line2"/>
                <div className="sale__time">
                    <div className="time">
                        <div className="time__title">

                            <h2>Сатуунун аягына чейин</h2>
                            <Clock endTime={48}/>

                        </div>
                        <div className="help">
                            <li>
                                <a href="#">тандоого жардам берүү</a></li>
                        </div>
                    </div>
                </div>
                <div className="courses__cards__block">
                    <div className="courses__block">

                        <ul className="courses__block__napr">
                            <h1>КУРСТАР:</h1>
                            <li>
                                <a className="kurs " href="#">Баардык курстар</a></li>
                            <li>
                                <a className="kurs" href="#">Программалоо</a></li>
                            <li>
                                <a className="kurs" href="#">Дизайн</a></li>
                            <li>
                                <a className="kurs" href="#">Бизнес</a></li>
                            <div className="courses__block__linu"/>
                        </ul>
                    </div>
                    <div className="courses__linu"/>
                    <div className="cards__block">
                        <div className="row">
                            {
                                data.map((el) => {
                                    return (
                                        <div className='col-6'>
                                            <div className="card" key={el.id}>
                                                <div className="puzyr__1"/>
                                                <div className="win">
                                                    <img className="img1" src={el.imageUrl} alt=""/>
                                                    <div className="shadow1"/>
                                                </div>
                                                <div className="puzyr__2"/>
                                                <div className="title">
                                                    <h3>{el.subtitle}</h3>
                                                    <h1>{el.courseName}</h1>
                                                </div>
                                                <div className="card2">
                                                    <h1>{el.coursePrice} <span>сом/айына.</span></h1>
                                                    <h3>{el.courseDiscount}</h3>
                                                    <p>{el.courseDesc}</p>
                                                    <img src={Money} alt=""/>
                                                </div>
                                                <div className="puzyr__3"/>
                                                <div className="buttons">
                                                    <Button variant="dark" onClick={handleShow}>
                                                        Тоолук маалымат
                                                    </Button>

                                                    <Modal show={show} onHide={handleClose} >
                                                        <Modal.Header closeButton>
                                                            <Modal.Title>{el.courseName}</Modal.Title>
                                                        </Modal.Header>
                                                        <Modal.Body>
                                                            <div className="content1__desk">
                                                                <div className="content1__title">
                                                                    <ul className="window--row">
                                                                        <li><h4 className="window-title">Курстун
                                                                            узактыгы: <span
                                                                                className="window-span">{el.courseTime}</span>
                                                                        </h4></li>
                                                                        <li><h4 className="window-title">График: <span
                                                                            className="window-span">{el.schedule}</span>
                                                                        </h4></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="content1__img">
                                                                    <div className="content1__line1"/>
                                                                </div>
                                                            </div>
                                                            <div className="program">
                                                                <h3 className="program--title"> Инструменттер</h3>
                                                                <div className="program__img">
                                                                    <img src={el.imageUrl} alt=""
                                                                         className="program1__android"/>
                                                                    {/*<img src={JavaScript} alt="" className="program1__android"/>*/}
                                                                    {/*<img src={Reactjs} alt="" className="program1__js"/>*/}
                                                                    {/*<img src={Nodejs} alt="" className="program1__node"/>*/}
                                                                    {/*<img src={Html} alt="" className="program1__node"/>*/}
                                                                    {/*<img src={Css3} alt="" className="program1__css"/>*/}
                                                                    {/*<img src={Figma} alt="" className="program__figma"/>*/}
                                                                    {/*<img src={Npm} alt="" className="program__npm"/>*/}
                                                                    {/*<img src={Mongodb} alt="" className="program__mongo"/>*/}
                                                                    {/*<img src={Git} alt="" className="program__npm"/>*/}
                                                                    {/*<img src={Webpack} alt="" className="program__webpack"/>*/}
                                                                    {/*<img src={Redux} alt="" className="program__bootstrap"/>*/}
                                                                    {/*<img src={Bootstrap} alt="" className="program__bootstrap"/>*/}
                                                                </div>

                                                            </div>

                                                        </Modal.Body>
                                                        <Modal.Footer>
                                                            <Modal2/>
                                                        </Modal.Footer>
                                                    </Modal>

                                                    <ModalWindow2/>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Catalog
