import React from "react"

import './styles/about.css'

import aboutImage from '../assets/images/about-image.jpeg' 

const About = () => {

    const buttonTeste = (e) => {
        e.stopPropagation()
        e.nativeEvent.stopImmediatePropagation()
    }

    return (
        <div className="about" id="about">
            <div className="about-image">
                <img src={aboutImage}/>
            </div>
            <div className="about-text">
                <div className="about-text-header">
                    <p>Conheça nosso padrão</p>
                    <h2>Qualidade e pontualidade</h2>
                </div>
                <div className="about-text-divider">..........</div>
                <div className="about-text-paragraph">
                    <p>A Marmoraria Ponto Certo é referência 
                        quando se trata de mármores, granitos e sintéticos; 
                        com mais de 20 anos de experiência, 
                        é uma das mais renomadas marmorarias de Brasília.</p>
                    <p>A experiência combinada coma a expertise na área gera 
                        uma combinação de qualidade, pontualidade e preço justo.</p>    
                </div>
                <a href="https://api.whatsapp.com/send?phone=5561982565810&text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20queria%20fazer%20um%20or%C3%A7amento%20com%20voc%C3%AAs!" target="_blank" rel="noopener noreferrer"
                 className="about-button" onClick={buttonTeste}>Faça seu orçamento</a>
            </div>
        </div>
    )
}

export default About