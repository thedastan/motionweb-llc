import React from 'react'
import Money from "./img/money.png";
import ModalWindow from "./Modal1";
import ModalWindow2 from "./Modal2";

const Card = () => {
    // const course = [price, imageUrl, previousValue, name].map(el => {
    //
    // })


    return (
        <div>
            <div className="cards" data-aos={"fade-up"}
                 data-aos-duration="3000">
                <div className="card">
                    <div className="puzyr__1"/>
                    <div className="win">
                        <img className="img1" src={course.imageUrl} alt=""/>
                        <div className="shadow1"/>
                    </div>
                    <div className="puzyr__2"/>
                    <div className="title">
                        <h3>КУРС</h3>
                        <h1>{course.name}</h1>
                    </div>
                    <div className="card2">
                        <h1>{course.price} <span>сом/айына.</span></h1>
                        <h3>{course.previousValue} сом/айына.</h3>
                        <p>12 айга бөлүп төлөө планы</p>
                        <img src={Money} alt=""/>
                    </div>
                    <div className="puzyr__3"/>
                    <div className="buttons">
                        <ModalWindow/>
                        <ModalWindow2/>
                    </div>
                </div>


            </div>
        </div>
    )
}
export default Card