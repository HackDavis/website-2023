import React, { useEffect, useState } from 'react';
import styles from '@/styles/bus/bus.module.scss';
import { DesktopView, DefaultView, TabletView } from '@/lib/breakpoints';
import WindowOne from './windowOne';
import WindowTwo from './windowTwo';
import WindowThree from './windowThree';
import WindowFour from './windowFour';

const Bus = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
    }
  }, [mounted]);

  return (
    <div
      style={{
        backgroundColor: '#043142',
        paddingTop: 16,
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          // marginRight: 30,
          marginRight: '7.6%',
          // marginRight: 'min(7.6%, 30px)',
          borderRadius: '0 20px 20px 0',
          padding: '20px 20px 0 0',
        }}
      >
        <WindowOne />
        <WindowTwo />
        <WindowThree />
        <WindowFour />
      </div>
    </div>
  );
};

export default Bus;
