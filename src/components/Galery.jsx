import React, { useState } from "react"

import './styles/galery.css'

const Galery = ({slides}) => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const slideStyles = {
        width: '100%',
        height: '100%',
        borderRadius: '5px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${slides[currentIndex].url})`
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const goToSlide = slideIndex => {
        setCurrentIndex(slideIndex)
    }

    return (
        <div className="galery" id="galery">
            <div className="arrow-left" onClick={goToPrevious}>◀</div>
            <div className="arrow-right" onClick={goToNext}>▶</div>
            <div style={slideStyles}></div>
            <div className="unitary-selector-bottom">
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} className="selector-unitary" onClick={() => goToSlide(slideIndex)}>――</div>
                ))}
            </div>
        </div>
    )
}

export default Galery