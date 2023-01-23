import React from 'react';
import './style.css'
// import heroImage from '../../../assets/hero.svg'
import {Title, TitleSize} from '../../ui/title/title';

function Hero ({hero}) {
    return (
        <section className='hero'>
            {Object.keys(hero).length > 0 ? (
            <>
            <div className="hero__wrapper">
                <div className="hero__container">
                    {hero.title ? (
                        <>
                            <Title size={TitleSize.BIG} className='hero__title'>{hero.title}</Title>
                        </>
                    ) : null}
                    {hero.text ? (
                        <>
                            <p className='hero__text'>{hero.text}</p>
                        </>
                    ) : null}
                </div>
                <img className='hero__image' src={hero.image} alt="Изображение счастливого фермера." />
            </div>
            </>
            ) : null}
        </section>
    );
}

export default Hero;