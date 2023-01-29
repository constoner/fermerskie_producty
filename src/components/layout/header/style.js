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
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04);

`;
