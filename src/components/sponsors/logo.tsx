import Image, { StaticImageData } from 'next/image';
import React from 'react';
import styles from '@/styles/sponsors/logo.module.scss';

interface LogoOptions {
  imgSrc: StaticImageData;
  url: string;
  alt: string;
}

const Logo = ({ imgSrc, url, alt }: LogoOptions) => {
  const imgClass = imgSrc.width / imgSrc.height < 1.75 ? styles.tall : '';

  return (
    <li className={styles.container}>
      <a href={url}>
        <Image src={imgSrc} alt={alt} className={imgClass} />
      </a>
    </li>
  );
};

export default Logo;
