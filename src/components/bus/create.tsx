import React from 'react';
import {
  CreateBackground,
  CreateBunny,
  CreateIceCreamCone,
  CreateIceCreamScoop,
  CreatePipeHorizontal,
  CreatePipeVertical,
  CreateSnow,
} from '@/assets/create';
import styles from '@/styles/bus/create.module.scss';

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
