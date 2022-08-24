import React from "react"

import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api';

import './styles/footer.css'

import Location from '../assets/images/location.svg'
import Facebook from '../assets/images/facebook.svg'
import Instagram from '../assets/images/instagram.svg'
import Phone from '../assets/images/phone.svg'
import Whatsapp from '../assets/images/whatsapp.svg'

const Footer = () => {

    const { isLoaded } = useLoadScript({ 
        googleMapsApiKey: "AIzaSyDmcIwCU0k1s7HI62q88BTIXsGAs0i52rY",
    })

    const center = {lat: -16.014494428276677, lng: -48.05840662601997} 

    function Map() {
        return <GoogleMap 
        zoom={19} 
        center={center} 
        mapContainerClassName="footer-blocks-google-maps"
        >
            <MarkerF position={center}/>
        </GoogleMap>
    }

    if(!isLoaded) return (<div></div>)
    return (
        <div className="footer" id="contact">
            <div className="footer-header">
                <h2>Vamos começar o projeto dos seus sonhos!</h2>
            </div>
            <div className="footer-blocks">
                    <Map/>
                <div className="footer-blocks-infos">
                    <div className="footer-blocks-infos-header">
                        <p>Faça-nos uma visita</p>
                        <h2>VAMOS TRANSFORMAR SEUS SONHOS EM
                            REALIDADE
                        </h2>
                    </div>
                    <div className="footer-blocks-infos-main-location">
                        <div className="footer-blocks-infos-main-location-image">
                            <img src={Location} alt="" />
                        </div>
                        <div className="footer-blocks-infos-main-location-image-text">
                            <span>QI Lote 2 180 Setor de Industrias, Gama, Distrito Federal</span>
                        </div>
                    </div>
                    <div className="footer-blocks-infos-main-double">
                        <div className="footer-blocks-infos-main-double-container-first">
                            <div className="footer-blocks-infos-main-double-image">
                                <img src={Phone} alt="" />
                            </div>
                            <div className="footer-blocks-infos-main-double-image-text">
                                <span>(61) 3484-4728</span>
                            </div>
                        </div>
                        <div className="footer-blocks-infos-main-double-container-second">
                            <div className="footer-blocks-infos-main-double-image">
                                <img src={Whatsapp} alt="" />
                            </div>
                            <div className="footer-blocks-infos-main-double-image-text">
                                <span>(61) 98256-5810</span>
                            </div>
                        </div>
                    </div>
                    <div className="footer-blocks-infos-social-medias">
                        <a href="https://www.facebook.com/mar.pontocerto/" target="_blank" rel="noopener noreferrer">
                            <div className="footer-blocks-infos-social-medias-facebook">
                                <img src={Facebook} alt="" />
                            </div>
                        </a>
                        <a href="https://www.instagram.com/mar.pontocerto/" target="_blank" rel="noopener noreferrer">
                            <div className="footer-blocks-infos-social-medias-instagram">
                                <img src={Instagram} alt="" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer