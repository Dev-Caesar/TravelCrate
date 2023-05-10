import styled from 'styled-components';

export const HomeFeedLayout = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    align-self: stretch;
  }
  .PageHeading {
    display: flex;
    align-items: center;
    padding-bottom: 2rem;
  }
  @media (min-width: 62.5em) {
    flex-direction: row;
  }
`;
