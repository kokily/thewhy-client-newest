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
  @font-face {
    font-family: 'Fuggles-Regular';
    src: url('/fonts/Fuggles-Regular.ttf');
  }
  @font-face {
    font-family: 'DancingScript-Regular';
    src: url('/fonts/DancingScript-Regular.ttf');
  }

  @-webkit-keyframes mask5Up {
    from {
      transform: translate(0, 5%);
    }
    to {
      transform: translate(0, 0);
    }
  }

  @keyframes mask5Up {
    from {
      transform: translate(0, 5%);
    }
    to {
      transform: translate(0, 0);
    }
  }

  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default GlobalStyle;
