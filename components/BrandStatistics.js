import { StyledBrandStatistics, StyledBar, StyledText } from './styles/BrandStatistics.styled';
import BrandContainer from './BrandContainer';

const BrandStatistics = () => {
    return (
        <div>
            <StyledText>
                <h1>Advanced Statistic</h1>
                <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </StyledText>
            <StyledBrandStatistics>
                <StyledBar />
                <BrandContainer />
                <BrandContainer />
                <BrandContainer />
            </StyledBrandStatistics>
        </div>
    );
};

export default BrandStatistics;
