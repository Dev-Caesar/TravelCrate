import TopNavBar from '../../layout/TopNav/TopNavBar';
import SideBar from '../../layout/SideBar/SideBar';
import * as Styled from './HomePage.styles';
import UploadPost from '../../Containers/UploadPost/UploadPost';
// import PostDetails from '../../Containers/PostDetails/PostDetails';
// import PostsFeed from '../../Containers/PostsFeed/PostsFeed';

const HomePage = () => {
  return (
    <Styled.HomeFeedLayout>
      <div>
        <TopNavBar />
        <SideBar />
      </div>
      {/* <PostsFeed /> */}
      {/* <PostDetails /> */}
      <UploadPost />
    </Styled.HomeFeedLayout>
  );
};

export default HomePage;
