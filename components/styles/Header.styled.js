import styled from 'styled-components'

export const StyledHeader = styled.header`
    background-color: ${({ theme }) => theme.colors.header};
    margin: 0;
`

export const StyledH4 = styled.h4`
    margin-right: 10px;
`

export const NavHeaderMenu = styled.div`
    display: flex;
    margin-top: 14px;
`

export const Logo = styled.img`
    display: flex;
    align-items: flex-start;
    padding: 5px 10px 5px 5px;
    margin: 20px 40px 20px 80px;
`

export const NavBar = styled.nav`
    display: flex;
    padding: 5px 10px 5px 5px;
    margin: 0 20px;
`

export const Link = ({ className, children }) => (
    <a className={className}>
        {children}
    </a>
);

export const StyledLink = styled(Link)`
    color: #9e9aa7;
    cursor: pointer;
    margin-right: 30px;

    &:hover {
        color: #35323e;
    }
`