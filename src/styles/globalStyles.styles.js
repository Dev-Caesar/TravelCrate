import * as styled from 'styled-components';
import normalize from 'styled-normalize';

export default styled.createGlobalStyle`
  ${normalize} // make styles in all browsers the same  

  :root {
    --blue-1: #5f9dfa;
    --blue-2: #8fbafb;
    --blue-hover: #9fc4fc;
    --dark-blue-1: #151a24;
    --dark-blue-2: #2c313a;
    --gray-1: #c8c9cf;
    --gray-2: #babcc3;
    --body-1: #444850;
    --body-2: #5b5f66;
    --body-3: #dddde1;
    --body-4: #f8f8f9;
    --danger: #ef233c;
    --white: #ffffff;
    --like: #f72585;

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
