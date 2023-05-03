import Image, { StaticImageData } from 'next/image';
import React from 'react';
import styles from '@/styles/sponsors/logo.module.scss';

interface LogoOptions {
  imgSrc: StaticImageData;
  alt: string;
}

const Logo = ({ imgSrc, alt }: LogoOptions) => (
  <li className={styles.container}>
    <Image src={imgSrc} alt={alt} className={styles.logo} />
  </li>
);

export default Logo;
