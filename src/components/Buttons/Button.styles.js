import styled from 'styled-components';

export const Button = styled.button`
  background-color: var(--blue-1);
  font-size: clamp(1.4rem, 1vw + 1rem, 2.1rem);
  font-weight: 600;
  color: var(--body-4);
  border-radius: 2.4rem;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 1.5rem 4.9rem;
  transition: all ease-in-out 0.2s;

  &:hover {
    background-color: var(--blue-hover);
  }
  &:active {
    background-color: var(--blue-1);
  }
`;
