import styled from 'styled-components';

export const StyledFooter = styled.footer`
    display: flex;
    background-color: ${({ theme }) => theme.colors.footer};
    padding: 20px 0;
    margin: 0;
    justify-content: 'flex-end';
`

export const Logo = styled.img`
    display: flex;
    align-items: flex-start;
    padding: 5px 10px 5px 5px;
    margin: 20px 40px 20px 80px;
    color: #fff;
`