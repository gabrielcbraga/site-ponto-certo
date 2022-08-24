import React from "react"

import './styles/copyright.css'

import Facebook from '../assets/images/facebook.svg'
import Instagram from '../assets/images/instagram.svg'
import Whatsapp from '../assets/images/whatsapp.svg'

const Copyright = () => {

    const buttonTeste = (e) => {
        e.stopPropagation()
        e.nativeEvent.stopImmediatePropagation()
    }

    return (
        <div className="copyright">
            <div className="copyright-text">
                <h2>Todos os direitos reservados à Marmoraria Ponto Certo ©</h2>
            </div>
            <div className="copyright-social-media">
                <a href="https://api.whatsapp.com/send?phone=5561982565810&text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20queria%20fazer%20um%20or%C3%A7amento%20com%20voc%C3%AAs!" target="_blank" rel="noopener noreferrer">
                    <div className="copyright-social-media-whatsapp">
                        <img src={Whatsapp} alt="Ícone Whatsapp" />
                    </div>
                </a>
                <a href="https://www.instagram.com/mar.pontocerto/" target="_blank" rel="noopener noreferrer">
                    <div className="copyright-social-media-instagram">
                        <img src={Instagram} alt="Ícone Instagram" />
                    </div>
                </a>
                <a href="https://www.facebook.com/mar.pontocerto/" target="_blank" rel="noopener noreferrer">
                    <div className="copyright-social-media-facebook">
                        <img src={Facebook} alt="Ícone Facebook" />
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Copyright