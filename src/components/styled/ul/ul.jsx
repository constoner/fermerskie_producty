import styled, { css } from 'styled-components';

const cardList = css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${(props) => props.theme.indent};
`;

const Ul = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    ${(props) => props.isCardList ? cardList : ''};
`;

export default Ul;
