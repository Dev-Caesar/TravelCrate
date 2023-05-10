import styled from 'styled-components';

export const PostDetailsContainer = styled.div`
  padding: clamp(2rem, 2vw + 1rem, 4rem);
  padding-top: 12rem;
  height: ${(props) => (props.$mobile ? '100vh' : '100%')};
  overflow: ${(props) => (props.$mobile ? 'auto' : 'unset')};
  @media (min-width: 62.5em) {
    padding: clamp(2rem, 2vw + 1rem, 4rem);
    width: 69vw;
    height: 100%;
  }
`;
