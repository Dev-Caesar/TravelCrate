import { postsData } from '../../utils/data';
import Post from '../../components/Post/Post';
import * as Styled from './PostsFeedPage.styles';
import { PostsLayout } from '../../components/PostsLayout/PostsLayout.styles';

const PostsFeedPage = () => {
  return (
    <Styled.PostFeedContainer>
      <Styled.Header>
        <h1>{'Good Morning!'}</h1>
        <Styled.HeadingTwo className='Username'>username</Styled.HeadingTwo>
        <p>Top travel inspiration for today</p>
      </Styled.Header>

      <PostsLayout>
        {postsData.map((post) => (
          <Post key={post.timeOfPost} post={post} />
        ))}
      </PostsLayout>
      {/* //TODO: load more post button */}
    </Styled.PostFeedContainer>
  );
};

export default PostsFeedPage;
