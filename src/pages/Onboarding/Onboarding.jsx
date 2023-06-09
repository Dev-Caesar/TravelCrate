import CurrentScreenIndicator from './CurrentScreenIndicator';
import {
  Container,
  HeaderImg,
  WhiteBackground,
  ButtonContainer,
  SkipButton,
  OnboardingBtn,
} from './Onboarding.styles';

import onboardingImg1 from '../../assets/onboarding-image-1.svg';
import onboardingImg2 from '../../assets/onboarding-image-2.svg';
import onboardingImg3 from '../../assets/onboarding-image-3.svg';

function Onboarding() {
  const screenDetails = [
    {
      imgSrc: onboardingImg1,
      titleText: 'Explore new Travel Experiences',
      bodyText: 'Browse through photos, read reviews  and get inspired to visit new places.',
      id: 'screen1',
    },
    {
      imgSrc: onboardingImg2,
      titleText: 'Personalization and customization',
      bodyText:
        'create a profile and tailor your experience based on your interests, preferences, and travel style.',
      id: 'screen2',
    },
    {
      imgSrc: onboardingImg3,
      titleText: 'Community and Social Connection',
      bodyText:
        "share your travel experiences, engage with other users' posts, and build friendships and travel networks. ",
      id: 'screen3',
    },
  ];
  let curScreen = 1;
  let content = screenDetails[curScreen];

  return (
    <Container>
      <HeaderImg src={content.imgSrc} key={content.id} />
      <WhiteBackground>
        <div>
          <h1>{content.titleText}</h1>
          <p>{content.bodyText}</p>
        </div>
        <CurrentScreenIndicator currentScreen={curScreen} />
        {curScreen <= 1 ? (
          <ButtonContainer>
            <SkipButton>Skip</SkipButton>
            <OnboardingBtn>Next</OnboardingBtn>
          </ButtonContainer>
        ) : (
          <OnboardingBtn>Get Started</OnboardingBtn>
        )}
      </WhiteBackground>
    </Container>
  );
}

export default Onboarding;
