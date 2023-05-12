import styled from 'styled-components';

export const Article = styled.article`
  background-color: var(--dark-blue-2);
  display: flex;
  border-radius: 0.5rem;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.2rem;
  color: var(--body-4);
  margin-top: 1rem;
  cursor: pointer;

  header {
    display: flex;
    align-items: center;
    gap: 1.4rem;
  }
  .Username {
    font-size: clamp(1.4rem, 2vw + 1rem, 1.6rem);
    padding-bottom: 0;
  }
  time {
    font-family: var(--body-font);
    font-size: clamp(1.4rem, 2vw + 1rem, 1.5rem);
    font-weight: 300;
  }

  .PostInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.4rem;
  }
`;

export const Figure = styled.figure`
  figcaption {
    font-family: var(--body-font);
    font-weight: 300;
    font-size: clamp(1.4rem, 2vw + 1rem, 1.5rem);
    padding-bottom: 1.5rem;
  }

  img {
    width: 100%;
  }
  .PostContainer {
    display: flex;
    height: 40rem;
  }
  .PostPhoto {
    object-fit: cover;
    object-position: top center;
  }
`;
