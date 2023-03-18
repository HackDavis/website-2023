import Image from 'next/image';
import React from 'react';
import styles from '@/styles/bus/churner.module.scss';
import churner from '@/images/churner.svg';
import churnerGlassReflection from '@/images/churnerGlassReflection.svg';
import churnerLiquid from '@/images/churnerLiquid.svg';
import churnerPipeGroup1 from '@/images/churnerPipeGroup1.svg';
import churnerPipeGroup2 from '@/images/churnerPipeGroup2.svg';
import churnerPipeGroup3 from '@/images/churnerPipeGroup3.svg';
import churnerPropeller from '@/images/churnerPropeller.svg';

const Churner = () => (
  <div style={{ minWidth: 296 }}>
    <div className={styles.container}>
      <Image src={churner} alt="something" />
      <Image src={churnerLiquid} alt="something" />
      <Image src={churnerGlassReflection} alt="something" />
      <Image src={churnerPipeGroup1} alt="something" />
      <Image src={churnerPipeGroup2} alt="something" />
      <Image src={churnerPipeGroup3} alt="something" />
      <Image src={churnerPropeller} alt="something" />
    </div>
  </div>
);

export default Churner;
