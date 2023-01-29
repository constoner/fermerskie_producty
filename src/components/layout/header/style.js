import styled from 'styled-components';

export const StyledHeader = styled.header`
    position: sticky;
    top: 0;
    z-index: 5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    width: ${(props) => props.theme.pageWidth};
    min-height: ${(props) => props.theme.minHeightHeaderFooter};
    margin: 0 auto;
    padding: 10px ${(props) => props.theme.pagePadding};
    background-color: ${(props) => props.theme.colorBackgroundLite};
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: -5px 0px 20px rgba(0, 0, 0, 0.04), 5px 0px 20px rgba(0, 0, 0, 0.04); 

`;
