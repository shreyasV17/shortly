import { StyledBanner, StyledImage, StyledTitle } from './styles/Banner.styled';

const Banner = () => {
    return (
        <StyledBanner>
            <StyledTitle>MORE THAN JUST SHORTER LINKS</StyledTitle>
            <StyledImage src='../images/people working.svg' alt='' />
        </StyledBanner>
    );
}

export default Banner;