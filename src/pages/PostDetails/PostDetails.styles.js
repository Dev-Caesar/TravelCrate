import styled from 'styled-components';
import { ArrowBackIos } from '@mui/icons-material/';
export const PostDetailsContainer = styled.div`
  padding: clamp(2rem, 2vw + 1rem, 4rem);
  padding-top: 12rem;
  height: ${(props) => (props.$mobile ? '100vh' : '100%')};
  overflow: ${(props) => (props.$mobile ? 'auto' : 'unset')};
  @media (min-width: 62.5em) {
    padding: clamp(2rem, 2vw + 1rem, 4rem);
    width: 69vw;
    height: 100%;
  }
  .Greeting {
    font-size: clamp(2.8rem, 2vw + 1rem, 3.2rem);
    color: var(--body-4);
  }
  .BackBtn {
    background-color: transparent;
    border: none;
    outline: none;
  }
`;

export const ArrowBackIcon = styled(ArrowBackIos)`
  color: #f8f8f9;
  cursor: pointer;
  font-size: 32px !important;
  :hover {
    color: var(--blue-1);
  }
`;
