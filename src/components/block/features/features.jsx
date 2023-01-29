import React from 'react';
import { StyledFeatures, StyledWrapper, StyledFeaturesList } from './style';
import { Title, TitleSize } from '../../ui/title/title';
import Button from '../../ui/button/button';
import FeatureCard from '../../ui/feature-card/feature-card';

function selectFeatureByType (features = [], parameter, value = false) {
    return features.map((item) => {
        return (
            item[parameter] === value ? (
                <li className="features__item" key={item.id}>
                    <FeatureCard {...item} />
                </li>
            ) : null
        );   
    });
}        


function Features ({featuresList}) {
    return (
        <>
            {featuresList?.length ? (
                <StyledFeatures className='features'>
                    <Title className='features__title' level={2} size={TitleSize.MEDIUM}>Почему фермерские продукты лучше?</Title>
                    <StyledWrapper className="features__wrapper">
                        <StyledFeaturesList className="features__list features__list--bad">
                            {selectFeatureByType(featuresList, 'isBad', false)}
                        </StyledFeaturesList>
                        <StyledFeaturesList className="features__list features__list--bad">
                            {selectFeatureByType(featuresList, 'isBad', true)}
                        </StyledFeaturesList>
                    </StyledWrapper>
                    <Button className='features__button' minWidth={260} link='/order.html'>Купить</Button>
                </StyledFeatures>
            ) : null}
        </>
    );
}

export default Features;