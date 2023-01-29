import React from 'react';
import { StyledHero, StyledWrapper, StyledContainer, HeroImage } from './style';
import {Title, TitleSize} from '../../ui/title/title';

function Hero ({hero}) {
    return (
        <StyledHero className='hero'>
            {Object.keys(hero).length > 0 ? (
                <>
                    <StyledWrapper className="hero__wrapper">
                        <StyledContainer className="hero__container">
                            {hero.title ? (
                                    <Title
                                        className='hero__title'
                                        level={1}
                                        size={TitleSize.BIG}
                                        >
                                            {hero.title}
                                    </Title>
                            ) : (
                                <Title
                                className='hero__title'
                                level={1}
                                size={TitleSize.BIG}
                            >
                                Магазин фермерских продуктов
                            </Title>
                            )}
                            {hero.text ? (
                                    <p className='hero__text'>{hero.text}</p>
                            ) : null}
                        </StyledContainer>
                        {hero.image ? (
                            <>
                                <HeroImage className='hero__image' src={hero.image} alt="Изображение счастливого фермера." />
                            </>
                        ) : null}
                    </StyledWrapper>
                </>
            ) : (
                <Title
                    className='hero__title'
                    level={1}
                    size={TitleSize.BIG}
                >
                    Магазин фермерских продуктов
                </Title>
            )}
        </StyledHero>
    );
}

export default Hero;