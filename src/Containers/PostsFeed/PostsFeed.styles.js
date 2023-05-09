import styled from 'styled-components';

export const PostFeedContainer = styled.main`
  align-self: stretch;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 2rem;
  overflow: auto;
  @media (min-width: 62.5em) {
    height: 100%;
  }
  h1 {
    color: var(--body-4);
    font-size: clamp(2.8rem, 2vw + 1rem, 3.2rem);
  }

  p {
    color: var(--body-3);
    font-size: clamp(1.6rem, 2vw + 1rem, 1.8rem);
    font-weight: 300;
    padding-bottom: 4rem;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const PostsLayout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  max-width: 33rem;
  margin: 0 auto;
  @media (min-width: 37.2em) {
    max-width: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    gap: 3rem;
  }
  @media (min-width: 62em) {
    max-width: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
    gap: 3rem;
  }
`;

export const HeadingTwo = styled.h2`
  font-size: clamp(2.2rem, 2vw + 1rem, 2.4rem);
  padding-bottom: 0.8rem;
  color: var(--body-4);
`;
