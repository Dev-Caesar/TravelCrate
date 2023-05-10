import { post, comments } from '../../utils/data';
import Comment from '../Comment/Comment';
import * as Styled from '../Comments/Comments.styles';
import { TextArea } from '../Textarea/Textarea.styles';
const Comments = () => {
  return (
    <Styled.CommentSection>
      <div className='PostCaption'>
        <div className='UserInfo'>
          <Styled.ProfilePhotoContainer>
            <img src={post.profilePhoto} alt='' />
          </Styled.ProfilePhotoContainer>
          <p className='Username'>{post.username}</p>
        </div>
        <p className='Caption'>{post.caption}</p>
      </div>
      <h3>Comments</h3>
      <div className='CommentBox'>
        <TextArea name='comment' placeholder='write a comment...'></TextArea>
        <Styled.PostButton>Post</Styled.PostButton>
      </div>
      <div className='UserComments'>
        {comments.map((comment) => {
          return <Comment key={comment.key} comment={comment} />;
        })}
      </div>
    </Styled.CommentSection>
  );
};

export default Comments;
