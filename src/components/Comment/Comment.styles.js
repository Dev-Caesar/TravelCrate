import styled from 'styled-components';

export const UserComment = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  .User {
    color: var(--blue-2);
    font-size: 1.6rem;
    font-weight: 600;
  }
  .Comment {
    color: var(--body-4);
    font-weight: 300;
  }
`;
