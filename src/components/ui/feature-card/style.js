import styled from 'styled-components';
import { Title } from '../title/title';

const StyledImage = styled.div`
    width: 56px;
    height: 56px;
    grid-row: 1/3;
    grid-column: 1/2;
    margin-right: ${(props) => props.theme.indent};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

const StyledFeatureCard = styled.article`
    display: grid;
    grid-template-columns: 0.125fr 1fr;
    grid-template-rows: min-content min-content min-content;
    height: 100%;
    padding: ${(props) => props.theme.indent};
    box-sizing: border-box;
    background-color: ${(props) => {
        return props.isBad ? props.theme.colorCardBadBackground : props.theme.colorCardGoodBackground
    }};

    & span {
        display: block;
        width: fit-content;
        margin-bottom: 4px;
        padding: 2px 10px;
        grid-column: 2/3;
        font-family: ${(props) => props.theme.fontFamily};
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
        color: ${(props) => props.theme.colorAccentText};
        background-color: ${(props) => {
        return props.isBad ? props.theme.colorCardBadTag : props.theme.colorCardGoodTag
    }};    }

    & p {
        grid-column: 1/3;
        grid-row: 3/4;
        margin: 0;
        margin-top: ${(props) => props.theme.indent};
    }
`;

const StyledTitle = styled(Title)`
    grid-column: 2/3;
    grid-row: 2/3;
    margin: 0;
`;

export {StyledFeatureCard, StyledTitle, StyledImage};
