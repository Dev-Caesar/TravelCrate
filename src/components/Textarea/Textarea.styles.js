import styled from 'styled-components';

export const TextArea = styled.textarea`
  font-family: var(--body-font);
  width: 100%;
  resize: none;
  outline: none;
  border: 3.7px solid var(--blue-1);
  height: 13rem;
  border-radius: 12px;
  background-color: var(--dark-blue-2);
  font-size: 1.8rem;
  color: var(--body-4);
  caret-color: var(--body-4);
  padding: 1rem;
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
