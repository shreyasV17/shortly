import styled from "styled-components";

export const StyledBrandIcon = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 100%;
    position: relative;
    background-color: ${({ theme }) => theme.colors.darkViolet};
`

export const Icon = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`