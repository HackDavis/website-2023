import React from 'react';
import styles from '@/styles/bus/churner.module.scss';
import {
  ChurnerBackground,
  ChurnerGlassReflection,
  ChurnerLiquid,
  ChurnerPipeGroup1,
  ChurnerPipeGroup2,
  ChurnerPipeGroup3,
  ChurnerPropeller,
  ChurnerPropellerMiddle,
  ChurnerPropellerWings,
} from '@/assets/churner';

const Churner = () => (
  <div className={styles.container}>
    <ChurnerBackground />
    <div>
      <ChurnerLiquid />
    </div>
    <ChurnerGlassReflection />
    <ChurnerPipeGroup1 />
    <ChurnerPipeGroup2 />
    <ChurnerPipeGroup3 />
    <ChurnerPropellerWings />
    <ChurnerPropellerMiddle />
  </div>
);

export default Churner;
