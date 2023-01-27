import styled from 'styled-components';

const Button = styled.button`
    margin: 0;
    font-family: ${(props) => props.theme.fontFamily};
    font-size: ${(props) => props.theme.fontSizeDefault};
    line-height: ${(props) => props.theme.fontLineHeghtDefault};
    font-style: normal;
    font-weight: 400;
    text-decoration: none;
    border: none;
    cursor: pointer;
    box-sizing: border-box;
`;

export default Button;