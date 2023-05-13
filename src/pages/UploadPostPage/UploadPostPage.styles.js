import styled from 'styled-components';
import { UploadFileRounded } from '@mui/icons-material/';
import { StyledButton } from '../../components/Buttons/Button.styles';
import { Input } from '../../components/InputElements/InputElements.styles';

export const Container = styled.main`
  padding-top: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  margin: 0 auto;
  height: ${(props) => (props.$mobile ? '100vh' : '100%')};
  overflow: ${(props) => (props.$mobile ? 'auto' : 'unset')};
  @media (min-width: 62.5em) {
    padding-top: clamp(2rem, 2vw + 1rem, 4rem);
    width: 70vw;
  }

  .ProgressBar {
    background-color: var(--blue-2);
    border-radius: 20px;
    height: 1rem;
    width: 100%;
    margin: 1.5rem 0;
  }
  .Progress {
    background-color: var(--blue-1);
    border-radius: 20px;
    height: 100%;
    width: 5%;
    transition: width 0.3s ease-in-out;
  }
`;

export const SelectPostContainer = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 65rem;
  background-color: var(--dark-blue-2);
  margin-top: 3rem;
  padding: 2rem;
  align-items: center;
  border-radius: 2rem;
  .LabelText {
    color: var(--body-4);
    font-weight: 600;
    font-size: clamp(1.8rem, 2vw + 1rem, 2.4rem);
  }
  span {
    font-size: 1.5rem;
    font-weight: 300;
    color: var(--gray-1);
  }
  .InfoText {
    margin-bottom: 1.4rem;
  }
`;
export const UploadFileRoundedIcon = styled(UploadFileRounded)`
  padding-bottom: 1.6rem;
  color: var(--blue-1);
  font-size: 7rem !important;
`;

export const ChooseFileBtn = styled(StyledButton)`
  width: 100%;
  max-width: 18rem;
  padding: 1.5rem;
  border-radius: 2.4rem;
`;

export const AddPostDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 40rem;
  margin-top: 2rem;
  .CaptionField,
  .LocationField {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
  }
  .CaptionLabelText,
  .LocationText {
    font-size: clamp(1.6rem, 2vw + 1rem, 1.8rem);
    color: var(--body-4);
    padding-bottom: 0.7rem;
  }
  .ErrorMessage {
    padding-top: 0.6rem;
    font-size: 1.4rem;
    color: var(--danger);
  }
`;
export const InputElement = styled(Input)``;
export const UploadCancelBtns = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 4rem;
  padding-bottom: 3rem;
`;

export const Button = styled(StyledButton)`
  width: 40%;
  border-radius: 1.4rem;
  background-color: ${({ $btnType }) =>
    $btnType === 'cancel' ? 'var(--danger)' : 'var(--blue-2)'};
  &:hover {
    box-shadow: ${({ $btnType }) =>
      $btnType === 'cancel' ? `var(--box-shadow-hover-danger)` : 'var(--box-shadow-hover)'};
  }
  &:active {
    box-shadow: ${({ $btnType }) =>
      $btnType === 'cancel' ? 'var(--box-shadow-active-danger)' : 'var(--box-shadow-active)'};
  }
`;
