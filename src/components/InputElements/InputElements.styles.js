import styled from 'styled-components';
export const Input = styled.input`
  font-size: clamp(1.6rem, 2vw + 1rem, 1.8rem);
  outline: none;
  width: 100%;
  height: 5.5rem;
  border: 2px solid var(--blue-1);
  background-color: var(--dark-blue-2);
  border-radius: 0.5rem;
  color: var(--body-3);
  padding: 0 1.4rem;
  transition: all 0.2s ease-in;
  ::placeholder {
    font-family: var(--body-font);
    font-weight: 400;
    font-size: clamp(1.4rem, 2vw + 1rem, 1.6rem);
    color: var(--body-3);
  }
  &:hover {
    box-shadow: 0px 0px 0px 6px rgba(94, 157, 250, 0.5);
  }
  &:focus {
    box-shadow: 0px 0px 0px 6px rgba(94, 157, 250, 0.7);
  }
  &:active {
    box-shadow: none;
  }
`;
