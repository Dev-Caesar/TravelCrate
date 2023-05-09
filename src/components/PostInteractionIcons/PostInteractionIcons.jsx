import { post } from '../../utils/data';
import * as Styled from './PostInteractionIcon.styles';
const PostInteractionIcons = () => {
  return (
    <div>
      <Styled.PostInteractionContainer>
        <div className='LikeContainer'>
          <Styled.FavoriteIcon />
          <span>{post.likes}</span>
        </div>
        <div className='CommentContainer'>
          <Styled.CommentIcon />
          <span>{post.comments}</span>
        </div>
        <div className='LocationContainer'>
          <Styled.LocationIcon />
          <span>{post.location}</span>
        </div>
      </Styled.PostInteractionContainer>
    </div>
  );
};

export default PostInteractionIcons;
