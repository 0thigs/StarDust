import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
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
        outline: none;
    }

    button {
      cursor: pointer;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;
