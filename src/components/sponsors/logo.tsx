import Image, { StaticImageData } from 'next/image';
import styles from '@/styles/sponsors/sponsors2.module.scss';

const Logo = ({imgSrc}:{imgSrc: StaticImageData}) => {
    return (
    <div className={styles.logoContainer}>
      <Image src={imgSrc} alt="" className={styles.logo} />
    </div>
    )
}

export default Logo;