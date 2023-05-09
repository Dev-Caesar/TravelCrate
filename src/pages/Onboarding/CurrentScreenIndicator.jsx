import * as Styled from './Onboarding.styles';

const CurrentScreenIndicator = ({ currentScreen }) => {
  return (
    <Styled.BarsGroup>
      <Styled.CurrentScreenBars
        currentScreen={currentScreen + 1 === 1 ? 1 : ''}
      ></Styled.CurrentScreenBars>
      <Styled.CurrentScreenBars
        currentScreen={currentScreen === 1 ? 1 : ''}
      ></Styled.CurrentScreenBars>
      <Styled.CurrentScreenBars
        currentScreen={currentScreen === 2 ? 2 : ''}
      ></Styled.CurrentScreenBars>
    </Styled.BarsGroup>
  );
};

export default CurrentScreenIndicator;
