import styled from 'styled-components';

export const PhotoLayout = styled.div`
  display: flex;
  justify-content: center;

  figure {
    max-width: 95vw;
  }
  img {
    max-width: 40rem;
    height: auto;
  }
  .PostInteractionContainer {
    background-color: var(--dark-blue-2);
    padding: 1rem;
  }
`;
