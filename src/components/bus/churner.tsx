import React from 'react';
import styles from '@/styles/bus/churner.module.scss';
import ChurnerBackground from '@/assets/churnerBackground';
import ChurnerGlassReflection from '@/assets/churnerGlassReflection';
import ChurnerLiquid from '@/assets/churnerLiquid';
import ChurnerPipeGroup1 from '@/assets/churnerPipeGroup1';
import ChurnerPipeGroup2 from '@/assets/churnerPipeGroup2';
import ChurnerPipeGroup3 from '@/assets/churnerPipeGroup3';
import ChurnerPropeller from '@/assets/churnerPropeller';

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
    <ChurnerPropeller />
  </div>
);

export default Churner;
