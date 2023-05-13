import * as styled from 'styled-components';
import normalize from 'styled-normalize';

export default styled.createGlobalStyle`
  ${normalize} // make styles in all browsers the same  

  :root {
    --blue-1: #5f9dfa;
    --blue-2: #8fbafb;
    --blue-hover: #456aa2;
    --dark-blue-1: #151a24;
    --dark-blue-2: #2c313a;
    --gray-1: #9e9fa5;
    --gray-2: #babcc3;
    --body-1: #444850;
    --body-2: #5b5f66;
    --body-3: #dddde1;
    --body-4: #f8f8f9;
    --danger: #ef233c;
    --white: #ffffff;
    --like: #f72585;
    --box-shadow-hover: 0px 0px 0px 6px rgba(94, 157, 250, 0.5);
    --box-shadow-active: 0px 0px 0px 6px rgba(94, 157, 250, 0.7);
    --box-shadow-active-danger: 0px 0px 0px 6px rgba(235, 39, 50, 0.6);
    --box-shadow-hover-danger: 0px 0px 0px 6px rgba(235, 39, 50, 0.3);

    --h1-mobile: 2.6rem;
    --h2-mobile: 2.2rem;
    --h3-mobile: 2rem;

    --h1-desktop: 3.2rem;
    --h2-desktop: 2.4rem;
    --h3-desktop: 2.2rem;

    --Heading-font: 'Open Sans', sans-serif;
    --body-font: 'Source Sans Pro', sans-serif;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%; //  1rem===10px, 2rem===20px  (10/16 *100)
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  body {
    background-color: var(--dark-blue-1);
    ::-webkit-scrollbar {
      width: 10px; /* width of the scrollbar */
    }

    ::-webkit-scrollbar-track {
      background: #2c313a; /* color of the track */
    }

    ::-webkit-scrollbar-thumb {
      background-color: #444850; /* color of the scroll thumb */
      border-radius: 20px; /* roundness of the scroll thumb */
    }
    ::-moz-scrollbar-thumb {
      background-color: #444850; /* color of the scroll thumb */
      border-radius: 20px; /* roundness of the scroll thumb */
    }
  }
  h1,
  h2,
  h3 {
    font-family: var(--Heading-font);
    margin: 0;
    padding: 0;
  }
  p,
  button,
  label,
  input,
  span,
  input::placeholder {
    font-family: var(--body-font);
  }
  img {
    display: block;
    width: 100%;
  }
`;
