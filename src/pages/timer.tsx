import MainSectionDoe from '@/components/doe/timer/mainSectionDoe';
import Countdown from '@/components/doe/timer/timer';

const Timer = () => (
  <>
    <div style={{ backgroundColor: 'var(--color-teal-5)' }}>
      <MainSectionDoe />
      <Countdown />
    </div>
  </>
);

export default Timer;
