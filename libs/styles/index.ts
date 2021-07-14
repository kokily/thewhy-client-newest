import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", Arial, sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  @font-face {
    font-family: '윤고딕310';
    src: url('/fonts/윤고딕310.ttf');
  }
  @font-face {
    font-family: '윤고딕320';
    src: url('/fonts/윤고딕320.ttf');
  }
  @font-face {
    font-family: '윤고딕330';
    src: url('/fonts/윤고딕330.ttf');
  }
  @font-face {
    font-family: '윤고딕340';
    src: url('/fonts/윤고딕340.ttf');
  }
  @font-face {
    font-family: '윤고딕350';
    src: url('/fonts/윤고딕350.ttf');
  }
`;

export default GlobalStyle;
