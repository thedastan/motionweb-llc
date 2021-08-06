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


                                                       <ModalWindow el={el}/>
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
