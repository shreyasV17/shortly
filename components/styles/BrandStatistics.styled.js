import styled from 'styled-components';

export const StyledText = styled.span`
    display: table;
    width: 480px;
    height: 100%;
    margin: 0 auto;
    text-align: center;

    h1 {
        color: #3b3054;
    }

    p {
        color: #9e9aa7;
    }
`

export const StyledBrandStatistics = styled.div`
    display: flex;
    flex-direction: row;
    margin: 100px 30px;
    justify-content: space-between;
    position: relative;
`

export const StyledBar = styled.div`
    position: absolute;
    top: 50%;
    left: 0%;
    width: 100%;
    height: 15px;
    background-color: #2acfcf;
`