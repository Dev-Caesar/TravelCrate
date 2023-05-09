import styled from 'styled-components';

export const HomeFeedLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    align-self: stretch;
  }
  @media (min-width: 62.5em) {
    flex-direction: row;
  }
`;
