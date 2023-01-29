import styled from 'styled-components';

const StyledHero = styled.section`
    padding: 0 ${(props) => props.theme.pagePadding};
    background: ${(props) => props.theme.colorBackgroundAccent};

    & p {
        margin: 0;
        margin-top: 24px;
    }
`;

const StyledWrapper = styled.div`
    position: relative;
    min-height: 600px;
    display: grid;
    grid-template-columns: 1fr 1fr;

    &::after {
        position: absolute;
        right: 0;
        top: 50%;
        display: block;
        width: 446px;
        height: 446px;
        background-color: ${(props) =>  props.theme.colorBackgroundAccentDark};
        border-radius: 50%;
        content: "";
        transform: translateY(-50%);
    }
`;

const StyledContainer = styled.div`
    position: relative;
    z-index: 1;
    align-self: center;
`;

const HeroImage = styled.img`
    position: relative;
    top: 100%;
    z-index: 2;
    left: calc(100% - 87px);
    transform: translate(-100%, -100%);
`;

export { StyledHero, StyledWrapper, StyledContainer, HeroImage };
