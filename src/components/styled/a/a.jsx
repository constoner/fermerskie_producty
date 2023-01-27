import styled from 'styled-components';

const A = styled.a`
    margin: 0;
    font-family: ${(props) => props.theme.fontFamily};
    font-size: ${(props) => props.theme.fontSizeDefault};
    line-height: ${(props) => props.theme.fontLineHeghtDefault};
    font-style: normal;
    font-weight: 400;
    color: ${(props) => props.theme.colorBlackText};
    text-decoration: none;
    cursor: pointer;
`;

export default A;