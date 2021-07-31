import React from 'react'
import AOS from 'aos';
import 'react-bootstrap'
import './css/catalog.css'
import Money from './img/money.png'
import Card1 from './img/card1.png'
import Card2 from './img/card2.png'
import Card3 from './img/card3.png'
import Card4 from './img/card4.png'
import Card6 from './img/card6.png'
import Card7 from './img/card7.png'
import Backend from "./img/back-end.svg"
import ModalWindow from "./Modal1";
import '../media.css'
import ModalWindow2 from "./Modal2";


const Catalog = () => {

    AOS.init({ duration : 2000});

    const countDownDate = new Date("Sep 1, 2021 15:37:25").getTime();
    let x = setInterval(function() {
    let demo = document.querySelector('.demo')
        // Get today's date and time
        let now = new Date().getTime();

        // Find the distance between now and the count down date
        let distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        demo.innerHTML = `${days} күн ${hours}:${minutes}:${seconds}`

        // If the count down is over, write some text
        if (distance < 0) {
            clearInterval(x);
            demo.innerHTML = "бүткөн";
        }
    }, 1000);

    return (
        <section id="catalog">
            <div className="container">
                <div className="sale2">
                    <div className="sale__line2"/>
                    <div className="sale__time">
                        <div className="time">
                            <div className="time__title">

                                <h2>Сатуунун аягына чейин</h2>
                                <h1 className="demo"/>
                            </div>
                            <div className="help">
                                <li>
                                    <a href="#">тандоого жардам берүү</a></li>
                            </div>
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
                        <div className="cards" data-aos={"fade-up"}
                             data-aos-duration="3000">
                            <div className="card">
                                <div className="puzyr__1"/>
                                <div className="win">
                                    <img className="img1" src={Card1} alt=""/>
                                    <div className="shadow1"/>
                                </div>
                                <div className="puzyr__2"/>
                                <div className="title">
                                    <h3>КУРС</h3>
                                    <h1>Веб Мастер</h1>
                                </div>
                                <div className="card2">
                                    <h1>12,000 <span>сом/айына.</span></h1>
                                    <h3>17,000 сом/айына.</h3>
                                    <p>12 айга бөлүп төлөө планы</p>
                                    <img src={Money} alt=""/>
                                </div>
                                <div className="puzyr__3"/>
                                <div className="buttons">
                                    <ModalWindow/>
                                    <ModalWindow2/>
                                </div>
                            </div>
                            <div className="card">
                                <div className="puzyr__1"/>
                                <div className="win">
                                    <img className="img6" src={Card6} alt=""/>
                                    <div className="shadow6"/>
                                </div>
                                <div className="puzyr__2"/>
                                <div className="title">
                                    <h3>КУРС</h3>
                                    <h1>JavaScript Full-Stack разработка</h1>
                                </div>
                                <div className="card2">
                                    <h1>12,000 <span>сом/айына.</span></h1>
                                    <h3>17,000 сом/айына.</h3>
                                    <p>12 айга бөлүп төлөө планы</p>
                                    <img src={Money} alt=""/>
                                </div>

                                <div className="buttons">
                                    <ModalWindow/>
                                    <ModalWindow2/>
                                </div>
                            </div>

                        </div>
                        <div className="cards" data-aos={"fade-up"}
                             data-aos-duration="3000">
                            <div className="card">
                                <div className="puzyr__1"/>
                                <div className="win">
                                    <img className="img3" src={Card3} alt=""/>
                                    <div className="shadow3"/>
                                </div>
                                <div className="puzyr__2"/>
                                <div className="title">
                                    <h3>КУРС</h3>
                                    <h1>Интернет-маркетолог</h1>
                                </div>
                                <div className="card2">
                                    <h1>12,000 <span>сом/айына.</span></h1>
                                    <h3>17,000 сом/айына.</h3>
                                    <p>12 айга бөлүп төлөө планы</p>
                                    <img src={Money} alt=""/>
                                </div>
                                <div className="puzyr__3"/>

                                <div className="buttons">
                                    <ModalWindow/>
                                    <ModalWindow2/>
                                </div>
                            </div>
                            <div className="card">
                                <div className="puzyr__1"/>
                                <div className="win">
                                    <img className="img4" src={Card4} alt=""/>
                                    <div className="shadow4"/>
                                </div>
                                <div className="puzyr__2"/>
                                <div className="title">
                                    <h3>КУРС</h3>
                                    <h1>Front-End разрботка</h1>
                                </div>
                                <div className="card2">
                                    <h1>12,000 <span>сом/айына.</span></h1>
                                    <h3>17,000 сом/айына.</h3>
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
                        <div className="cards" data-aos="fade-up"
                             data-aos-duration="3000">
                            <div className="card">
                                <div className="puzyr__1"/>
                                <div className="win">
                                    <img className="img5" src={Card4} alt=""/>
                                    <div className="shadow5"/>
                                </div>
                                <div className="puzyr__2"/>
                                <div className="title">
                                    <h3>КУРС</h3>
                                    <h1>MOTION <br/> DESIGN</h1>
                                </div>
                                <div className="card2">
                                    <h1>12,000 <span>сом/айына.</span></h1>
                                    <h3>17,000 сом/айына.</h3>
                                    <p>12 айга бөлүп төлөө планы</p>
                                    <img src={Money} alt=""/>
                                </div>

                                <div className="puzyr__3"/>
                                <div className="buttons">
                                    <ModalWindow/>
                                    <ModalWindow2/>
                                </div>

                            </div>
                            <div className="card">
                                <div className="puzyr__1"/>
                                <div className="win">
                                    <img className="img2" src={Card2} alt=""/>
                                    <div className="shadow2"/>
                                </div>
                                <div className="puzyr__2"/>
                                <div className="title">
                                    <h3>КУРС</h3>
                                    <h1>Android-разработка</h1>
                                </div>
                                <div className="card2">
                                    <h1>12,000 <span>сом/айына.</span></h1>
                                    <h3>17,000 сом/айына.</h3>
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
                        <div className="cards" data-aos="fade-up"
                             data-aos-duration="3000">
                            <div className="card">
                                <div className="puzyr__1"/>
                                <div className="win">
                                    <img className="img7" src={Card7} alt=""/>
                                    <div className="shadow7"/>
                                </div>
                                <div className="puzyr__2"/>
                                <div className="title">
                                    <h3>КУРС</h3>
                                    <h1>UX/UI-дизайнер с нуля до PRO</h1>
                                </div>
                                <div className="card2">
                                    <h1>12,000 <span>сом/айына.</span></h1>
                                    <h3>17,000 сом/айына.</h3>
                                    <p>12 айга бөлүп төлөө планы</p>
                                    <img src={Money} alt=""/>
                                </div>
                                <div className="puzyr__3"/>
                                <div className="buttons">
                                    <ModalWindow/>
                                    <ModalWindow2/>
                                </div>
                            </div>
                            <div className="card">
                                <div className="puzyr__1"/>
                                <div className="win">
                                    <img className="img8" src={Backend} alt=""/>
                                    <div className="shadow8"/>
                                </div>
                                <div className="puzyr__2"/>
                                <div className="title">
                                    <h3>КУРС</h3>
                                    <h1>Backend-разработка</h1>
                                </div>
                                <div className="card2">
                                    <h1>12,000 <span>сом/айына.</span></h1>
                                    <h3>17,000 сом/айына.</h3>
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
                </div>
            </div>
        </section>
    )
}

export default Catalog
