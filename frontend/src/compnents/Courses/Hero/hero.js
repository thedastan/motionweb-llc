import React from 'react'
import './hero.css'
import HeroImg from './img/Group 2.png'


const Hero = () => {
    return (
        <div id="hero">
            <div className="container">
                <div className="hero">
                    <div className="hero__title">
                        <h3 className="hero--title">4 күн бекер окуп  <br/> өзүңдү сынап көр</h3>
                        <p className="hero-description">Максаттарыңызга толук ылайык келген <br/> жолду тандаңыз.</p>

                    </div>
                    <img src={HeroImg} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Hero
