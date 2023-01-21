import React from 'react';
import './style.css'
import hero from '../../../assets/hero.svg'

function Hero ({hero}) {
    return (
        <section className='hero'>
            <div className="hero__wrapper">
                <h1 className='hero__title'>{hero.title}</h1>
                <p className='hero__text'>{hero.text}</p>
            </div>
            <img className='hero__image' src={hero} alt="Изображение счастливого фермера." />
        </section>
    );
}

export default Hero;