import styled from 'styled-components';
import { A } from '../../styled/';

const StyledLogo = styled(A)`
    & img {
        margin-right: 24px;
        vertical-align: middle;
    }

    & span {
        position: relative;
        vertical-align: middle;
        font-family: "Inter", "Arial", sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        line-height: 125%;
        color: #333333;

        &::after {
            position: absolute;
            left: 0;
            bottom: -5px;
            display: block;
            width: 100%;
            height: 3px;
            background-color: #333333;
            opacity: 0;
            content: "";
            transition: all 0.1s ease-out;
        }
    }

    &:hover span::after {
        opacity: 1;
    }
`;

export default StyledLogo;