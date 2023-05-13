import { useState } from 'react';
import PlanTripPage from '../pages/PlanTripPage/PlanTripPage';

const PlanTripContainer = () => {
  const [startDate, setStartDate] = useState(new Date());
  return <PlanTripPage startDate={startDate} setStartDate={setStartDate} />;
};

export default PlanTripContainer;
