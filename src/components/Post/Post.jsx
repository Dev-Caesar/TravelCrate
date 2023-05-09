import PostInteractionIcons from '../PostInteractionIcons/PostInteractionIcons';
import * as Styled from './Post.styles';

const Post = ({ post }) => {
  return (
    <Styled.Article>
      <header>
        <div className='ImgContainer'>
          <Styled.ProfilePhoto src={post.profilePhoto} alt='' />
        </div>
        <div className='PostInfo'>
          <h2 className='Username'>{post.username}</h2>
          <time dateTime={post.timeOfPost} className='Time'>
            {post.timeOfPost}
          </time>
        </div>
      </header>
      <Styled.Figure>
        <figcaption>
          {post.caption}...
          <span>
            <a href='#'>Read more</a>
          </span>
        </figcaption>
        <div className='PostContainer'>
          <img src={post.photoUrl} alt='' className='PostPhoto' />
        </div>
      </Styled.Figure>
      <PostInteractionIcons />
    </Styled.Article>
  );
};

export default Post;
