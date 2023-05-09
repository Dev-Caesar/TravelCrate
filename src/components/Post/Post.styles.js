import styled from 'styled-components';
import { Favorite, Comment, PinDrop } from '@mui/icons-material/';

export const Article = styled.article`
  background-color: var(--dark-blue-2);
  display: flex;
  border-radius: 0.5rem;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.2rem;
  color: var(--body-4);
  margin-top: 1rem;
  cursor: pointer;

  header {
    display: flex;
    align-items: center;
    gap: 1.4rem;
  }
  .Username {
    font-size: clamp(1.4rem, 2vw + 1rem, 1.6rem);
    padding-bottom: 0;
  }
  time {
    font-family: var(--body-font);
    font-size: clamp(1.4rem, 2vw + 1rem, 1.5rem);
    font-weight: 300;
  }
  .ImgContainer {
    display: flex;
    width: 6rem;
    height: 6rem;
  }
  .PostInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.4rem;
  }
`;

export const ProfilePhoto = styled.img`
  width: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

export const Figure = styled.figure`
  figcaption {
    font-family: var(--body-font);
    font-weight: 300;
    font-size: clamp(1.4rem, 2vw + 1rem, 1.5rem);
    padding-bottom: 1.5rem;
  }

  img {
    width: 100%;
  }
  .PostContainer {
    display: flex;
    height: 40rem;
  }
  .PostPhoto {
    object-fit: cover;
    object-position: top center;
  }
`;
export const PostInteractionContainer = styled.div`
  display: flex;
  gap: 1.8rem;
  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  span {
    font-weight: 300;
    font-size: 1.4rem;
  }
`;
// MUI Icons
export const FavoriteIcon = styled(Favorite)`
  color: var(--like);
  font-size: 24px !important;
`;
export const CommentIcon = styled(Comment)`
  color: #f8f8f9;
  font-size: 24px !important;
`;
export const LocationIcon = styled(PinDrop)`
  color: #f8f8f9;
  font-size: 24px !important;
`;
