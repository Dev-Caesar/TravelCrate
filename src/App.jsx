import { Fragment } from 'react';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/Signup';
import Onboarding from './pages/Onboarding/Onboarding';
import ForgotPassword from './pages/ForgotPassword';
function App() {
  return (
    <Fragment>
      <Onboarding />
      <Signup />
      <Login />
      <ForgotPassword />
    </Fragment>
  );
}

export default App;
