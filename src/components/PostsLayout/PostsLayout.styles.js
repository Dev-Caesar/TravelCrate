import styled from 'styled-components';

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
