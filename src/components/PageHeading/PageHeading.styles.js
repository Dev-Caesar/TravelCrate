import styled from 'styled-components';
import { ArrowBackIos } from '@mui/icons-material/';

export const Pageheading = styled.header`
  display: flex;

  .BackBtn {
    background-color: transparent;
    border: none;
    outline: none;
  }
  .Greetingh1 {
    font-family: var(--Heading-font);
    font-size: clamp(2.8rem, 2vw + 1rem, 3.2rem);
    color: var(--body-4);
    margin-bottom: 1.5rem;
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
