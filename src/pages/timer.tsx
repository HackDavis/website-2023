import MainSection from '@/components/doe/timer/mainSectionDOE';
import Countdown from '@/components/doe/timer/timer';

const Timer = () => (
  <>
    <div style={{ backgroundColor: 'var(--color-teal-5)' }}>
        <MainSection/>
        <Countdown />
    </div>
  </>
);

export default Timer;
