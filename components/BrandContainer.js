import { StyledBrandContainer, StyledIconContainer } from './styles/BrandContainer.styled';
import BrandRecognition from './BrandRecognition';
import BrandIcon from "./BrandIcon";

const BrandContainer = () => {
    return (
        <StyledBrandContainer>
            <StyledIconContainer>
                <BrandIcon />
            </StyledIconContainer>
            <BrandRecognition />
        </StyledBrandContainer>
    );
};

export default BrandContainer;