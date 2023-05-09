import LogoIcon from '../assets/Logo-icon.svg';
import ForgotPasswordImg from '../assets/forgot-password.svg';
import * as Styled from './SignUp/Signup.styles';

import { HeaderImg } from './Onboarding/Onboarding.styles';

function ForgotPassword() {
  return (
    <Styled.Container>
      <Styled.Logo src={LogoIcon} alt='Travel Craft Logo Icon' />
      <h1>Forgot Password?</h1>
      <p>{"We'll send you a reset link."}</p>
      <HeaderImg src={ForgotPasswordImg} />
      <form>
        <Styled.InputContainer>
          <label htmlFor='email'>Email</label>
          <Styled.Input type='email' name='email' placeholder='Enter your email ' />
          <span>This is an error message</span>
        </Styled.InputContainer>
        <Styled.SignupButton type='button'>Reset password</Styled.SignupButton>
      </form>
      <p>
        <a>Back to login</a>
      </p>
    </Styled.Container>
  );
}

export default ForgotPassword;
