import UserAvatar from '../UserAvatar/UserAvatar';
import * as Styled from './Comment.styles';

const Comment = ({ comment }) => {
  return (
    <Styled.UserComment>
      <UserAvatar src={comment.profilePhoto} />
      <Styled.UserInfo>
        <p className='User'>
          {comment.username + ' '} <span className='Comment'>{comment.comment}</span>
        </p>
      </Styled.UserInfo>
    </Styled.UserComment>
  );
};

export default Comment;
