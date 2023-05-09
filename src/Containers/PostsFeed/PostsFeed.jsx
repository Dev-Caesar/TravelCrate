import { posts } from '../../utils/data';
import Post from '../../components/Post/Post';
import * as Styled from './PostsFeed.styles';

const PostsFeed = () => {
  return (
    <Styled.PostFeedContainer>
      <Styled.Header>
        <h1>{'Good Morning!'}</h1>
        <Styled.HeadingTwo className='Username'>username</Styled.HeadingTwo>
        <p>Top travel inspiration for today</p>
      </Styled.Header>

      <Styled.PostsLayout>
        {posts.map((post) => (
          <Post key={post.timeOfPost} post={post} />
        ))}
      </Styled.PostsLayout>
    </Styled.PostFeedContainer>
  );
};

export default PostsFeed;
