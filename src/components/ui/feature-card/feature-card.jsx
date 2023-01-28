import React from 'react';
import {StyledFeatureCard, StyledTitle, StyledImage } from './style';
import { TitleSize } from '../title/title';


function FeatureCard ({title, text, type, isBad, image}) {
    return (
        <StyledFeatureCard className={`feature-card${isBad ? ' feature-card--bad' : ''}`} isBad={isBad}>
            <StyledTitle className='feature-card__title' level={3} size={TitleSize.SMALL}>{title}</StyledTitle>
            <span className={`feature-card__type${isBad ? ' feature-card__type--bad' : ''}`} isBad={isBad}>{type}</span>
            <StyledImage
                className="feature-card__image"
                style={{backgroundImage: `url(${image})`}}
            />
            <p>{text}</p>
        </StyledFeatureCard>
        );
}

export default FeatureCard;