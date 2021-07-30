import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from './img/logo motion web.png'
import Nasa from './img/Subtract.png'
import Bg from './img/bg-nasa.png'
import Sale from './img/%.svg'
import 'bootstrap'
import Pauk from './img/Group 3.png'
import '../Main/main.css'
import { slide as Menu } from 'react-burger-menu'

const Main = () => {
    // const countDownDate = new Date("Sep 1, 2021 15:37:25").getTime();
    // let x = setInterval(function() {
    // let demo = document.querySelector('.demo')
    //     // Get today's date and time
    //     let now = new Date().getTime();
    //
    //     // Find the distance between now and the count down date
    //     let distance = countDownDate - now;
    //
    //     // Time calculations for days, hours, minutes and seconds
    //     let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    //     let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //     let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //     let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    //
    //     // Output the result in an element with id="demo"
    //     demo.innerHTML = `${days} дней ${hours}:${minutes}:${seconds}`
    //
    //     // If the count down is over, write some text
    //     if (distance < 0) {
    //         clearInterval(x);
    //         demo.innerHTML = "ИСТЕКШИЙ";
    //     }
    // }, 1000);

    return (
        <header className="header">
            <div className="container">
                <div className="menu">
                    <a href="/" className="logo-block">
                        <img className="logo" src={Logo} alt=""/>
                        <h3 className="logo1">MOTION WEB </h3>
                    </a>
                    <nav className="nav-menu1">
                        <Link className="nav-item">Главная</Link>
                        <Link className="nav-item">О нас</Link>
                        <NavLink to="/courses" className="nav-item">Наши курсы</NavLink>
                        <NavLink to="/dev" className="nav-item">Наши услуги</NavLink>
                    </nav>
                    <div className="burger-menu">
                        <Menu right  >
                            <NavLink to="/" className="nav-item">Главная</NavLink>
                            <NavLink to="/about" className="nav-item">О нас</NavLink>
                            <NavLink to="/courses" className="nav-item">Наши курсы</NavLink>
                            <NavLink to="/dev" className="nav-item">Наши услуги</NavLink>
                        </Menu>
                    </div>
                </div>
                <section className="hero">
                    <div className="row">
                        <img src={Pauk} className="img__1" alt=""/>
                        <div className="col-lg-6 col-sm12">
                            <h1 className="main--title">MOTION WE<span className="bev">B</span> <br/>
                                IT СТУДИЯ</h1>
                            <p className="main-desc">
                                С нами строй
                            </p>
                            <p className="aman1">будущее</p>
                            <p className="aman2">будущее</p>
                        </div>
                        <div className="col-lg-6 col-sm12 box-2">
                            <img className="nasa" src={Nasa} alt=""/>
                            <img className="bg-nasa" src={Bg} alt=""/>
                        </div>

                    </div>
                </section>

                <div className="woow">
                    <h1 className="woow-present">
                        wooow!
                    </h1>
                    <img src={Sale} alt=""/>

                    <svg className="sale" width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31.2434 1.41903C31.9114 0.664746 33.0886 0.664745 33.7566 1.41903L36.6506 4.6871C37.1598 5.26214 37.9943 5.41815 38.6769 5.06589L42.556 3.06392C43.4513 2.60186 44.5491 3.02715 44.8995 3.97179L46.4175 8.0646C46.6846 8.78475 47.4064 9.23172 48.1701 9.14981L52.5105 8.68433C53.5123 8.57689 54.3823 9.37003 54.3677 10.3774L54.3047 14.7422C54.2936 15.5102 54.8053 16.1878 55.547 16.3873L59.7624 17.5212C60.7354 17.7829 61.2601 18.8367 60.8827 19.7709L59.2471 23.8181C58.9594 24.5303 59.1917 25.3469 59.8113 25.8009L63.3324 28.381C64.1451 28.9765 64.2538 30.1488 63.5643 30.8834L60.5772 34.0666C60.0516 34.6267 59.9733 35.4721 60.387 36.1193L62.7384 39.7971C63.2811 40.646 62.9589 41.7783 62.0506 42.2143L58.1153 44.1035C57.4229 44.4359 57.0444 45.1959 57.1964 45.9488L58.0604 50.2277C58.2598 51.2153 57.5503 52.1548 56.5459 52.2332L52.1939 52.5732C51.4281 52.633 50.8007 53.205 50.6705 53.962L49.9304 58.2641C49.7596 59.257 48.7586 59.8768 47.7937 59.5871L43.6127 58.332C42.8771 58.1111 42.0854 58.4179 41.6905 59.0767L39.4463 62.8209C38.9283 63.685 37.7711 63.9014 36.9759 63.2827L33.5307 60.602C32.9245 60.1303 32.0755 60.1303 31.4693 60.602L28.0241 63.2827C27.2289 63.9014 26.0717 63.685 25.5537 62.8209L23.3095 59.0767C22.9146 58.4179 22.1229 58.1111 21.3873 58.332L17.2063 59.5871C16.2414 59.8768 15.2404 59.257 15.0696 58.2641L14.3295 53.962C14.1993 53.205 13.5719 52.633 12.8061 52.5732L8.45411 52.2332C7.44966 52.1548 6.74018 51.2153 6.93959 50.2277L7.80356 45.9488C7.95558 45.1959 7.57713 44.4359 6.88469 44.1035L2.9494 42.2143C2.04113 41.7783 1.71894 40.646 2.26164 39.7971L4.61299 36.1193C5.02672 35.4721 4.94838 34.6267 4.42278 34.0666L1.43567 30.8834C0.746234 30.1488 0.854861 28.9765 1.66755 28.381L5.18871 25.8009C5.80828 25.3469 6.04063 24.5303 5.75285 23.8181L4.11734 19.7709C3.73986 18.8367 4.26463 17.7829 5.23756 17.5212L9.45298 16.3873C10.1947 16.1878 10.7064 15.5102 10.6953 14.7422L10.6323 10.3774C10.6177 9.37003 11.4877 8.57689 12.4895 8.68433L16.8299 9.14981C17.5936 9.23172 18.3154 8.78475 18.5825 8.0646L20.1005 3.97179C20.4509 3.02715 21.5487 2.60186 22.444 3.06392L26.3231 5.06589C27.0057 5.41815 27.8402 5.26214 28.3494 4.6871L31.2434 1.41903Z" fill="#FA001D"/>
                        <path d="M27.2127 32.0002C26.0227 31.6813 25.1567 31.0186 24.6147 30.012C24.0924 28.9941 24.0134 27.8052 24.3778 26.4452C24.7422 25.0851 25.403 24.1027 26.3602 23.4978C27.337 22.8816 28.4204 22.733 29.6104 23.0518C30.8004 23.3707 31.6566 24.0391 32.1789 25.0569C32.7054 26.0594 32.7865 27.2406 32.4221 28.6006C32.0576 29.9606 31.3948 30.9508 30.4335 31.5711C29.4763 32.176 28.4027 32.319 27.2127 32.0002ZM39.2277 25.8275L41.9864 26.5667L26.5571 39.8251L23.7984 39.0859L39.2277 25.8275ZM27.722 30.0992C28.2475 30.24 28.715 30.1334 29.1246 29.7793C29.5497 29.4294 29.8761 28.8295 30.1038 27.9794C30.3316 27.1294 30.3489 26.4466 30.1558 25.9311C29.9781 25.4197 29.6265 25.0936 29.101 24.9528C28.591 24.8161 28.1214 24.9305 27.6922 25.2958C27.2672 25.6457 26.9428 26.238 26.7192 27.0725C26.4956 27.9071 26.4783 28.5899 26.6673 29.1209C26.8604 29.6365 27.212 29.9626 27.722 30.0992ZM36.1744 42.6008C35.4016 42.3938 34.7538 42.0297 34.2309 41.5086C33.7275 40.9762 33.3969 40.3244 33.2391 39.5533C33.0813 38.7822 33.1225 37.9484 33.3627 37.052C33.6029 36.1557 33.9841 35.413 34.5063 34.8241C35.0285 34.2352 35.6386 33.8438 36.3366 33.6498C37.0542 33.4445 37.7993 33.4454 38.5721 33.6525C39.7621 33.9714 40.6183 34.6397 41.1406 35.6576C41.6826 36.6642 41.7714 37.8475 41.4069 39.2075C41.0425 40.5675 40.3719 41.5556 39.3952 42.1718C38.438 42.7767 37.3644 42.9197 36.1744 42.6008ZM36.6837 40.6999C37.2092 40.8407 37.6767 40.7341 38.0863 40.38C38.5155 40.0146 38.8419 39.4147 39.0655 38.5801C39.2892 37.7456 39.3044 37.0705 39.1113 36.5549C38.9377 36.0281 38.5882 35.6942 38.0627 35.5534C37.5527 35.4168 37.0852 35.5234 36.6601 35.8733C36.2351 36.2232 35.9087 36.8232 35.6809 37.6732C35.4532 38.5232 35.4359 39.206 35.629 39.7216C35.8222 40.2371 36.1737 40.5632 36.6837 40.6999Z" fill="white"/>
                    </svg>
                    <div className="row">
                        <div className="col-lg-6">
                            <h3 className="woow-title">На все курсы на этой неделе 30%</h3>
                        </div>
                        <div className="col-lg-6">
                            <div className="woow-block">
                                <h4 className="woow-text">До конца распродажи:</h4>
                                <h3 className="demo"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Main