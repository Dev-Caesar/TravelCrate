import TopNavBar from '../../layout/TopNav/TopNavBar';
import SideBar from '../../layout/SideBar/SideBar';
import * as Styled from './HomePage.styles';
import PostDetails from '../PostDetails/PostDetails';
// import PostsFeed from '../../Containers/PostsFeed/PostsFeed';

const HomePage = () => {
  return (
    <Styled.HomeFeedLayout>
      <div>
        <TopNavBar />
        <SideBar />
      </div>
      {/* <PostsFeed /> */}
      <PostDetails />
    </Styled.HomeFeedLayout>
  );
};

export default HomePage;
