import React from "react"

import { Link, animateScroll as scroll } from "react-scroll";

import './styles/header.css'

import Logo from '../assets/images/logo.png' 

const Header = () => {
    return (
        <div className="header">
            <div className="logo-box">
                <img src={Logo} alt="" />
            </div>
                <div className="menu-box">
                    <a href="" onClick={scroll.scrollToTop}>HOME</a>
                    <a href=""><Link
                        style={{paddingLeft: 0}}
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={700}
                    >SOBRE NÓS </Link></a>
                    <a href=""><Link
                    to="galery"
                    spy={true}
                    smooth={true}
                    duration={700}
                    offset={-160}
                    >GALERIA</Link></a>
                    <a href=""><Link
                     style={{paddingLeft: 0}}
                     to="contact"
                     spy={true}
                     smooth={true}
                     duration={700}
                     offset={-30}
                    >CONTATO</Link></a>
                </div>
            </div>
    )
}

export default Header
