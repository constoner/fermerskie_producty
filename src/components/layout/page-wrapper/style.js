import styled from 'styled-components';

export const StyledMain = styled.main`
    width: ${(props) => props.theme.pageWidth};
    margin: 0 auto;
    background-color: ${(props) => props.theme.colorBackgroundLite};
    box-shadow: 0px 0px 50px 80px rgba(0, 0, 0, 0.04);
`;
