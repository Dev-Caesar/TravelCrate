// import Post from '../../components/Post/Post';
import PageHeading from '../../components/PageHeading/PageHeading';
import Post from '../../components/Post/Post';
import * as Styled from './SearchPage.styles';
import { postsData, usersSearchResults } from '../../utils/data';
import UserResult from '../../components/UserResults/UserResult';
import * as StyledPostsLayout from '../../components/PostsLayout/PostsLayout.styles';
const SearchPage = () => {
  let users = false;
  let posts = true;
  return (
    <Styled.Container $mobile={false}>
      <PageHeading pageName={'Search Page'} />
      <Styled.SearchField className='SearchField'>
        <label htmlFor='searchField'>Search</label>
        <Styled.SearchIcon />
        <Styled.SearchElement type='search' name='searchField' placeholder='Search' />
      </Styled.SearchField>
      <Styled.FilterBtnsContainer>
        <Styled.FilterBtn $filter={'active'}>Users</Styled.FilterBtn>
        <Styled.FilterBtn $filter={'disabled'}>Posts</Styled.FilterBtn>
      </Styled.FilterBtnsContainer>
      {users && (
        <Styled.UserResults className='UserResults' $users={users}>
          {usersSearchResults.map((userResult) => {
            return <UserResult userResult={userResult} key={userResult.username} />;
          })}
        </Styled.UserResults>
      )}

      {posts && (
        <StyledPostsLayout.PostsLayout style={{ width: '100%', marginTop: '5rem' }}>
          {postsData.map((postResult) => {
            return <Post key={postResult.timeOfPost} post={postResult} />;
          })}
        </StyledPostsLayout.PostsLayout>
      )}
    </Styled.Container>
  );
};

export default SearchPage;
