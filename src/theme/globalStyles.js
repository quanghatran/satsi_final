import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html{
        font-family: 'Roboto', sans-serif;
        font-size: 10px;
    }
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
`

export default GlobalStyle;