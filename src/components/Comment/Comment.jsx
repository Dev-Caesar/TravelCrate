import { ProfilePhotoContainer } from '../Comments/Comments.styles';
import * as Styled from './Comment.styles';

const Comment = ({ comment }) => {
  return (
    <Styled.UserComment>
      <ProfilePhotoContainer>
        <img src={comment.profilePhoto} alt='' />
      </ProfilePhotoContainer>
      <Styled.UserInfo>
        <p className='User'>
          {comment.username + ' '} <span className='Comment'>{comment.comment}</span>
        </p>
      </Styled.UserInfo>
    </Styled.UserComment>
  );
};

export default Comment;
