import styled from 'styled-components';

export const StyledMain = styled.main`
    width: ${(props) => props.theme.pageWidth};
    margin: 0 auto;
    background-color: ${(props) => props.theme.colorBackgroundLite};
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 0px 100px 100px rgba(0, 0, 0, 0.08);
`;
