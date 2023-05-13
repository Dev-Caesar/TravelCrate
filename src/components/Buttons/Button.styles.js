import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: var(--blue-1);
  font-size: clamp(1.6rem, 2vw + 1rem, 1.8rem);
  font-weight: 600;
  color: var(--body-4);
  border-radius: 0.5rem;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 2rem;
  width: 100%;
  max-width: 40rem;
  transition: all ease-in-out 0.2s;

  &:hover {
    box-shadow: var(--box-shadow-hover);
  }
  &:active {
    box-shadow: var(--box-shadow-active);
  }
`;
