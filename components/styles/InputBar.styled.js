import styled from 'styled-components';

export const StyledSearchContainer = styled.div`
    display: block;
    position: sticky;
    margin-bottom: 80px;
    margin-top: 80px;
`

export const StyledInputbar = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`

export const StyledForm = styled.form`
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const StyledBackground = styled.img`
    width: 80%;
    height: 100px;
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
`

export const StyledInput = styled.input`
    width: 80%;
    height: 40px;
    border-radius: 5px;
    border: 0;
`