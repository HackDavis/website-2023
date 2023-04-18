import React from 'react';
import {
  CreateBackground,
  CreateBunny,
  CreateIceCreamCone,
  CreateIceCreamScoop,
  CreatePipeHorizontal,
  CreatePipeVertical,
  CreateSnow,
} from '@/assets/truck/create';
import styles from '@/styles/truck/create.module.scss';

const Create = () => (
  <div className={styles.container}>
    <CreateBackground />
    <CreatePipeHorizontal />
    <CreatePipeVertical />
    <CreateIceCreamCone />
    <CreateIceCreamScoop />
    <CreateBunny />
    <CreateSnow />
  </div>
);

export default Create;
