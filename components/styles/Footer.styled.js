import styled from 'styled-components';

export const StyledFooter = styled.footer`
    display: flex;
    background-color: ${({ theme }) => theme.colors.footer};
    padding: 20px 0;
    margin: 0;
    justify-content: 'flex-end';
`