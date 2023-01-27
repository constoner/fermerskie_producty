import styled, { css } from 'styled-components';

const text = css`
    margin: 0;
    padding: 0;
    font-family: ${(props) => props.theme.fontFamily};
    font-size: ${(props) => props.theme.fontSizeDefault};
    line-height: ${(props) => props.theme.fontLineHeghtDefault};
    font-style: normal;
    font-weight: 400;
    color: ${(props) => props.theme.colorBlackText};
`;

const P = styled.p`${text}`;
const Span = styled.span`${text}`;

export {P, Span};