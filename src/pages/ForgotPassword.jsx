import LogoIcon from '../assets/Logo-icon.svg';
import ForgotPasswordImg from '../assets/forgot-password.svg';
import {
  StyledInput,
  Logo,
  StyledContainer,
  StyledInputContainer,
  SignupButton,
} from './SignUp/Signup.styles';

import { HeaderImg } from './Onboarding/Onboarding.styles';

function ForgotPassword() {
  return (
    <StyledContainer>
      <Logo src={LogoIcon} alt='Travel Craft Logo Icon' />
      <h1>Forgot Password?</h1>
      <p>{"We'll send you a reset link."}</p>
      <HeaderImg src={ForgotPasswordImg} />
      <form>
        <StyledInputContainer>
          <label htmlFor='email'>Email</label>
          <StyledInput type='email' name='email' placeholder='Enter your email ' />
          <span>This is an error message</span>
        </StyledInputContainer>
        <SignupButton type='button'>Reset password</SignupButton>
      </form>
      <p>
        <a>Back to login</a>
      </p>
    </StyledContainer>
  );
}

export default ForgotPassword;
