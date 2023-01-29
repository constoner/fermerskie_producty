import styled from 'styled-components';
import { Ul } from '../../styled';

const StyledFeatures = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px ${(props) => props.theme.pagePadding};    
`;

const StyledWrapper = styled.div`
    display: flex;
    margin: 64px 0;
`;

const StyledFeaturesList = styled(Ul)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: column;
    gap: ${(props) => props.theme.indent};
    margin: 64px 0;
`;

const StyledItem = styled.li`
        min-height: 197px;
        grid-column: ${props => props.tag ? '2/3' : '1/2'};
`;

export { StyledFeatures, StyledWrapper,  StyledFeaturesList, StyledItem };
