import styled from 'styled-components';
import { StyledButton } from '../Buttons/Button.styles';

export const CommentSection = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 55rem;
  margin: 0 auto;
  .UserInfo {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    margin-top: 2.5rem;
  }
  .Username {
    font-size: clamp(1.6rem, 2vw + 1rem, 1.8rem);
    color: var(--blue-2);
  }
  .Caption {
    font-size: clamp(1.4rem, 2vw + 1rem, 1.7rem);
    color: var(--body-4);
    line-height: 1.5;
    margin-bottom: 3rem;
  }
  .CommentBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.9rem;
    padding-bottom: 2rem;
  }
  .UserComments {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  h3 {
    font-size: clamp(2.2rem, 2vw + 1rem, 2.3rem);
    color: var(--body-4);
    text-align: center;
    padding-bottom: 3rem;
  }
`;
export const TextArea = styled.textarea`
  font-family: var(--body-font);
  width: 100%;
  resize: none;
  outline: none;
  border: 3.7px solid var(--blue-1);
  height: 13rem;
  border-radius: 12px;
  background-color: var(--dark-blue-1);
  font-size: 1.8rem;
  color: var(--body-4);
  caret-color: var(--body-4);
  padding: 1rem;
  ::placeholder {
    font-family: var(--body-font);
    font-weight: 400;
    font-size: clamp(1.4rem, 2vw + 1rem, 1.6rem);
    color: var(--body-3);
  }
`;

export const PostButton = styled(StyledButton)`
  width: 100%;
  max-width: 12.6rem;
  align-self: flex-end;
  padding: 1.5rem;
  border-radius: 1rem;
`;

export const ProfilePhotoContainer = styled.div`
  display: flex;
  min-width: 4rem;
  width: 100%;
  max-width: 5rem;
  height: 100%;
  min-height: 4rem;
  max-height: 5rem;
  img {
    object-fit: cover;
    border-radius: 50%;
  }
`;
