import { NavBar, StyledHeader, Logo, StyledLink, StyledH4, NavHeaderMenu } from "./styles/Header.styled";
import Link from 'next/link';

const Header = () => {
    return (
        <StyledHeader>
            <NavBar>
                <div className="logo">
                    <Link href="/">
                        <a><Logo src='../images/logo.svg' alt='' /></a>
                    </Link>
                </div>
                <NavHeaderMenu>
                    <StyledH4>
                        <StyledLink href="../pages/features">
                            Features
                        </StyledLink>
                    </StyledH4>
                    <StyledH4>
                        <StyledLink href="../pages/pricing">
                            Pricing
                        </StyledLink>
                    </StyledH4>
                    <StyledH4>
                        <StyledLink href="../pages/resources">
                            Resources
                        </StyledLink>
                    </StyledH4>
                </NavHeaderMenu>
            </NavBar>
        </StyledHeader>
    );
}

export default Header;