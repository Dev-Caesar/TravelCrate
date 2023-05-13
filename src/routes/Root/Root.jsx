import TopNavBar from '../../layout/TopNav/TopNavBar';
import SideBar from '../../layout/SideBar/SideBar';
import * as Styled from './Root.styles';

import { Trips } from '../../Containers';

const Root = () => {
  return (
    <Styled.Layout>
      <div>
        <TopNavBar />
        <SideBar />
      </div>
      {/* <PostDetails /> */}
      {/* <UploadPost /> */}
      {/* <Search /> */}
      {/* <Destinations /> */}
      {/* <PlanTrip /> */}
      <Trips />
    </Styled.Layout>
  );
};

export default Root;
