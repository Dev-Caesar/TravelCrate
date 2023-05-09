import styled from 'styled-components';
import { Favorite, Comment, PinDrop } from '@mui/icons-material/';

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
    color: var(--body-4);
  }
`;
// MUI Icons
export const FavoriteIcon = styled(Favorite)`
  color: var(--like);
  font-size: 24px !important;
  cursor: pointer;
`;
export const CommentIcon = styled(Comment)`
  color: #f8f8f9;
  font-size: 24px !important;
  cursor: pointer;
`;
export const LocationIcon = styled(PinDrop)`
  color: #f8f8f9;
  font-size: 24px !important;
`;
