import LogoIcon from '../../assets/Logo-icon.svg';
import * as Styled from '../SignUp/Signup.styles';

function Login() {
  return (
    <Styled.Container>
      <Styled.Logo src={LogoIcon} alt='Travel Craft Logo Icon' />
      <h1>Welcome Back</h1>
      <p>Enter your details</p>
      <form>
        <Styled.InputContainer>
          <label htmlFor='email'>Email</label>
          <Styled.Input type='email' name='email' placeholder='Enter your email ' />
          <span>This is an error message</span>
        </Styled.InputContainer>
        <Styled.InputContainer className='last'>
          <label htmlFor='password'>Password </label>
          <Styled.Input type='password' name='pswd' placeholder='Enter your password' />
          <span>This is an error message</span>
        </Styled.InputContainer>
        <Styled.SignupButton type='button'>Login</Styled.SignupButton>
      </form>
      <p>
        {"Don't"} have an account ?<a>Sign up</a>
      </p>
    </Styled.Container>
  );
}

export default Login;
