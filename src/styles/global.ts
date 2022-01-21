import {createGlobalStyle} from "styled-components";


export const GlobalStyle = createGlobalStyle`

    :root {
        --background:#E5E5E5;
        --red: #FF3326;
        --blue:#3B5CA8;
        --yellow:#FFCB05;
        --green:#45B572;
        --orange:#7F55F6;
        --grey-500:#1E1E1F;
        --grey-400:#4B4B4D;
        --grey-300:#7D7E80;
        --grey-200:#D2D4D6;
        --grey-100:#F5F7FA;
    }
     
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
  
        body {
            background-color: var(--background);
        }

        body, input, button {

            font-family: 'Poppins',sans-serif;
        }

        .react-modal{
            background-color: rgba(0,0,0,0.15);
            position: fixed;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
        }

        

`;