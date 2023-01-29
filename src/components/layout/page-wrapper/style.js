import styled from 'styled-components';

export const StyledMain = styled.main`
    width: ${(props) => props.theme.pageWidth};
    margin: 0 auto;
    background-color: ${(props) => props.theme.colorBackgroundLite};
`;
