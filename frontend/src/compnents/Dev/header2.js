import React from "react";
import './css/style.css'
import Img_1 from "./img/img_1.png"

const Header2 = () => {
    return (
        <header id="header">
            <div className="row">
                <nav className="nav-bar">
                    <div className="header__img">
                        <a href="/">
                            <img src={Img_1} className="nav__img" alt=""/>
                        </a>
                    </div>
                </nav>
                <nav className="nav">
                    <div className="roww">
                        <a className="header__title__it2" href="#">Главная </a>
                        <a className="header__title__it"
                           href="http://localhost:63342/choose/index_y.html?_ijt=bqmghi4t7srch0lm38lmt0g0vu">Разработка\Сайта</a>
                        <a className="header__title__it"
                           href="http://localhost:63342/choose/index_us.html?_ijt=e64ctr1alube54v59mmaicjrs9">Услуги</a>
                        <a className="header__title__it"
                           href="http://localhost:63342/choose/index_port.html?_ijt=5linosglllaljqshbu6n583fi9">Портфолио</a>
                        <a className="header__title__it"
                           href="http://localhost:63342/choose/index_baza.html?_ijt=5linosglllaljqshbu6n583fi9">База\Знаний</a>
                        <a className="header__title__it"
                           href="http://localhost:63342/choose/index_ak.html?_ijt=e64ctr1alube54v59mmaicjrs9">Акции</a>
                    </div>
                    <div className="btn">
                        <button className="modal-btn">
                            Заказать звонок
                        </button>
                        {/*<div className="modal_block">*/}
                        {/*    <div className="aman">*/}
                        {/*        <div className="block__box">*/}
                        {/*            <span className="close-btn">x</span>*/}
                        {/*            <div className="box__input">*/}
                        {/*                <label>*/}
                        {/*                    <input type="text" placeholder="Ваше имя"/>*/}
                        {/*                </label>*/}
                        {/*                <label>*/}
                        {/*                    <input type="text" placeholder="Город"/>*/}
                        {/*                </label>*/}

                        {/*            </div>*/}
                        {/*            <div className="box__input">*/}
                        {/*                <label>*/}
                        {/*                    <input type="number" placeholder="Телефон"/>*/}
                        {/*                </label>*/}
                        {/*                <label>*/}
                        {/*                    <input type="email" placeholder="Email"/>*/}
                        {/*                </label>*/}
                        {/*            </div>*/}
                        {/*            <label>*/}
                        {/*                <input className="input__box" type="text" placeholder="Ваш вопрос"/>*/}
                        {/*            </label>*/}
                        {/*            <button type="button" className="input__btn">*/}
                        {/*                Отправить*/}
                        {/*            </button>*/}
                        {/*            <p className="studio__desc1">Нажимая на кнопку «Отправить», я даю согласие на*/}
                        {/*                обработку*/}
                        {/*                персональных*/}
                        {/*                данных и соглашаюсь с политикой конфиденциальности</p>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </nav>
            </div>
        </header>


    )
}
export default Header2