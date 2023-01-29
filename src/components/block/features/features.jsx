import React from 'react';
import { StyledFeatures, StyledFeaturesList, StyledItem } from './style';
import { Title, TitleSize } from '../../ui/title/title';
import Button from '../../ui/button/button';
import FeatureCard from '../../ui/feature-card/feature-card';

function Features ({featuresList}) {
    return (
        <>
            {featuresList?.length ? (
                <StyledFeatures className='features'>
                    <Title className='features__title' level={2} size={TitleSize.MEDIUM}>Почему фермерские продукты лучше?</Title>
                        <StyledFeaturesList className="features__list">
                            {featuresList.map((feature) =>  (
                                <StyledItem className='feature__item' key={feature.id} tag={feature.isBad}>
                                    <FeatureCard {...feature} />    
                                </StyledItem>
                                )
                            )}
                        </StyledFeaturesList>
                    <Button className='features__button' minWidth={260} link='/order.html'>Купить</Button>
                </StyledFeatures>
            ) : null}
        </>
    );
}

export default Features;