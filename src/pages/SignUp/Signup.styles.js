import styled from 'styled-components';
import { StyledButton } from '../../components/Buttons/Button.styles';

export const Container = styled.div`
  padding: 4rem 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 90vw;
  max-width: 54rem;
  align-items: center;

  h1 {
    color: var(--white);
    font-size: clamp(2.8rem, 2vw + 1rem, 3.2rem);
    padding-bottom: 0.5rem;
  }
  p {
    color: var(--gray-2);
    font-size: clamp(1.6rem, 2vw + 1rem, 1.8rem);
    padding-bottom: 4rem;
  }
  a {
    color: var(--blue-1);
    cursor: pointer;
  }
  form {
    width: 100%;
  }
  label {
    font-weight: 700;
    font-size: clamp(1.6rem, 2vw + 1rem, 1.8rem);
    color: var(--body-3);
  }
  span {
    display: block;
    font-size: 1.4rem;
    color: var(--danger);
    font-weight: 300;
  }
`;

export const Logo = styled.img`
  max-width: 5.6rem;
  padding-bottom: 3.7rem;
  @media (min-width: 768px) {
    max-width: 7rem;
    padding-bottom: 6rem;
  }
`;

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

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: flex-start;
  padding-bottom: 2rem;
  &.last {
    padding-bottom: 5rem;
  }
`;

export const SignupButton = styled(StyledButton)`
  margin-bottom: 1rem;
`;
