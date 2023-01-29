import styled from 'styled-components';

export const StyledMain = styled.main`
    width: ${(props) => props.theme.pageWidth};
    margin: 0 auto;
    background-color: ${(props) => props.theme.colorBackgroundLite};
    box-shadow: -5px 0px 20px rgba(0, 0, 0, 0.04), 5px 0px 20px rgba(0, 0, 0, 0.04); 

`;
