import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    :root {
            --background: #141a1b;
    
            --green_900: #07303B;
            --green_800: #027558;
            --green_700: #20925d;
            --green_500: #0FE983;
            --green_300: #00FF88;

            --yellow_700: #8A6A03;
            --yellow_500: #B08C18;
            --yellow_300: #FFCE31;

            --blue_700: #022F43;
            --blue_300: #00D1FF;

            --gray_900: #202B2C;
            --gray_700: #868686;
            --gray_500: #AFB6C2;

            --red_700: #FF3737;
            --red_300: #FF8484;

            --purple_700: #514869;

            --white: #EBEBEB;
            --black: #141A1B;

            font-size: 62.5%;
        }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }

    html, body, #root {
        max-width: 100vw;
        max-height: 100vh;

        height: 100%;
        width: 100%;

        background: var(--background);
    }

    *, button, input {
        border: 0;
        background: none;
        font-family: 'Poppins', sans-serif;
        color: var(--white);
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    
`;
