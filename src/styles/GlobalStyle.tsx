import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    ::-webkit-scrollbar {
        width: 10px;  /* 스크롤바의 너비 */
        height: 10px;
    }
    ::-webkit-scrollbar-thumb {
        height: 30%; /* 스크롤바의 길이 */
        background: grey; /* 스크롤바의 색상 */
        border-radius: 10px;
    }
    ::-webkit-scrollbar-track {
        background: inherit;
    }

    body{
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans KR', sans-serif;
        background-color: rgba(255, 255, 255, 0.8);
    };
    html,
    body,
    body > div:first-child,
    div#__next,
    div#__next > div {
      height: 100%;
    }
`;

export default GlobalStyle;