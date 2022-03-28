import styled from 'styled-components';

export const Button = styled.button`
    border-radius: 5px;
    border: none;
    padding 10px 30px;
    background-color: #2acfcf;
    color: #ffffff;

    &:hover {
        opacity: 0.9;
    }
`

export const GetButton = styled(Button)`
    border-radius: 25px;
`