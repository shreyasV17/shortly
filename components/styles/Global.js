import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.google.com/specimen/Poppins:wght@500;700&display=swap');

    * {
        font-family: 'Poppins', sans-serif;
        cursor: pointer;
    }

    body {
        margin: 0;
        background-color: #bfbfbf;
    }
`

export default GlobalStyles;