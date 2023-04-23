import styled from 'styled-components';
import { Button } from '../../components/Buttons/Button.styles';
export const Container = styled.section`
  margin: 0 auto;
  width: 90vw;
  max-width: 123.5rem;
  margin-top: 4rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  h1 {
    font-size: clamp(var(--h1-mobile), 2vw + 1rem, var(--h1-desktop));
    color: var(--dark-blue-1);
  }

  p {
    font-size: clamp(1.6rem, 1vw + 1rem, 1.8rem);
    width: 90%;
    margin: 0 auto;
    color: var(--body-1);
  }
`;

export const HeaderImg = styled.img`
  max-width: 35rem;
`;

export const WhiteBackground = styled.div`
  background-color: var(--white);
  width: 100%;
  max-width: 60rem;
  padding: 3rem;
  border-radius: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  align-items: center;
  text-align: center;
  @media (min-width: 768px) {
    gap: 2.5rem;
  }
`;

export const BarsGroup = styled.div`
  display: flex;
  gap: 0.7rem;
`;

export const CurrentScreenBars = styled.div`
  width: 6rem;
  height: 0.4rem;
  border-radius: 0.3rem;
  background-color: ${(props) => (props.currentScreen ? `var(--blue-1)` : `var(--body-3)`)};
`;
export const ButtonContainer = styled.div`
  display: flex;
  gap: 9rem;
`;

export const SkipButton = styled(Button)`
  padding: 0;
  background-color: transparent;
  border-radius: 0rem;
  color: var(--dark-blue-1);

  &:hover {
    background-color: transparent;
    color: var(--body-2);
  }
  &:active {
    color: var(--dark-blue-2);
  }
`;
