import MainSectionDoe from '@/components/doe/timer/mainSectionDoe';
import { CountdownFallback } from '@/components/doe/timer/timer';
import dynamic from 'next/dynamic';

const Countdown = dynamic(() => import('@/components/doe/timer/timer'), {
  ssr: false,
  loading: () => <CountdownFallback />,
});

const Timer = () => (
  <>
    <div style={{ backgroundColor: 'var(--color-teal-5)' }}>
      <MainSectionDoe />
      <Countdown />
    </div>
  </>
);

export default Timer;
