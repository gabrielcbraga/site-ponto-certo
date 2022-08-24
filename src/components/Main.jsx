import React from "react"

import './styles/main.css'

import bgImage from '../assets/images/main-bg.jpeg' 

const Main = () => {

    const buttonTeste = (e) => {
        e.stopPropagation()
        e.nativeEvent.stopImmediatePropagation()
    }

    return (
        <div className="main">
            <div className="main-bg-image">
                <img src={bgImage}/>
            </div>
            <div className="main-text">
                <h2>Mármores - Granitos -
                    Silestone - Limestone - 
                    Compactstone - Quartzo
                </h2>
            </div>
            <a href="https://api.whatsapp.com/send?phone=5561982565810&text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20queria%20fazer%20um%20or%C3%A7amento%20com%20voc%C3%AAs!" target="_blank" rel="noopener noreferrer"
             className="main-button" onClick={buttonTeste}>Faça seu orçamento</a>
        </div>
    )
}

export default Main