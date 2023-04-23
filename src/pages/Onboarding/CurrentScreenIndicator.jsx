import { BarsGroup, CurrentScreenBars } from './Onboarding.styles';

const CurrentScreenIndicator = ({ currentScreen }) => {
  return (
    <BarsGroup>
      <CurrentScreenBars currentScreen={currentScreen + 1 === 1 ? 1 : ''}></CurrentScreenBars>
      <CurrentScreenBars currentScreen={currentScreen === 1 ? 1 : ''}></CurrentScreenBars>
      <CurrentScreenBars currentScreen={currentScreen === 2 ? 2 : ''}></CurrentScreenBars>
    </BarsGroup>
  );
};

export default CurrentScreenIndicator;
