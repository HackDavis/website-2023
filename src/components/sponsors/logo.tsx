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

  if (!imgSrc.blurDataURL) {
    // eslint-disable-next-line no-param-reassign
    imgSrc.blurDataURL =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8vx8AAsMBwDLzsnQAAAAASUVORK5CYII=';
  }

  return (
    <li className={styles.container}>
      <a href={url} target="_blank" rel="noreferrer">
        <Image src={imgSrc} alt={alt} className={imgClass} />
      </a>
    </li>
  );
};

export default Logo;
